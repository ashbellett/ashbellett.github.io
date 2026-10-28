source "https://rubygems.org"

# .ruby-version pins the exact Ruby that CI installs. Bundler accepts any patch
# release in the same minor series so local installs (e.g. Homebrew, which can
# lag a patch release behind) still work.
ruby "~> #{File.read(".ruby-version")[/\A\d+\.\d+/]}.0"

gem "jekyll", "~> 4.4.1"

# Formulae are rendered by KaTeX from npm (package.json), not a gem. See
# _plugins/katex.rb.

group :jekyll_plugins do
  gem "jekyll-sitemap", "~> 1.4.0"
  gem "jekyll-seo-tag", "~> 2.9.1"
  gem "jekyll-redirect-from", "~> 0.17.0"
end
