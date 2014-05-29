/*
author: utopick
Date: Mai 2014
*/

$(document).ready(function () {

	$('#reprendre').hide();

	/*$( "#stuff" ).bind({
	  click: function() {
	    // Do something on click
	    projekktor('#player_a').setPause();
	    $('#reprendre').show();
	  },
	  mouseenter: function() {
	    // Do something on mouseenter
	    projekktor('#player_a').setPause();
	  },
	  mouseleave: function() {
	  	projekktor('#player_a').setPlay();
	  }
	});*/

	$('#stuff').click(function() {
		projekktor('#player_a').setPause();
		$('#reprendre').show().html('<span>Reprendre</span>');
	});
	
	$('#reprendre').click(function() {
		projekktor('#player_a').setPlay();
		$('#reprendre').hide();
	});
	
	//Action sur la nav a.icon-info
	$('span a.icon-info').click(function() {
		projekktor('#player_a').setPause();
		$('#reprendre').show().html('<span>Reprendre</span>');
	});
	
	$('#reprendre').click(function() {
		projekktor('#player_a').setPlay();
		$('#reprendre').hide();
	});
	
	//Action sur la nav a.icon-at
	$('span a.icon-at').click(function() {
		projekktor('#player_a').setPause();
		$('#reprendre').show().html('<span>Reprendre</span>');
	});
	
	$('#reprendre').click(function() {
		projekktor('#player_a').setPlay();
		$('#reprendre').hide();
	});
	
	
}); //Fin document.ready