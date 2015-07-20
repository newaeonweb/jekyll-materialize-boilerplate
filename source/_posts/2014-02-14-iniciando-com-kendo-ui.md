---
layout: post
title: Conhecendo Kendoui.
description: "Introdução ao framework kendoui."
category: articles
tags: [Front-end]
comments: true
share: true
---

# Introdução ao [Kendo UI](http://www.kendoui.com). para aplicações MVC.
* O que é: MVVM - Framework?
É um poderoso framework HTML5/CSS3 e JavaScript para desenvolvimento front-end baseado no jQuery, muito próximo do velho conhecido jQuery UI, porém com um mecanismo JavaScript orientado ao modelo de desenvolvimento conhecido como MVVM, conta ainda com uma versão grátis e uma versão paga.

# As 3 Partes do Kendo UI

* kendoUI Web
* KnedoUI DataViz
* KendoUI Mobile

## Kendo UI Web

Um framework robusto baseado em jQuery.

* Data Source
* Widgets
* Templates
* Globaliztion
* Drag and Drop
* Theme Builder
* Mobile Ready

## Kendo UI DataViz

* Baseado em HTML5
* SVG e VML para suporte a browsers antigos.
* Alta performance
* Gráficos
	* Pizza
	* Linha
	* Barra/ Coluna
	* Scatter Point

## Kendo UI Mobile

Componentes que se adaptam ao tipo de dispositivo do usuário, simulando aparencia nativa de cada aparelho.

# Controles disponíveis

* Auto Completar
* Botôes
* Calendário
* ComboBox
* DropDownList
* Grid
* Menu
* TextBox Numerico
* PanelBar
* Slider
* Splitter
* TabStrip
* TimePicker
* TreeView
* Upload
* Window

# Iniciando um Projeto
{% highlight html %}
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8" />
			<title>Kendo UI Web</title>
			<!--Estilo Base-->
			<link href="styles/kendo.common.css" rel="stylesheet"/>
			<!--Tema em Uso-->
			<link href="styles/kendo.silver.css" rel="stylesheet"/>
		</head>
		<body>
			...
			<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
			<script src="scripts/kendo.all.min.js"></script>
			<!--Lib completa, mas podemos utilizar os componentes individuais-->
		</body>
	</html>
{% endhighlight %}
### Exemplo de iniciação dos componentes (widgets)
{% highlight html %}
    {%raw%}
	<input id="auto-completar" />
	<script type="text/javascript">
	$(function(){
		var data = ["Animal","Antilope","Bird","Bath","Bellow"];
		$("#auto-completar").kendoAutoComplete(data);
	});
	</script>
	{%endraw%}
{% endhighlight %}
### Utilizando apenas o Estilo
{% highlight html %}
	<button class="k-button">Isso é um Botão</button>
{% endhighlight %}
### Data Source

* transport - Define a url para endpoint ou Restful (read, insert, update, delete).
* schema - Indica ao Data Source onde encontrar o conjunto do resultado (result set).
* parameterMap - Define como formatar os parametros da url do request (Opcional).

Model-View- ViewModel

Definindo um modelo para utiliza-lo com o Data Source
{% highlight javascript %}
	//Dados Locais
	var localData = [{id:1,name:"Fernando",twitter:"@newaeonweb"},{id:2,name:"Kendo",twitter:"@kendoUI"}];

	//Define o Modelo (Todas as outras propriedades são herdadas automaticamente)
	var Pessoa = kendo.data.Model.define({id:"id"});

	//Configura o Data Source para usar o Modelo
	var dados = new kendo.data.DataSource({
    data: localData,
    schema:{
        model: Pessoa
    }
	});

	//Para manipular as propriedades pode se utilizar a maneira abaixo...
	dados.get(id);
{% endhighlight %}
### Validator

Validação Nativa
{% highlight html %}
	<form id="kValForm" style="font-size:16px;">
    Email: <input type="email" required class="k-widget" /><br />
    Name: <input type="text" required class="k-input" /><br />
    Age: <input type="number" class="k-input" /><br />
    <input type="submit" value="Sumbit" class="k-button" />
	</form>
	<script type="text/javascript">
    $(function() {
         $("#kValForm").kendoValidator();
    });
	</script>
{% endhighlight %}
Validação Customizável
{% highlight html %}
	<form id="kValCustom">
    Email: <input type="email" id="email" name="email" required /><br />
    Verify Email: <input type="email" id="vEmail" name="vemail" /><br />
    <input type="submit" value="Submit" class="k-button" />
	</form>
	<script type="text/javascript">
    $(function() {
         $("#kValCustom").kendoValidator({
             rules:{
                 emailMatch: function(input) {
                     if(!input.is("[name=vemail]")) return true;
                     return (input.val() == $("[name=email]").val());
                 }
             },
             messages:{
                 emailMatch:"Email deve ser igual"
             }
         });
    });
	</script>
{% endhighlight %}
### Kendo Templates

Outro recurso muito bom é a criação de templates, que segue a mesma linha do _handlebars_ e outros.

Em linha
{% highlight javascript %}
	var template = kendo.template("Olá, #= firstName # #= lastName #");
{% endhighlight %}
EM HTML
{% highlight javascript %}
	<script id="myTemplate" type="text/x-kendo-template">
    Olá, #= firstName # #= lastName #
	</script>
	//E, o mesmo comando dos templates em linhas...
	var template = kendo.template($("#myTemplate").html());
{% endhighlight %}
#### Syntax
{% raw %}
* \#= Nome-da-Propriedade \#
renderiza o template, sem tags HTML
* \#: Nome-da-Propriedade \#
renderiza o template, com tags HTML
* \# if(...) {\# HTML CONTENT \#}\#
executa JavaScript como parte do template
* \\#
escape para o caracter # já que o mesmo é parte do template
{% endraw%}
# Kendo UI Mobile

Ex. de configuração
{% highlight html %}
	<div data-role="view" id="index" data-url="/" data-animation="slide">
   <header data-role="header">
      <div data-role="navbar" class="km-navbar">
        <span data-role="view-title">My App</span>
      </div>
   </header>
   <div data-role="content">
   ...
   </div>
   <footer data-role="footer" data-id="default">
      <div data-role="tabstrip" data-selected-index="0">
        ...
      </div>
   </footer>
	</div>
{% endhighlight %}
# Próximos passos

Em breve...
