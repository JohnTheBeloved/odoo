$(document).ready(function(){
	// Search Animation
	$(".search_menu").click(function(){
		$(".header_main_center").addClass("search_animate");
		$(".search_menu_sub_div input").css("width","80%");
		setTimeout(function(){ 
			$(".search_menu_div").css("display","block");
		}, 500);
	})
	$(".search_close").click(function(){
		$(".header_main_center").removeClass("search_animate");
		$(".search_menu_div").css("display","none");
		$(".search_menu_sub_div input").css("width","0%");
	})

	
})