$(document).ready(function () {
	// animation js
	AOS.init();
	// slick slide photo-gallery
	$('.banner-list').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		infinite: true,
		fade: true,
		cssEase: 'linear',		
		speed: 200,
    });
	
	// gallery
	$('.photo-gallery').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	
	
	
}); // doctype End
