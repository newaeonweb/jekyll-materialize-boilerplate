---
layout: post
title: Mongodb para Front-end Developers.
description: "Porque Mongodb pode ser útil para o profissional Front-end."
category: Mongodb
tags: [Mongodb]
comments: true
share: true
---
# Porque Mongodb pode ser útil para o profissional Front-end?
Este é o primeiro post do ano e também o primeiro que não esta ligado ao desenvolvimento front-end aparentemente, digo isso por que apesar de banco de dados estar longe da realidade do front-end, o Mongodb esta muito próximo, e sabe porque?

A resposta é JavaScript!

O Mongodb é um banco de dados baseado em documento, para nós JSON, e o que usamos para interagir com ele é JavaScript além disso é um projeto Open Source, altamente escalável, muito rápido e moderno.

Fora tudo isso, desde o seu surgimento em 2007, já se tornou muito popular.

Sem entrar em mais detalhes técnicos vamos direto ao que interessa, código. Mais informações você encontra em [Mongodb](http://www.mongodb.org/).

Se ainda não tem o Mongodb na sua maquina, faça o download em [aqui](http://www.mongodb.org/downloads), escolha a versão correta para seu sistema [aqui](http://www.mongodb.org/downloads).

> Nota: é recomendado utiliza-lo em maquinas de 64bits por uma questão de performance e memória.

### Instalação

Depois de baixar, coloque a pasta descompactada na raiz do seu sitema e crie uma pasta com o nome de data, dentro dela crie outra pasta com o nome db.

Neste exemplo vou utilizar uma maquina com windows 7, mas os passos são quase os mesmos.

Vamos checar se esta tudo certo, abra o terminal e navegue até a pasta raiz onde esta a pasta `mongodb`, no meu caso é o C:.

{% highlight shell-session %}
	C:\>cd mongodb
	C:\>mongodb>cd bin
	C:\>mongodb>cd bin>mongod.exe
{% endhighlight %}

Os comandos acima vão iniciar o Mongodb, conforme a figura abaixo:

![cmd mongodb]({{ site.url }}/images/mongodb1.png "cmd mongodb")

Repita os passos acima e desta vez utilize o comando `mongo.exe`:

{% highlight shell-session %}
	C:\>cd mongodb
	C:\>mongodb>cd bin
	C:\>mongodb>cd bin>mongo.exe
{% endhighlight %}

Os comandos acima iniciam o shell do Mongodb, conforme a figura abaixo:

![cmd mongodb]({{ site.url }}/images/mongodb2.png "cmd mongodb")

Agora sim já podemos iniciar nossa brincadeira, como não especificamos nenhum base de dados ainda, note que o shell inicia o Mongodb em uma base chamada `test`, você pode usa-la para estes exercicios básicos, entretanto vamos criar uma nova base para pegarmos alguma intimidade com o Mongodb.

No cmd digite:

{% highlight shell-session %}
	C:\>use novodb
{% endhighlight %}

Desta maneira criamos nossa nova base chamada `novodb` como podemos ver na imagem abaixo:

![cmd mongodb]({{ site.url }}/images/mongodb3.png "cmd mongodb")

> Note que não foi usado nenhum comando além do `use` para criarmos nossa base, tão pouco precisamos executar algum comando para fazer a troca do `test` para `novodb`.

### HELP

Um comando muito útil é o `help`, faça um teste e digite em seu terminal:

{% highlight shell-session %}
	C:\>db.novodb.help()
{% endhighlight %}

Este comando é uma ótima maneira de aprendermos um pouco mais sobre Mongodb, ai estão todos os comandos que podemos utilizar em nossas consultas e ações no banco.

![cmd mongodb]({{ site.url }}/images/mongodb4.png "cmd mongodb")

> O comando help() pode ser utilizado tanto em base de dados como em coleções.

### CRUD

Como base de dados e coleções são criadas no momento em que executamos um comando, digite ai no seu terminal:

{% highlight shell-session %}
	C:\>db.bandas.insert({banda: "Metallica"})
	C:\>db.bandas.insert({banda: "Slayer"})
{% endhighlight %}

Com isso criamos a coleção `bandas` e também inserimos dois registros em nossa coleção.

> Note que executamos duas vezes o comando, mas poderiamos ter feito em apenas um único JSON.

O comando abaixo serve para recuperarmos o que foi inserido, uma tipo de SELECT * FROM em bancos relacionais, mas muito mais simple:

{% highlight shell-session %}
	C:\>db.bandas.find()
{% endhighlight %}

Na imagem abaixo, podemos visualizar o resultado do comando, para toda inserção no banco o Mongodb cria um Object_ID para ele, em seguida execute o camando:

{% highlight shell-session %}
	C:\>show collections
{% endhighlight %}

Agora podemos ver a coleção chamada bandas também criada.

![cmd mongodb]({{ site.url }}/images/mongodb5.png "cmd mongodb")

Logo abaixo da coleção temos o system.indexes, que veremos em uma outra oportunidade.

Para retornar um dado especifico, podemos utilizar o comando:

{% highlight shell-session %}
	C:\>db.bandas.find({banda: "Metallica"})
{% endhighlight %}

Para atualizar:

{% highlight shell-session %}
	C:\>db.bandas.update({banda: "Metallica"}, {$set: {estilo: "Thrash Metal"}})
{% endhighlight %}

Aqui atualizamos a banda e incluimos mais um campo, o estilo.
Caso seja necessario remove-lo podemos utilizar o seguinte comando:

{% highlight shell-session %}
	C:\>db.bandas.update({banda: "Metallica"}, {$unset: {estilo: 1}})
{% endhighlight %}

E finalmente o DELETE com:

{% highlight shell-session %}
	C:\>db.bandas.remove({banda: "Metallica"})
{% endhighlight %}

> Note que o comando remove(), não remove a coleção bandas, apenas o registro Metallica.

Se a intenção for deletar a coleção inteira, utilize:

{% highlight shell-session %}
	C:\>db.bandas.drop()
{% endhighlight %}

Lembre-se sempre de utilizar o comando Help(), para base de dados e coleções, ele sempre é útil.
Com isso, finalizamos o básico, mas você já tem um rumo a seguir, pesquise por coisas como indexes, explain(), BSON, drivers e por ai vai.
