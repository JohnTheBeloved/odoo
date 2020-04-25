function blog_carousel(){
	$('.blogs_subdiv > .owl-carousel').owlCarousel({
		    margin:10,
		    nav:true,
		    autoplay:true,
		    autoplayTimeout:3000,
		    responsiveClass:true,
		    
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:2
		        }
		    }
		  });
}

	

