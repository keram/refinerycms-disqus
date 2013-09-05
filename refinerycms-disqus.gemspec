# Encoding: UTF-8
Gem::Specification.new do |s|
  s.platform          = Gem::Platform::RUBY
  s.name              = %q{refinerycms-disqus}
  s.version           = '0.0.1'
  s.description       = %q{Disqus plugin for refinerycms}
  s.summary           = %q{Disqus plugin for refinerycms}
  s.email             = %q{nospam.keram@gmail.com}
  s.homepage          = %q{http://refinery.sk}
  s.authors           = ['Marek Labos']
  s.license           = ['MIT']
  s.files             = Dir['lib/**/*', 'app/**/*', '*.md']
  s.require_paths     = %w(lib)

  s.add_dependency    'refinerycms-core', '~> 2.718.0.dev'
end
