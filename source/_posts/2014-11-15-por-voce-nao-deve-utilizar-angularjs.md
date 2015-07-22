---
layout: post
title: Porque você não deve utilizar AngularJS?
description: "Entendendo como o AngularJS pode não ser a melhor solução para seu projeto."
category: AngularJS
tags: [AngularJS]
comments: true
share: true
---

#Onde você não deve utilizar Angular.JS.
Apesar de robusto e bem popular este excelente framework não é a solução para todos os seus problemas.
Isso infelizmente é um fato muito verdadeiro.

A opinião é bastante dividida quando o assunto é Angular, e quem não gosta realmente consegue apresentar inúmeros
pontos fracos para sua utilização. E quem gosta, realmente ama e denfende com unhas e dentes, geralmente como tudo da Google.

Escrevi este artigo, porque após 8 meses trabalhando em um projeto com Angular, pude verificar que, apesar do projeto
ter finalizado com sucesso, perdemos um tempo relevante em seu desenvolvimento e após concluído, o mesmo foi engavetado.
Poderíamos ter concluído o projeto em metade do tempo utilizando jQuery e alguma Lib. com **Observable** (Na época, ainda não tinha [Object.observe()](http://www.html5rocks.com/en/tutorials/es7/observe/))
e com certeza poderíamos ter realizado o **pivô** do negocio, antes do fracasso. _Não entenda que o projeto fracassou devido
a utilização do framework, e sim porque fizemos a escolha errada para este projeto_

É fundamental saber onde você não deve utilizar o Angular e buscar alternativas semelhantes.
Não ele não é indicado para pequenos web sites, mas utiliza-lo em aplicações de grande porte pode ser muito complexo, vamos entender porque:

* O Angular compila todos os elementos do HTML antes de mostra-los no browser, exatamente tudo na aplicação é compilado, data-binding, directivas, etc...
isso pode impactar no tempo de carregamento e no browser utilizado.

* A curva de aprendizado inicial é muito breve, mas a medida que a aplicação cresce, e você tem que sair da caixinha, esta curva se torna absurdamente grande e para alguns problemas simples a solução encontrada pode não ser tão simples assim.

* Ele é Flexível, e quando este elemento não esta acompanhando de uma padrão de organização previamente estabelecido, a flexibilidade se torna bagunça, e mais dor de cabeça.

* Se a equipe esta acostumada a manipular o DOM com jQuery, vai ter que apreender a pensar diferente com Angular.js. Existe um versão light do jQuery dentro do Angular com alguns métodos, mas para utiliza-lo você vai ter que gastar um tempo aprendendo, senão corre o risco de estar utilizando jQuery para fazer muitas coisas que o framework tem seus próprios recursos para fazer.

* Aplicações que deve oferecer suporte a browsers desatualizados (IE 7,8), não devem utilizar Angular. E acredite ainda existem muitos usuários de IE por aqui.

* Atualmente existem poucos desenvolvedores (Front-end) realmente experientes em Angular no mercado. Isso é uma realidade. (Entenda desenvolvedores com experiência na solução de problemas, não apenas para escrever TO-DO app.).

* Erros de principiantes, como:
	- Escrever a lógica da aplicação na View.
	- Manter um único arquivo para todos os Controllers.
	- Deixar o client acessar diretamente os dados, sem passar por um Model.
	- Deixar a View alterar os dados do Model antes de exibi-los (Não confundir com filtros).

E coisas deste tipo, ao longo do tempo, trazem conseguências indesejadas.

## O futuro

A **versão 2.0** será uma fusão entre a evolução do Angular com outro framework, o **Durandal.js** que é um mix de jQuery, Knockout.js e Require.js.

A evolução para esta nova versão esta a passos largos, [veja este report de Março](http://angularjs.blogspot.com.br/2014/03/angular-20.html), a própria [versão 1.3](http://angularjs.blogspot.com.br/2014/10/angularjs-130-superluminal-nudge.html) já
mostra alguns sinais do que vem por ai, esta versão já não oferece suporte ao IE8.
Mais detalhes podem ser encontrados nos [rascunhos](https://drive.google.com/folderview?id=0B7Ovm8bUYiUDR29iSkEyMk5pVUk&usp=drive_web) da documentação.

Então, o Angular irá passar por grandes mudanças em seu core, nenhuma aplicação atual será compatível com a nova versão.
[Rob Eisenberg](http://angularjs.blogspot.com.br/2014/04/angular-and-durandal-converge.html) um dos desenvolvedores do Durandal.js foi integrado ao core do Angular com a missão de inserir todas as peculiaridade do Durandal.js na nova versão do Angular.
E o Durandal.js permanecerá na versão 2.0.

> Angular 2.0
As we’re starting into the implementation of Angular 2.0, we thought we should put pen to paper and give you some insight into how we’re thinking about the design and why we’re making the changes we are.  We’re sharing it with you now so you can help make the right choices.
**Angular 2.0 is a framework for mobile apps**.  It is for desktop as well, but mobile is the hard bit that we will get right first.  The Angular you know and, hopefully, love will still be there with data-binding, extensible HTML, and a focus on testability.  
All the design docs for Angular 2 are publicly available on [Google Drive](https://docs.google.com/document/d/14KbPe6ZNuTnpTtE0X9ZXrON9fWgT5igDVHwaSLOYH-o/edit#heading=h.zgv3z37iun59).  This document contains a summary of our approach and design principles with links to specific designs in context.


Muita coisa vai mudar, acredito que para melhor, mas coisas como Controllers, $scope, não existiram mais da maneira que conhecemos.
Recentemente tem ocorrido um murmúrio muito grande em relação a todas estas mudanças e isso tem desapontado muita gente envolvida diretamente
com o core de desenvolvimento do Angular.

## Considerações finais

Entretanto, algumas coisas realmente funcionam muito bem, melhor ainda se o back-end for muito bem construído em uma arquitetura
**Restful** bem estruturada, **$resource** e **$httpProvider** para lidar com autenticação utilizando interceptors são ótimos. Escrever objetos JavaScript puros
dentros dos Controllers também é muito bom.

Se você tem tempo e o custo beneficio da utilização for compensadora, recomendo a utilização, e recomendo mais ainda
ter um especialista na sua equipe. Ter em mente que _**menos é mais**_ também ajuda na escolha das ferramentas para seu próximo projeto.

Este texto tem o intuito de facilitar a tomada de decisão, afinal é muito facíl encontrar inumeros motivos para
utilizar os frameworks mais populares, a comunidade é vibrante e sem duvida o Angular é o mais popular, além disso atualmente muitas empresas estão buscando profissionais
com conhecimento em **Angular**, **Backbone**, **Ember**.

Mas atenção, já observei alguns projetos muito simples(Site institucional / Hotsite)
terem em sua especificação a utilização do Angular, apenas porque dizem que ele é robusto e rápido, isso tem inspirado pessoas(Líderes e Gestores) com pouco conhecimento a exigirem este tipo de coisa em
pequenos projetos pontuais.

Frameworks facilitam a sua vida, e sem duvida o Angular é ótimo, mas utiliza-lo em todos projetos possiveis e imaginaveis
não é uma atitude muito racional.
