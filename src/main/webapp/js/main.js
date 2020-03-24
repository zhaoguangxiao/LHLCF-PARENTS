(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Full height
	var fullHeight = function() {
		if ( !isiPhone() || !isiPad() ) {
			$('.banner').css('height', $(window).height());
			$(window).resize(function(){
				$('.banner').css('height', $(window).height());
			});
		}
	};

	

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Document on load.
	$(function(){

		fullHeight();
		
		
	



	});


}());
