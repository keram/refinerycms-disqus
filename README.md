# Refinery CMS Disqus plugin

[Disqus](http://disqus.com/) - comments platform integration for [Refinery CMS](http://refinerycms.com).

This version of `refinerycms-disqus` supports Rails 4.0.x.

## Requirements

Refinery CMS version 2.718.dev or above.
Account at [Disqus](http://disqus.com/).

## Install

Open up your ``Gemfile`` and add at the bottom this line:

```ruby
gem 'refinerycms-disqus', '~> 0.0.1'
```

Run ``bundle install``

Next, to install the Disqus plugin run:

    rails generate refinery:disqus

Set in config/initializers/refinery/disqus.rb acquired disqus_shortname identificator.

In your application templates in place where you want display comments put:

  <%= render partial: '/refinery/disqus/thread' %>

You can also specify additional configuration optins by passing
them to ``/refinery/disqus/thread`` partial.
Available options are:

```
config = {
  page: {
    identifier: '',
    title: ''
    url: ''
  },
  language: '',
  category_id: '',
  shortname: '' # overrides Refinery::Disqus.config.shortname
}

```

### Example usage for refinerycms blog post

```
<%= render partial: '/refinery/disqus/thread', locals: {
  config: {
    page: { identifier: dom_id(@post) }
  }
} %>
```

## Donate

[Donations for development and support](http://keram.github.io/fundraising.html)
