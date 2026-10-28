# Renders formulae to HTML at build time with KaTeX, installed from npm by
# package.json, and publishes the same release's stylesheet and fonts so they
# always match the HTML.
require "json"
require "open3"

module Katex
  PACKAGE = File.expand_path("../node_modules/katex", __dir__)

  # One Node process renders every formula in the build, sent and returned as
  # lines of JSON. Starting a process per formula would take minutes.
  SERVER = <<~JS
    const katex = require(process.argv[1]);
    const lines = require("readline").createInterface({ input: process.stdin });
    lines.on("line", (line) => {
      const { tex, displayMode } = JSON.parse(line);
      let reply;
      try {
        reply = { html: katex.renderToString(tex, { displayMode, throwOnError: false }) };
      } catch (error) {
        reply = { error: String(error) };
      }
      process.stdout.write(JSON.stringify(reply) + "\\n");
    });
  JS

  @mutex = Mutex.new

  # A formula KaTeX cannot parse comes back as a red katex-error span rather
  # than raising, so one typo does not stop the build. CI fails on those.
  def self.render(tex, display_mode:)
    @mutex.synchronize do
      start unless @stdin
      @stdin.puts(JSON.generate(tex: tex, displayMode: display_mode))
      line = @stdout.gets or raise "Node exited while rendering KaTeX"
      reply = JSON.parse(line)
      raise reply["error"] if reply.key?("error")

      reply["html"]
    end
  end

  def self.start
    @stdin, @stdout, = Open3.popen2("node", "-e", SERVER, PACKAGE)
    @stdin.sync = true
    @stdout.set_encoding(Encoding::UTF_8)
  rescue Errno::ENOENT
    raise "Node.js renders the formulae but is not installed. See README.md."
  end

  # The stylesheet without its woff and ttf fallbacks: every browser the site
  # supports reads woff2, so only those fonts are published.
  class Stylesheet < Jekyll::PageWithoutAFile
    def initialize(site)
      super(site, site.source, "assets/css", "katex.css")
      css = File.read(File.join(PACKAGE, "dist/katex.min.css"))
      self.content = css.gsub(/,url\([^)]+\) format\("(?:woff|truetype)"\)/, "")
      data["render_with_liquid"] = false
    end
  end

  class Font < Jekyll::StaticFile
    def initialize(site, path)
      super(site, site.source, "/assets/css/fonts", File.basename(path))
      @path = path
    end
  end

  class Assets < Jekyll::Generator
    def generate(site)
      raise "KaTeX is not installed. Run npm ci; see README.md." unless File.directory?(PACKAGE)

      site.pages << Stylesheet.new(site)
      Dir[File.join(PACKAGE, "dist/fonts/*.woff2")].each { |path| site.static_files << Font.new(site, path) }
    end
  end
end

# The kramdown math engine named in _config.yml, in place of the
# kramdown-math-katex gem. Jekyll still requires a gem of that name for any
# engine but mathjax, so mark it as loaded.
$LOADED_FEATURES << "kramdown-math-katex.rb"

Kramdown::Converter.add_math_engine(:katex, lambda do |converter, el, opts|
  display_mode = el.options[:category] == :block
  html = Katex.render(el.value, display_mode: display_mode)
  attr = el.attr.dup
  attr.delete("xmlns")
  attr.delete("display")
  html.insert(html =~ /[[:space:]>]/, converter.html_attributes(attr))
  display_mode ? "#{" " * opts[:indent]}#{html}\n" : html
end)
