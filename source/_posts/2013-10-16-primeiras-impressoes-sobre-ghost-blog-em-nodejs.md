---
layout: post
title: Impressões sobre o Ghost primeiro blog em Node.js.
description: "Primeiras inpressões sobre o Ghost, blog em Node.js."
category: Node
tags: [Node]
comments: true  
---

# Ghost um sistema de blog em Node.js.
Eu acabei de instalar a nova plataforma de blog chamada Ghost, lançada oficialmente na segunda feira, que roda no **Node.js**.
Posso dizer que é muito facíl de instalar e começar a utilizar localmente, eu gastei 5 min entre baixar, descompactar, instalar e escrever o primeiro post, foi realmente rápido.

Segue um breve passo-a-passo de como fazer, eu particularmente utilizei o Ubuntu, mas no website do Ghost tem links sobre a instalação em todas a plataformas.

[Mais informações podem ser obtidas aqui](http://docs.ghost.org/installation/).

A principio eles ainda não tem um host onde você possa hospedar o seu blog, pelo menos não agora, já que isso é mencionado no site e muito em breve teremos um host especializado mantido pela propria empresa que criou este sistema. Mas mesmo assim em um próximo post darei instruções detalhadas de como instalar em uma VPS.

Mas vamos ao que interessa, apos baixar e descompactar a versão para sua plataforma, lembrando no meu caso o Ubuntu, vá até o diretório e execute o comando no seu terminal:

{% highlight javascript %}
	npm install
{% endhighlight %}

![Instalando as dependências do Ghost]({{ site.url }}/assets/images/ghost-installation.png "Instalando o Ghost")

>Uma dica, no Ubuntu execute como adminstrador, caso contrário algumas dependências não serão instaladas.

Feito isso, digite:

{% highlight javascript %}
	npm start
{% endhighlight %}

E esta pronto, pode abrir o seu browser preferido e digitar a url: _http//localhost:2368_.

Muito simples.

Para acessar a area adminstrativa digite: _http//localhost:2368/ghost_

Insira seu login a senha e comece a blogar.

![Primeiro post em menos de 5 min]({{ site.url }}/assets/images/ghost-welcom-screen.png)

É claro que o foco do Ghost é ser apenas uma plataforma de Blog, então não espere todos os recursos de um CMS completo.
Para quem curte escrever será uma ótima ferramenta.
