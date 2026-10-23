# The katex gem bundles an older KaTeX release and has no setting to change it.
# Point it at the copy vendored in _vendor/katex so the HTML rendered at build
# time matches assets/css/katex.css and assets/css/fonts, which come from the
# same release. _vendor is not published. See README.md for how to upgrade.
require "katex"

module Katex
  def self.katex_js_path
    File.expand_path("../_vendor/katex/katex.min.js", __dir__)
  end
end
