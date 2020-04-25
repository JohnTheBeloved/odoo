function employee_carousel(){

		$('.emp2_main_div > .owl-carousel').owlCarousel({
		    margin:10,
		    nav:true,
		    autoplay:true,
		    autoplayTimeout:2000,
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
		            items:4
		        }
		    }
		  });
		$('.emp3_main_div > .owl-carousel').owlCarousel({
			loop:true,
		    margin:10,
		    nav:true,
		    autoplay:true,
		    autoplayTimeout:2000,
		    responsiveClass:true,
		    autoplayHoverPause:true,
		    
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		  });
		$('.emp4_main_div > .owl-carousel').owlCarousel({
			loop:true,
		    margin:10,
		    nav:true,
		    autoplay:true,
		    autoplayTimeout:2000,
		    responsiveClass:true,
		    
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
		            items:4
		        }
		    }
		  });

}

	

