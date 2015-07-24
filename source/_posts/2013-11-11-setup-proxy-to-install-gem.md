---
layout: post
title: Setup proxy to install Gem.
description: "How to setup GEM behind a corporate proxy with authorization."
category: Jekyll
tags: [Jekyll]
---

# How to setup GEM behind a corporate proxy with authorization.
I face this problem today to install a GEM for github-pages working with Jekyll.

- Fist off, create a **.gemrc** file on your root user directory.
- Place de code above in this file.

{% highlight Bash Session %}
	http_proxy: http://<YOUR_USER>:<YOUR_PASSWORD>@<YOUR_PROXY_HOST>:<YOUR_PROXY_PORT>
{% endhighlight %}

That's all.
