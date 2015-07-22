---
layout: post
title: Utilizando o conceito BEM com LESSCSS.
description: "Exemplos práticos da utilização do conceito BEM, block element, modifier com LESSCESS."
modified: 2013-10-14
category: Front-end
tags: [Front-end]
image:
  feature: bem.jpg
  credit: Fernando Monteiro
  creditlink: http://www.newaeonweb.com
comments: true  
share: true
---

# Conceito BEM (Block, Element, Modifier) = Bloco, elemento, modificador.
É uma metodologia de desenvolvimento, criado inicialmente pela empresa Yandex, companhia líder de internet na Russia (Domina 60% do mercado), lançado oficialmente em 2009 e disponibilizado como OpenSopurce em 2010. Porém os seu ínicio foi em 2005.

Melhorando esta definição e aplicando ao nosso nixo de desenvolvimento, podemos dizer que é uma nova maneira diferente de escrever código **CSS** modular para componentes de interface fazendo uma analogia ao desenvolvimento de software **Orientado a Objeto**, mas que pode ser aplicado a qualquer linguagem de desenvolvimento.

Este modelo dita que todos os componentes devem se comportar de maneira individual e harmônica com o restante da interface, onde a adição ou exclusão de um elemento não tenha impacto no bloco ao qual ele pertence e sempre priorizando a agilidade no desenvolvimento e facilitando a manutenção ao longo do tempo. _Isso pode parecer besteira, mas um sistema com mais de 15.000 linhas de código CSS deixa a sua manutenção um tanto quanto lenta, se não for pensado conrretamente_.

[Mais informações podem ser obtidas aqui](http://bem.info/method/history/).

> O objetivo aqui é passar o conceito do desenvolvimento aplicado ao CSS, devido a isso o texto acima não é uma tradução do original, mas sim uma interpretação.

### E na prática, como é?

* bloco
* elemento
* modificador

Agora que já vimos uma pequena introdução, podemos ver alguns exemplos básicos, eu particularmente utilizo um forma de escrever que mais se adapta a minha necessidade, e o mais legal é que você pode escolher a que se adapta a sua.

> Classe **CSS**

{% highlight css %}
	.b-menu {}
	.menu-item {}
	.menu-item_small {}
{% endhighlight %}

> Aplicação no **HTML**

{% highlight html %}
	<ul class="b-menu">
  		<li class="menu-item">…</li>
  		<li class="menu-item">…</li>
  		<li class="menu-item_small">…</li>
	</ul>
{% endhighlight %}

A modularização fica muito clara onde nossa classe .b-menu guarda a estrutura do bloco, a classe .menu-item ilustra os itens que compoem o bloco **menu** e o modificador _small aplica um tamanho de fonte menor aos elementos do menu.
Desta maneira podemos utilizar estes blocos em qualquer lugar da página, aplicando diferentes modificadores.

Imagine uma página com dois menus um no topo e outro no rodapé, poderiamos acrescentar apenas um modificador de estrutura para o menu do rodapé:

{% highlight css %}
	.b-menu_bottom {}
{% endhighlight %}

### Utilizando LESSCSS

O compilador LESS por si só já traz uma serie de vantagens, agora utilizando este conceito fica ainda mais facíl, veja um exemplo aplicado utilizando LESS.

{% highlight css %}
	.nav-header {
		padding: @nav-header;
		text-transform: @text-transform;
		font-weight: @font-weight;
		font-size: @font-size;

		_big {
			font-weight: @font-weight + 0.5;
		}
	}
{% endhighlight %}

### Humm, mas fica bem feio né?

Este é um argumento muito utilizado pelas pessoas que ainda não tiveram um contato real com esse modo de escrever CSS, eu mesmo no começo achei muito ruim colocar 2 ou 3 classes para estilizar um único elemento.
Mas quando você começa a lidar com sistemas extremamente complexos, isso ajuda muito na manutenção e padronização para o restante da equipe.

Pense em um sistema que utilize elementos modulares individuais em arquivos LESS, ex:

- tables
- forms
- tabs
- accordion
- fonts
- buttons

Agora pense em duas equipes escrevendo e compartilhando arquivos em mais de uma aplicação.

>Agore pense em equipes multi-diciplinares onde não existe um desenvolvedor front-end em tempo intregral.
Conseguiu imaginar como ficaria este CSS?
