---
layout: post
title: Requisição Ajax com AngularJS.
description: "Como fazer requisições Ajax utilizando AngularJS."
category: articles
tags: [AngularJS]
comments: true
share: true
---

# AngularJS não utiliza jQuery!

> Para desenvolver com *AngularJS*, voce deve esquecer o jQuery.

### Esquecendo o jQuery.

Ao utilizar AngularJS pela primeira vez, é comum pensar como o jQuery faz a coisas, ou seja tudo muito simples e facíl, no AngularJS isso também é verdade. Porém existem algumas diferenças quando pensamos em manipulação do DOM.

Muitos amigos me perguntam como utilizar jQuery dentro de aplicações AngularJS, a partir dai tive a ideia de escrever este post e ilustrar uma requisição Ajax, utilizando $http do AngularJS ou invés do $.ajax().

### Requisição Ajax.

Vamos lá, primeiramente, para manipular o DOM com AngularJS, devemos utilizar Directives. E isso não quer dizer que voce vai escrever o seu jQuery dentro da Directiva, mas isso é assunto para um próximo post, por hora, vamos nos ater aos fatos.

Este é um exemplo básico de como utilizar a requisição Ajax no AngularJS.

{% highlight javascript %}
    app.controller ('AjaxCtrl', ['$scope', function ($scope) {

    // Plain Old JavaScript Object
    var band = {
        name: " ",
        country: " "
    }

    // Atribui $scope ao objeto JavaScript
    $scope.band = band;

    //Realiza a chamada, utilizando $http
    $http ({
        method: 'GET',
        url: '//url.com.br/getband'
    })
        .sucess (function (data, status, headers, config) {
            // Atribui o retorno ao $scope
            $scope.band.name = data.band.name;
        })
        .error (function (data, status, headers, config) {
            // Se tiver error
            console.log(status);
        });
    }]);
{% endhighlight %}

Simples certo?

A url, chama um serviço que retorna o seguinte JSON:

{% highlight json %}
    {
    "band": {
        "name": "Motorhead",
        "country": "England"
        }
    }
{% endhighlight %}

E a view, recebe os dados de retorno:

{% raw %}
    <div ng-controller="AjaxCtrl">
        <p>A melhor banda do mundo</p>
        <p>{{ band.name }}, - {{ band.country}}</p>
    </div>
{% endraw %}

Muito Simples e para ficar ainda melhor podemos otimizar esta chamada criando um service. mas fica para próxima.  
