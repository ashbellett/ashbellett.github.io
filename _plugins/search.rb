# Search for the notes. Every bold term in a note, which is how the notes mark
# a defined term, gets an id, so search results can link straight to its
# definition. The topics, notes and their terms are published as
# /notes/search.json, which assets/js/search.js fetches on first use.
require "cgi"
require "json"

module Search
  # kramdown writes bold text as a bare <strong>, which never nests
  STRONG = %r{<strong>(.*?)</strong>}m

  # Ids the layouts already use, which a term must not take
  RESERVED_IDS = %w[content menu search search-results].freeze

  # Plain text of a term's HTML. Each formula is replaced by the text of its
  # MathML, so "<strong>$$\sigma$$-algebra</strong>" reads "σ-algebra".
  def self.plain_text(html)
    text = +""
    rest = html
    while (start = rest.index('<span class="katex'))
      text << rest[0...start]
      finish = span_end(rest, start)
      math = rest[start...finish][%r{<math.*?</math>}m].to_s
      text << math.sub(%r{<annotation.*?</annotation>}m, "")
      rest = rest[finish..]
    end
    text << rest
    # KaTeX marks under- and overlines with a combining character in MathML
    text = CGI.unescapeHTML(text.gsub(/<[^>]*>/, "")).delete("​‾¯")
    text.gsub(/\s+/, " ").strip
  end

  # Index just past the </span> that closes the <span> at start
  def self.span_end(html, start)
    depth = 0
    position = start
    while (match = html.match(%r{<span\b|</span>}, position))
      depth += match[0] == "</span>" ? -1 : 1
      position = match.end(0)
      return position if depth.zero?
    end
    html.length
  end

  def self.slug(text)
    slug = text.unicode_normalize(:nfkd).gsub(/\p{Mn}/, "").downcase
    slug = slug.delete("'’").gsub(/[^\p{Alnum}]+/, "-").delete_prefix("-").delete_suffix("-")
    slug.empty? ? "term" : slug
  end

  def self.note?(doc)
    doc.data["layout"] == "post" && doc.collection.label != "posts"
  end

  # The index, in reading order: topics by their key in _config.yml, then each
  # topic's notes in its configured order. A term defined twice in one note,
  # e.g. for discrete and continuous random variables, links to the first.
  def self.index(site)
    topics = site.collections.values.reject { |c| c.label == "posts" }
    topics.sort_by { |c| c.metadata["key"] }.map do |collection|
      topic_page = collection.docs.find { |doc| doc.data["layout"] == "collection" }
      {
        title: collection.metadata["title"],
        url: site.baseurl.to_s + topic_page.url,
        description: collection.metadata["description"],
        notes: collection.docs.select { |doc| note?(doc) }.map do |doc|
          {
            title: doc.data["title"],
            url: site.baseurl.to_s + doc.url,
            description: doc.data["description"],
            terms: doc.data["terms"].to_a.uniq { |label, _| label.downcase }
          }
        end
      }
    end
  end

  class Index < Jekyll::PageWithoutAFile
    def initialize(site)
      super(site, site.source, "notes", "search.json")
      data["render_with_liquid"] = false
      data["sitemap"] = false
    end
  end

  class Generator < Jekyll::Generator
    def generate(site)
      site.pages << Index.new(site)
    end
  end
end

# Adds the ids after kramdown and KaTeX have made the note's HTML, and before
# the layout wraps it. Every bold term gets one, even a repeat, which takes the
# next free number, so the ids of a note never depend on another note.
Jekyll::Hooks.register :documents, :post_convert do |doc|
  next unless Search.note?(doc)

  taken = Search::RESERVED_IDS + doc.content.scan(/\bid="([^"]*)"/).flatten
  terms = []
  doc.content = doc.content.gsub(Search::STRONG) do
    inner = Regexp.last_match(1)
    label = Search.plain_text(inner)
    base = Search.slug(label)
    id = base
    number = 1
    id = "#{base}-#{number += 1}" while taken.include?(id)
    taken << id
    terms << [label, id]
    %(<strong id="#{id}">#{inner}</strong>)
  end
  doc.data["terms"] = terms
end

# Every note has been rendered, and its terms collected, by the time the site
# is written, so the index is filled in here
Jekyll::Hooks.register :site, :post_render do |site|
  index = site.pages.find { |page| page.is_a?(Search::Index) }
  index.output = JSON.generate(Search.index(site)) if index
end
