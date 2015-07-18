---
layout: post
title: Entendendo AngularJS e troca de dados.
description: "Exemplificando requisições Ajax com AngularJS."
category: articles
tags: [AngularJS]
comments: true
share: true
---

# AngularJS, aprendendo com imagens.
Um das dificuldades quando iniciamos com AngularJS é a troca de dados entre o servidor e a nossa aplicação.
O AngularJS foi concebido para utilização em aplicações com arquitetura RESTFUL, e é todo otimizado para isso.

Claro é possível utiliza-lo em aplicações com outra arquitetura no servidor, mas eu realmente não recomendo.
Para isso utilize outra biblioteca mais simples, um **Knockout.js** vai te atender muito bem.

A proposta deste post é mostrar visualmente como o AngularJS funciona internamente, ou melhor como as requisições Ajax funcionam.

### Entendendo o que cada um faz.

É comum observar muitos desenvolvedores utilizando **Controller** e **Factory** de forma errada, sim vai funcionar, mas voce deixa de aproveitar tudo que o framework lhe oferece.
Aproveitando o exemplo do post anterior: [Ajax-request-com-AngularJS](http://newaeonweb.com.br/articles/Ajax-request-com-angularjs/).

Vamos entender como utiliza-lo com a imagem abaixo:

![AngularJS by image]({{ site.url }}/images/AngularJS-by-images.png "AngularJS")

### Controller.

O Controller, deve conter o minimo possível de logica.

Neste exemplo básico, ele apenas recebe os dados de retorno de um Service e da um _bind_ no model, note que neste exemplo utilizo uma maneira diferente de atribuir valores ao objeto `band`, do que mostrado no post anterior.

{% highlight javascript %}
    app.controller ('BandController', ['$scope', 'BandFactory', function ($scope, BandFactory) {

    // Cria o objeto band
    $scope.band = {}

    BandFactory.query(function(data) {
        $scope.band = data;
    });

{% endhighlight %}

### A Factory
Aqui é a **Factory** que interage com a API para retornar os dados para o Controller.

{% highlight javascript %}
    app.factory ('BandFactory', ['$resource', function ($resource) {

        return $resource("https://url/band.json");

    });

{% endhighlight %}

### Retorno da API em JSON

A url, chama um serviço que retorna o seguinte JSON:

{% highlight json %}
    {
    "band": {
        "name": "Motorhead",
        "country": "England"
        }
    }
{% endhighlight %}

### A view (Template html)
E a view, recebe os dados de retorno:

{% raw %}
    <div ng-controller="BandController">
        <p>A melhor banda do mundo</p>
        <p>{{ band.name }}</p>
        <p ng-model="band.contry"></p>
    </div>
{% endraw %}

### Resumindo
Desta maneira fica muito simples entender o que acontece.
A Factory ou Service, serve para fazer a requisição HTTP ou Resource e retornar os dados, neste caso utilizei o `$resource`.

Lembrando que `$resource` é uma API de alto nivel, enquanto `$http` de baixo nivel.
Traduzindo, $resource tem alguns metodos já prontos para interação com API's Restful. 
