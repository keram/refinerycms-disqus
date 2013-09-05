module Refinery
  class DisqusGenerator < Rails::Generators::Base

    source_root File.expand_path('../templates', __FILE__)

    def generate_disqus_initializer
      template 'config/initializers/refinery/disqus.rb.erb', File.join(destination_root, 'config', 'initializers', 'refinery', 'disqus.rb')
    end

  end
end
