module Refinery
  module Disqus
    include ActiveSupport::Configurable
    config_accessor :shortname

    autoload :DisqusGenerator, 'generators/refinery/disqus/disqus_generator'

    class Engine < ::Rails::Engine

      engine_name :refinery_disqus

      initializer 'register refinery_disqus javascripts' do
        Refinery::Core.config.register_javascript('refinery/disqus/disqus.min.js')
      end

    end
  end
end

