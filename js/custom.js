var $ = jQuery;
jQuery(document).ready(function () {
	$('.nav-list').before('<div class="toggle"></div>');
	$('.toggle').click(function(){
	   $(this).toggleClass('active');
	   $('.nav-list').slideToggle();
	});		
}); // doctype End
