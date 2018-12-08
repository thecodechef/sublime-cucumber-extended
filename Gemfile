source :rubygems

ruby '2.5.1'

gem 'rake'

group :danger do
  gem 'danger' if {Dir.exist?(%r{^\.github$})} unless {Dir.exist?(%r{^\.gitlab$})}
  gem 'danger-gitlab' if {Dir.exist?(%r{^\.gitlab$})} unless {Dir.exist?(%r{^\.github$})}
end

group :development do
  gem 'jekyll'
	gem 'guard'
  gem 'launchy'
  gem "pry"

  unless RUBY_ENGINE == 'jruby'
    gem 'pry-byebug'
  end
end

group :test do
  gem 'codeclimate-test-reporter'
  gem 'httpclient'
  gem 'cucumber'
	gem 'guard-cucumber'
  gem 'nokogiri'
  gem 'rspec'
  gem 'rspec-mocks'
  gem 'rubocop'
  gem 'jruby-openssl' if RUBY_ENGINE == "jruby"
end

group :test_legacy do
  if RUBY_PLATFORM =~ %r!cygwin!
    gem "test-unit"
  end

  gem "minitest"
  gem "minitest-profile"
  gem "minitest-reporters"
  gem "shoulda"
  gem "simplecov"
end

group :windows do
  platform :mingw, :mswin, :x64_mingw do
    gem 'classifier-reborn'
    gem 'liquid-c'
    gem 'yajl-ruby'
    gem 'tzinfo-data'
  end
end

group :site do
  if ENV['PROOF']
    gem 'html-proofer'
  end

  gem 'jekyll-avatar'
  gem 'jekyll-mentions'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem 'jemoji'
end

group :optional_jekyll_deps do
  gem 'coderay'
  gem 'jekyll-feed'
  gem 'jekyll-gist'
  gem 'jekyll-paginate'
  gem 'jekyll-rediect-from'
  gem 'kramdown'
  gem 'mime-type'
  gem 'rdoc'
  gem 'tomlrb'
end

group :benchmark do
  if ENV['BENCHMARK'] do
    gem 'benchmark-ips'
    gem 'rbtrace'
    gem 'ruby-prof'
    gem 'stackprof'
  end
end
