$(document).ready(function() {
	var mediaquery = window.matchMedia("(max-width: 768px)");

	var showChar = 545;
	var content = $('#morecss').html();
	
	if(mediaquery.matches && (content.length > showChar)) {
		var c = content.substr(0, showChar);
		var html = '<input id="morecss-element-toggle" type="checkbox" /><div id="morecss-abstract">' + c + '...' + '</div>' + '<div id="morecss-toggled-element">' + content + '</div>' + '<label for="morecss-element-toggle" id="morecss-trigger-toggle"><span class="morelink">Seguir leyendo ></span><span class="lesslink">Mostrar menos</span></label>';
		$('#morecss').html(html);
	}


});
			
	