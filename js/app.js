(function($){
	"use strict";

	/* Star metis menu */   
	$("#menu").metisMenu();

	/* Carousel owl */
	$('#carousel').owlCarousel({
		loop:true,
		items:1,
		nav:true,
		navText :['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		margin:20,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true
	});

	/* Team owl */		
	$('#team').owlCarousel({
		margin:20,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
			},
			769:{
				items:2,
			},
			992:{
				items:4,
			}
		}
	});

	/* Testimonials owl */
	$('#testimonial').owlCarousel({
		margin:20,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
			},
			769:{
				items:3,
			}
		}
	});

	/* Product owl */
	$('#product-gallery').owlCarousel({
		margin:5,
		items: 1
	});

	/* Increase - Reduce product */
	$(".quantity-add .add").on('click', function(){
		var text = $(this).parent().parent().parent().find("[name=quantity]", '.quantity-add')
		if ($(this).hasClass('add-up')) {            
			text.val(parseInt(text.val()) + 1, 10);
		} else {
			if (parseInt(text.val()) > 1) {
				text.val(parseInt(text.val()) - 1, 10);
			}
		}        			
	});	
	
})(jQuery);