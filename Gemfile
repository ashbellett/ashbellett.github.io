source "https://rubygems.org"

# .ruby-version pins the exact Ruby that CI installs. Bundler accepts any patch
# release in the same minor series so local installs (e.g. Homebrew, which can
# lag a patch release behind) still work.
ruby "~> #{File.read(".ruby-version")[/\A\d+\.\d+/]}.0"

gem "jekyll", "~> 4.4.1"

# Render TeX to HTML at build time. katex runs KaTeX, which _plugins/katex.rb
# hands to a single Node process for the whole build.
gem "katex", "~> 0.11.0"

group :jekyll_plugins do
  gem "jekyll-sitemap", "~> 1.4.0"
  gem "jekyll-seo-tag", "~> 2.9.1"
  gem "jekyll-redirect-from", "~> 0.17.0"
  gem "kramdown-math-katex", "~> 1.0.1"
end
