//fade em imagens e elementos

$(document).ready(function () {
        $('.delay').hide().delay(400).fadeIn(1000);
});
	

// Responsive navigation
$(document).ready(function () {
  selectnav('nav', {
		  label: '--- Table of content --- ',//first select field
		  nested: true,
		  indent: '-'
	 });
});

