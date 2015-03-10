---
layout: post
title: "Introducing vagrant-env plugin"
---

At [Overclock](http://overclock.io), we use [Vagrant](https://www.vagrantup.com) to develop and test our chef cookbooks and it has become an integral part of our workflow. 

We also prefer checking in our knife config files in the SCM to reduce friction in setting up chef on our team members' and clients' workstations.

As a general rule, anything that is likely to change between development workstations–such as credentials for external services–we extract from the code into environment variables.

We wrote [Vagrant ENV plugin](https://github.com/gosuri/vagrant-env) to help us do that with ease. It lets you place environment variables in a `.env`, which are then made available to the `Vagrantfile` via ENV.

A sample `Vagrantfile` using the plugin could look like this, which is safe to share:

{% highlight ruby %}
Vagrant.configure("2") do |config|
  config.env.enable
  config.vm.box = "dummy"
  config.vm.provider :aws do |aws, override|
    aws.access_key_id     = ENV['AWS_ACCESS_KEY']
    aws.secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
  end
end
{% endhighlight %}

We built this plugin using [dotenv](https://github.com/bkeepers/dotenv), which can be accessed from any ruby file. A `knife.rb` config could look like:

{% highlight ruby %}
current_dir = File.expand_path File.dirname(__FILE__)
$stderr.sync

begin
  require 'dotenv'
  Dotenv.load
rescue LoadError
  $stderr.puts <<-ERR
Could not load .env file because dotevn gem is missing.
Install it using `gem install dotenv` or `vagrant plugin install vagrant-env`
ERR
end

node_name         ENV['USER']
client_key       "#{current_dir}/client.pem"
validation_key   "#{current_dir}/chef-validator.pem"
chef_server_url  "https://chef.local"

cookbook_path     "#{current_dir}/../../cookbooks"
cookbook_email    `git config user.email`

knife[:aws_access_key_id]       = ENV['AWS_ACCESS_KEY_ID']
knife[:aws_secret_access_key]   = ENV['AWS_SECRET_ACCESS_KEY']
knife[:ssh_user]                = ENV['SSH_USER'] || "ubuntu"
{% endhighlight %}

This approach also allows us to change configs arbitarily when running individual commands. Please see [Github page](https://github.com/gosuri/vagrant-env) for usage and other instructions.

Hope you will find the plugin useful. Looking forward to your comments and feedback on [Hacker News](https://news.ycombinator.com/item?id=8248331).
