---
layout: post
title: Front-end tools for webdesigners II.
description: "EditorConfig, uma dica para identação do código em varios editoress."
category: articles
tags: [Front-end]
comments: true
share: true
---
# Ferramentas para webdesigners parte II.
Mais um post da serie para webdesigners, desta vez não é uma ferramenta em si, mas a utilidade desta dica vale muito, principalmente quando trabalhamos em equipes multidisciplinares e cada desenvolvedor utiliza um editor de código.
O que é muito comun, Visual Studio, Eclipse, Netbeans, sim eu sei que estes são mais do que editores, são IDEs completas e cada uma tem a sua configuração de identação e espaço.

Pode parecer besteira, mas identação do código é levada muito a serio la fora, é impacta diretamente na sua produtividade e na facilidade de leitura do código.

Para resolver este problemas temos o [Editor Config](http://editorconfig.org/) um projeto OpenSource que ajuda a padronizar o estilo/identação do seu código e da sua equipe.

Ele serve para vários tipos de linguagens,editores e IDEs, o que é ótimo.

Segue um exemplo de como utiliza-lo:

{% highlight shell-session %}
  	# editorconfig.org
	root = true
	[*]
	indent_style = space
	indent_size = 2
	end_of_line = lf
	charset = utf-8
	trim_trailing_whitespace = true
	insert_final_newline = true
	[*.md]
	trim_trailing_whitespace = false
{% endhighlight %}

Pronto, basta nomear este arquivo como `editorconfig`, coloca-lo na pasta raiz do seu projeto e installar o plugin para sua respectiva IDE ou Editor de texto.
Desta maneira toda vez que voce abrir o editor, o plugin busca este arquivo e obedece o padrão definido nele.
