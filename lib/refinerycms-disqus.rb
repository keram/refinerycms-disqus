module Refinery
  module Disqus
    include ActiveSupport::Configurable
    config_accessor :shortname

    autoload :DisqusGenerator, 'generators/refinery/disqus/disqus_generator'

    class Engine < ::Rails::Engine

      engine_name :refinery_disqus

      initializer 'register refinery_disqus plugin' do
        ::Refinery::Plugin.register do |plugin|
          plugin.name = 'disqus'
          plugin.hide_from_menu = true
          plugin.always_allow_access = true
          plugin.pathname = root
        end
      end

      initializer 'register refinery_disqus javascripts' do
        Refinery::Core.config.register_javascript('refinery/disqus.min.js')
      end

    end
  end
end

