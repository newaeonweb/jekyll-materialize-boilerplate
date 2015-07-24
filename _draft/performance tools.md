---
layout: post
title: Fluxo de User Experience.
description: "Entenda como iniciar um ótimo trabalho de UX."
category: articles
tags: [UX]
comments: true  
---

# Performance tools e Responsive Design

> Indispensable tools: _Node.js_, _Npm_, _Grunt.js_.

### HTML

* "grunt-contrib-htmlmin": "~0.1.3"

### CSS 
  * Min e remover css não utilizado.
  * Grid System
  * Adapt
---
  * "grunt-contrib-cssmin": "~0.9.0"
  * "uncss": "~0.8.0"
  * "grunt-uncss": "~0.3.2"
  * "grunt-processhtml": "~0.3.0"
  * "grunt-compare-size": "~0.4.0"
  *  grunt-contrib-less
  * 'grunt-contrib-sass
  * "grunt-recess": "~0.4.0",
  * csslint



#### IMAGES
  * Otimizar imagens em lotes
  * Pollyfill para imagens
---
  * "grunt-contrib-imagemin"
  * "grunt-svgmin"
  * "grunt-spritesmith"
  * "grunt-webp" -> convert images to new Webp format
  * "grunticon"

#### JAVASCRIPT 
  * Min e lint
---
  * "grunt-contrib-uglify": "~0.2.4"
  * "grunt-contrib-jshint": "~0.9.2"


### General Tasks

* "load-grunt-tasks": "~0.4.0" needs a require declaration = require('load-grunt-tasks')(grunt);
* "grunt-contrib-clean": "~0.5.0" obrigatorio
* "grunt-contrib-concat": "~0.3.0"
* "grunt-contrib-connect": "~0.7.1"
* "grunt-combine-media-queries"
* "grunt-contrib-watch": "~0.6.1"
* "grunt-pagespeed - fantastic for automating checking your PageSpeed score as a part of CI."
* grunt-contrib-compress
* grunt-newer
* "time-grunt": "~0.3.1" needs a require declaration = require('time-grunt')(grunt);


> grunt-responsive-images - use this along with Imager.js, <picture> or the picturefill polyfill.grunt-clowncar, In addition, if you need to just resize/normalize images that are large in dimension, you can use grunt-image-resize.

