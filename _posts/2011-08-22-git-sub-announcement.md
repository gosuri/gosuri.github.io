---
layout: post
title: Introducing git-url-sub(1)
---

Background
----------

When we renamed our github organization the entire (rather large) team had to manually update the remote URLs which proved to be a daunting task. I created git-url-sub to make this easier.

Install using [Homebrew](http://mxcl.github.com/homebrew) on OS X:
-----------------------------------------------------------------

{% highlight bash %}
brew install git-url-sub
{% endhighlight %}

Install from [source](https://github.com/gosuri/git-url-sub):
------------------------------------------------------------

{% highlight bash %}
git clone git://github.com/gosuri/git-url-sub.git
cd git-url-sub
sudo make install
{% endhighlight %}

[Usage](http://gregosuri.com/git-url-sub):
------------------------------------------

{% highlight bash %}
git url-sub [options] pattern replacement
{% endhighlight %}

### Example

To replace first occurrences of ```foo``` in the remote url with ```bar```

{% highlight bash %}

$ git url-sub foo bar # will dry run

. origin (fetch) git@github.com:foo/project.git -> git@github.com:bar/project.git
. origin (push)  git@github.com:foo/project.git -> git@github.com:bar/project.git

NOTE: No changes have been made. Please run with -c flag to commit changes

$ git url-sub -c foo bar # commit once you are satisfied with changes

. origin (fetch) git@github.com:foo/project.git -> git@github.com:bar/project.git
. origin (push)  git@github.com:foo/project.git -> git@github.com:bar/project.git

Changes have been made to the above urls

{% endhighlight %}

Like it? You can [Tweet](http://twitter.com/intent/tweet?source=webclient&text=RT+%40kn0tch+%22Introducing+git-url-sub%281%29+url+-+Recursively+substitutes+remote+URLs+for+multiple+repositories+http%3A%2F%2Fgregosuri.com%2F2011%2F08%2F22%2Fgit-sub-announcement.html%22) about it or (and) follow me on [Twitter](http://twitter.com/kn0tch) for updates.


