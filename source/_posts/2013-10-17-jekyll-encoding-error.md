---
layout: post
title: Jekyll Encoding Error.
description: "Um error muito comun aos usuários do Jekyll, incompatible character encodings: UTF-8 and CP850."
modified: 2013-10-25
category: Jekyll
tags: [Jekyll]
comments: true  
---
#Jekyll bug com character encodings.
Um erro muito comum para quem esta utilizando o **Jekyll**, após executar o comando `` `jekyll serve` `` ou `` `jekyll bulid` ``, é se deparar com o seguinte erro no terminal:

_Liquid Exception: incompatible character encodings: UTF-8 and CP850 in nomesoseuarquivo.html._

Isso quer dizer que o seu terminal não esta reconhecendo algum caracter e gerando este erro.
É muito simpes de resolver, apenas digite o comando abaixo no seu terminal:

`` `chcp 65001` ``

Pronto, agora pode seguir em frente.

> Uma dica muito últil é utilizar o comando: `` `jekyll --watch serve` ``, desta maneira ele fica mapenando as alterações em qualquer arquivo e atualiza o server.
