---
layout: post
title: Building an AngularJS app in 5 minutes.
description: "Learn and Master the angm-generator to build AngularJS application easily."
category: AngularJS
tags: [AngularJS]
keys: [AngularJS, Yeoman Generators, Grunt.js]
comments: true
share: true
---

# Building an AngularJS app in 5 minutes.
Learn how to build an AngularJS application using the amazing [generator-angm](http://www.newaeonweb.com.br/generator-angm) as the own name angm is a [Yeoman](http://yeoman.io/) generator to build modular AngularJS apps.
We will make a step by step to build a Angular app from start to finish.

![Angm-generator]({{ site.url }}/assets/images/angm-logo.png "Angm-generator")

>  Modular Yeoman Generator to scaffold modular AngularJS applications.

### Installing the generator-angm
Very simple, if you already have the Yeoman generator, just type the following command on your terminal:

{% highlight javascript %}
    npm install -g generator-angm
{% endhighlight %}

When finished, congratulations, you already have the necessary to begin developing AngularJS applications easily.

> You can find a good documentation at [the github generator's page](https://github.com/newaeonweb/generator-angm).

### Starting the application.
We will build a simple application to consume data from a restful API.
The next steps are free, so choose a directory on your machine and type the following commands on terminal:

{% highlight javascript %}
    mkdir github-finder && cd github-finder
{% endhighlight %}


You can use another name instead of `github-finder`, also you can choose where to create your app.

Go back at you terminal and type the following command:

{% highlight javascript %}
    yo angm
{% endhighlight %}

The previous command starts the generator-angm and asks for some information, such as what is the name of your application, which components to use.
Then, the generator is responsible for installing and pre configure your entiry application.

I Named the app as `github-finder`.

> You can find more about the generator-angm at the [official website](http://www.newaeonweb.com.br/generator-angm), they have some screencasts.

With this step, we have the basic structure as the following figure:

![generator structure]({{ site.url }}/assets/images/angm-generator.png "Generator Structured AngularJS app")

As you can see, we already have all we need to start our application, folloing the best practices to develop AngularJS apps.

Note that we already have a folder called `modules` and another as `shared`.
On `modules`folder, we have the default `home` module.

To check if everything goes well at this point, open your terminal and type""

{% highlight javascript %}
    grunt dev
{% endhighlight %}

The previous command starts your default browser and show the welcome screen.

![generator welcome screen]({{ site.url }}/assets/images/generator-welcome.png "Generator welcome screen")

### Building the github service.
On the previous step we saw the application directory structure, on the `home module` folder, let's edit the `homeService.js` file and added
a `resource` to retrive some Data from Github API.

{% highlight javascript %}
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:homeService
     * @description
     * # homeService
     * Service of the app
     */
    angular.module('github-finder')
            .factory('homeService', ['$resource', function ($resource) {

                    return $resource('https://api.github.com/users/twbs/repos');

            }]);
{% endhighlight %}

As you know at this point we have the `resource`functions available:

{% highlight javascript %}
    { 'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'} };  
{% endhighlight %}

So the next step is go back to the `homeCtrl.js` and setup some variables to grab the `resource` return.

### Creating the github controller.
Now the next step is to create the **controller** to use the **service**, in this case we just edit the `homeCtrl.js` file with the
following code:

{% highlight javascript %}
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('github-finder')
	.controller('HomeCtrl', ['$scope', 'homeService', function ($scope, homeService) {
		$scope.title = "Hello, Angm-Generator!";

		// Grab all repos using query() method
		$scope.githubRepos = homeService.query();

	}]);
{% endhighlight %}

> I keep the module home to illustrate the example, you can create your own module to do this task.

### Creating the github view.
Now we just need to render the `githubRepos` on the home.html file, to do this will edit the file using the `ng-repeat` to display
all the repositories from a user, i used the **twbs** user.

{% raw %}
    <div ng-controller="HomeCtrl">
            <div class="splash" style="width:600px; margin:0 auto; ">
                    <h1>{{ title }}</h1>
                    <p>This is a template for a simple home screen website. Use it as a starting point to create something more unique.</p>
                    <code>app/modules/home/home.html</code>
                    <hr>
                    <p><a href="http://www.github.com/newaeonweb/generator-angm" class="btn btn-primary" role="button">Learn more »</a></p>

                    <div class="well">
                            <h1 class="text-center">Github Respositories</h1>
                            <ul class="list-group">
                                    <li class="list-group-item" ng-repeat="repo in githuRepos | limitTo:5">
                                            {{repo.name}}
                                            <span class="badge">{{repo.stargazers_count}}</span>
                                    </li>
                            </ul>
                    </div>
            </div>
    </div>
{% endraw %}

And the final result will be something similar to the following image:

![Service Working]({{ site.url }}/assets/images/github-list.png "Service working")

Very simple and ease. Now let's see what we can do to show individual infos on when we click on some repo.
