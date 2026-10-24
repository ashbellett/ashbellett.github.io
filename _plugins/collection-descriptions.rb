# Topic index pages have no description of their own. Use the collection's
# description from _config.yml so jekyll-seo-tag emits one for them too.
Jekyll::Hooks.register :site, :post_read do |site|
  site.collections.each_value do |collection|
    description = collection.metadata["description"]
    next unless description

    collection.docs.each do |doc|
      next unless doc.data["layout"] == "collection"

      doc.data["description"] ||= description
    end
  end
end
