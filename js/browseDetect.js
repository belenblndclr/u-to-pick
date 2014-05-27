$(document).ready(function () {

	//Browser Detect
		var userAgent = navigator.userAgent.toLowerCase();
		jQuery.browser = {
			version: (userAgent.match( /.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/ ) || [])[1],
			chrome: /chrome/.test( userAgent ),
			safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
			opera: /opera/.test( userAgent ),
			msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
			mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
		};
		//$.each($.browser, function(i, val) {
		//	$("<div>" + i + " : <span>" + val + "</span></div>")
		//	.appendTo(document.body);
		//});
	
		if( $.browser.mozilla) {
			$("").html( " <> message" + (navigator.appName) + ( $.browser.version )  + " <br /> message" );
			setTimeout(function () {
				$("").fadeOut(500); }, 8000);
		}
	
		if( $.browser.msie) {
			$("").html( " <> message" + (navigator.appName) + ( $.browser.version ) + " <br /> message" );
			setTimeout(function () {
				$("#alerte").fadeOut(300); }, 8000);
		}
		
		if( $.browser.opera) {
			$("").html( " <> message " + (navigator.appName) + ( $.browser.version ) + " <br/> message" );
			setTimeout(function () {
				$("").fadeOut(500); }, 8000);
		}
	
		if( $.browser.chrome) {
			$("").hide();
		}
	
		if( $.browser.safari) {
			$("").hide();	
		}
	
		//Détecte le navigateur sur mobile
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		 	$("").html( " <div d'affichage> message.</span>" );
		 	//$("#bg").hide(); //Masque la div contenant la vidéo
		 	//$("#overlay").hide(); //Masque le pattern
		 	//$("#home").css( "background-color", "#444" ); //on applique le background à la section home
		 	setTimeout(function () {
		 		$("").fadeOut(300); }, 8000);
		}

});