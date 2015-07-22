---
layout: post
title: Front-end tools for Webdesigners.
description: "An overview about the front-end tools for webdesigners."
category: articles
tags: [Front-end]
image:
  feature: frontendtools.jpg
  credit: All Logos are trademark.
  creditlink: http://www.newaeonweb.com.br
comments: true
share: true
---
#Front-end tools for Webdesigners.
Todo webdesigner passa por um momento de transição em sua carreira e precisa se atualizar ou evoluir, e o desenvolvimento front-end é uma destas opções, porém nem todo designer tem um conhecimento mesmo que básico em programação, então a primeira coisa que você deve fazer para facilitar esta migração é entender quais as ferramentas existentes e o que você precisa para dominar todas elas, ou pelo menos uma parte.

> Este não pretende ser um guia completo, mas apenas um direcionamento.

Não podemos negar que quantidade de ferramentas é muito grande então vamos dividir em algumas etapas e entender as diferenças entre elas.

A imagem deste post já menciona algumas das ferrementas e recursos disponíveis, exitem muito mais, porém o nosso objetivo é entender o conceito de cada uma delas.

# Pré-processador CSS.

Sass, Less e Stylus são pré processadores ou compiladores de código para gerar CSS, digo código porque o SASS tem uma sintax própria e é controlado pela identação do código, tipo _Markdown, Jade_ além de não utilizar ponto e virgula e colchetes.

#### Ex utilizando SASS

{% highlight sass %}
  #main
    color: blue
    font-size: 0.3em

    a
      font:
        weight: bold
        family: serif
      &:hover
        background-color: #eee
{% endhighlight %}

A primeira vista é desconfortável e pode parecer dificíl aprender, mas existe uma alternativa chamada SCSS, onde é possivel escrever utilizando a mesma sintax do CSS e utilizar ponto e virgula e colchetes.

#### Ex utilizando SCSS

{% highlight sass %}
  .container {
    @include clearfix();
    max-width: $page-width + ($column-gutter * 2);
    width: auto;
    padding: 0 $column-gutter;
    margin: 0 auto;

      @include respond-to(tablet) {
        margin: 0;
        padding: 0 $tablet-padding;
      }

      @include respond-to(mobile) {
        margin: 0;
        padding: 0 $mobile-padding;
      }
  }
{% endhighlight %}

#### CSS compilado:

{% highlight sass %}
  .container {
    zoom: 1;
    max-width: 980px;
    width: auto;
    padding: 0 20px;
    margin: 0 auto;
  }
  .container:before, .container:after {
    content: "";
    display: table;
  }
  .container:after {
    clear: both;
  }
  @media screen and (min-width: 768px) and (max-width: 980px) {
    .container {
      margin: 0;
      padding: 0 20px;
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      margin: 0;
      padding: 0 10px;
    }
  }
{% endhighlight %}

A grande vantagem é a utilização de variáveis, funções, mixin (trecho de código reaproveitável), funções matemáticas e funções para manipulação de cores.

Tanto o **SASS** e **Compass** quanto o **LESS** possuem compiladores com interface gráfica, que facilita muito para quem ainda não tem intimidade com o terminal(Mac/Linux) e CMD(windows).

Durante muito tempo eu utilizei o LESS com o WINLESS(interface gráfica) e com **Grunt.js**, achava mais facíl e simples de utilizar do que o SASS, o que não deixa de ser verdade, porém nos ultimos dias tenho utilizado demais o SCSS com Compass.

**Compass** é um framework CSS que fornece algumas regras já prontas para ser utilizada com o SASS/SCSS. Ele oferece varios recursos para CSS3, tipografia, Reset entre outros. Além disso possue muitas funções baseadas em SASS para manipulação de prefixos, imagens e muitas outras coisas.

#### Exemplo com Compass:

{% highlight sass %}
  .simple   { @include border-radius(4px, 4px); }
  .compound { @include border-radius(2px 5px, 3px 6px); }
  .crazy    { @include border-radius(1px 3px 5px 7px, 2px 4px 6px 8px)}
{% endhighlight %}

#### Resultado em CSS:

{% highlight css %}
  /*simple*/
  -webkit-border-radius: 4px 4px;
  -moz-border-radius: 4px / 4px;
  -khtml-border-radius: 4px / 4px;
  border-radius: 4px / 4px; }

  /*compound*/
  -webkit-border-radius: 2px 3px;
  -moz-border-radius: 2px 5px / 3px 6px;
  -khtml-border-radius: 2px 5px / 3px 6px;
  border-radius: 2px 5px / 3px 6px; }

  /*crazy*/
  -webkit-border-radius: 1px 2px;
  -moz-border-radius: 1px 3px 5px 7px / 2px 4px 6px 8px;
  -khtml-border-radius: 1px 3px 5px 7px / 2px 4px 6px 8px;
  border-radius: 1px 3px 5px 7px / 2px 4px 6px 8px; }
{% endhighlight %}

Definitivamente é uma ótima opção para se aprender. Independente do pré-processador adotado, com certeza você vai sentir os beneficios muito rápidamente.

# Frameworks

Para falar de frameworks primeiro precisamos entender e saber difereciar o que é uma biblioteca de um framework UI (CSS, HTML, JavaScript) ou um framework MVC (JavaScript). então vamos lá.

> Framework compreende um conjunto de classes implementadas em uma linguagem de programação específica, usadas para auxiliar o desenvolvimento de software. Geralmente obriga o desenvolvedor a seguir algumas regras e possue uma sintax própria.

## Framework UI

São conjuntos de componentes de interface modulares geralmente em CSS e HTML e com algumas funcionalidades comuns em JavaScript, como: tabs, sliders, modals, popovers etc...

Alguns exemplos são: Twitter Bootstrap, PureCSS, Foundation entre outros.

## Framework MVC

São conjuntos de classes, funções e objetos em JavaScript que servem para modularizar e organizar o código JS da sua aplicação, não confundir com jQuery que é uma bibliotéca para manipulação do DOM.

Alguns exemplos são: Backbone.js, Ember.js, Angular.js entre outros.

## Bibliotécas

São códigos que atendem a uma simples tarefa, como o jQuery e Zepto.js para manipulação do DOM, ResponsiveBoilerplate e ResponsiveNavs para layouts responsivos e podem ser escritos em CSS ou JavaScript.

> Um exemplo de bibliotéca que se confunde muito com framework é o jQuery, mas podemos citar também, o Knockout.js, Handlebars.js.

Esse foi um pequeno exemplo do são frameworks, o assunto é muito mais abrangente e complexo, mas esta é uma visão que coloca você no caminho certo.

No próximo post veremos, Gerenciadores de Tarefas, Gerenciadores de Componentes, Controle de Versão de códigos e CMS.
