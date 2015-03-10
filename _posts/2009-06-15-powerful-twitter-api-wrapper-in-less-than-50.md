---
layout: post
title: "Going META - Twitter API wrapper in less than 50 lines"
---

I have been long fascinated about active record dynamic finders ```find_by_``` and wanted to write some thing similarly elegant, this twitter client uses ruby metaprogramming to dynamically generate objects and methods and adds simpler and easy to user methods for [Twitter REST API](https://dev.twitter.com).

{% highlight ruby %}
#!/usr/bin/env ruby

# Author:: Greg Osuri <http://gregosuri.com>
#
# Copyright:: 2009 Greg Osuri. All Rights Reserved
#
# Licensed under the MIT License
# 
# Simple and Powerful Twitter REST API Wrapper.
# This library adds simpler and easy to user methods for Twitter REST API at
# https://dev.twitter.com/
# For Example,users/show REST method can be invoked simply
# by calling user.show(:user_id=>1401881)
# Usage Example:
#   client = Twitter.new("user","pass")
#   user = client.users.lookup(:screen_name => "gregosuri")
# For posting, attach post at the method chain, e.g.
#   client.statuses.update.post(:status=>"Ruby Metaprogramming Rocks")

require 'rubygems'
require 'httparty'

class Twitter
  include HTTParty

  def initialize(user,pass)
    @auth = {:username => user, :password => pass}
    @proxy = TwitterProxy.new
  end
  
  def method_missing(method, *args, &block)
    @proxy.append(method, args[0])
    @opts = {:query => @proxy.options, :basic_auth => @auth}
    if args.size > 0 && !method.to_s.eql?("post")
      execute("get")
    elsif method.to_s.match /\bget\b|\bpost\b/
      execute(method)
    else
      return self
    end
  end
  
  def execute(method)
    res = TwitterResponse.construct self.class.send(method,@proxy.url,@opts)
    @proxy = TwitterProxy.new
    res
  end
  
  class TwitterProxy
    attr_reader :options
    
    def initialize
      @keys = []; @options = {}
    end
    
    def append(key,options)
      @keys << key;  @options.merge!(options) if options 
    end
    
    def url
      @url = "http://api.twitter.com/1/" + @keys.join("/") + ".json"
    end
  end

  class TwitterResponse
    attr_reader :errors
    def initialize(hash)
      hash.each do |k,v|
        TwitterResponse.new v if v.class == Hash
        self.instance_variable_set("@#{k}", v)
        self.class.send(:define_method, k, proc{self.instance_variable_get("@#{k}")})
      end
    end
    
    def self.construct(res)
      return res.class == Array 
                          ? res.collect { |item| TwitterResponse.new(item) } 
                          : TwitterResponse.new(res)
    end
  end
end
{% endhighlight %}

Examples
--------

{% highlight ruby %}
client = Twitter.new("user","password")
status = client.statuses.show(:id => "13400589015") 
p status.errors ? status.errors : status.text

# More Examples
user = client.users.lookup(:screen_name => "gregosuri")
client.statuses.update.post(:status=>"Ruby Metaprogramming Rocks")
{% endhighlight %}

The program is constructed very similarly to active record dynamic finders, at the core it overrides object's method_missing and dynamically constructs the missing methods, (Jay Fields has an excellent blog post)[http://blog.jayfields.com/2008/02/ruby-replace-methodmissing-with-dynamic.html] that explains this technique.

For e.g., in ```client.statuses.show(:id=>'1234')``` the client object (Twitter instance) does not have statuses object during initialization, when this is called, it invokes the method_missing of Twitter class, and since this method(statuses) does not have any arguments or ends with post/get, method_missing will return 'self', i.e., in our case the statuses object. The Proxy is used to buffer the methods, this is useful to construct the URL for later use.

Now, 'show' method is called on 'statuses', since this has arguments it get processed by doing a HTTP GET to Twitter API. Once we have response from the server, an instance of TwitterResponse is created, the construct method accepts a hash/array and converts them into attributes and methods by using object.instance_variable_set and object.send in the constructor.
