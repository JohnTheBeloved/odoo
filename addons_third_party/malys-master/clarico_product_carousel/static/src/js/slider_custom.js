function create_slider(slider_slide,loop){
	
	var slide_int_val=parseInt(slider_slide);
		  $('.product_carousel_slider > .owl-carousel').owlCarousel({
				loop:loop,
			    margin:10,
			    nav:true,
			    autoplay:true,
			    autoplayTimeout:3000,
			    responsiveClass:true,
			    autoplayHoverPause:true,
			    
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
						
						items:2
					},
			        800:{
			            items:3
			        },
			        1000:{
			            items:slide_int_val
			        }
			    }
			  });
}


	

