source 'https://rubygems.org'
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

group :jekyll_plugins do
  gem 'jekyll'
  gem 'kramdown'
  gem "github-pages", versions['github-pages']
  gem "jekyll-github-metadata"
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-svg-plugin"
end
