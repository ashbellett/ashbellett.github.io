source "https://rubygems.org"

ruby File.read(".ruby-version").strip

gem "jekyll", "~> 4.3.3"

group :jekyll_plugins do
  gem "jekyll-sitemap", "~> 1.4.0"
  gem "jekyll-seo-tag", "~> 2.8.0"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0.6"
  gem "tzinfo-data"
end

gem "http_parser.rb", "~> 0.8.0", :platforms => [:jruby]
