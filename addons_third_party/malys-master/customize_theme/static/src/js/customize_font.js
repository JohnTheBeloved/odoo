odoo.define('customize_theme.FontBox', function (require) {
"use strict";

var ajax = require('web.ajax');

$(document).ready(function() {
/*	$("#font_box").click(function(e){
		ajax.jsonRpc('/fontbox', 'call', {}).then(function (data) {
			$(data).appendTo(document.body);
			$('body').addClass('modal-open');
			$(".close-popup").click(function(e){
				$("#fontbox").remove();
				$('.modal-backdrop').remove();
				$('body').removeClass('modal-open');
			});
			$("#apply_font").click(function(e){
				if ($('#bold_type').val() ==='' || $('#regular_type').val() ==='' || $('#semibold_type').val() ==='' ||$('#light_type').val() ===''  ||$('#f2_light_type').val() ===''  ||$('#f2_regular_type').val() ==='' ||$('#f2_semibold_type').val() ==='' ||$('#f2_bold_type').val() ==='')  {
					alert("fill all the font type.")
				}
				else{
					ajax.jsonRpc('/change_font','call',{
						bold_type:$('#bold_type').val(),regular_type:$('#regular_type').val(),semibold_type:$('#semibold_type').val(),light_type:$('#light_type').val(),
						f2_light_type:$('#f2_light_type').val(),f2_regular_type:$('#f2_regular_type').val(),f2_semibold_type:$('#f2_semibold_type').val(),f2_bold_type:$('#f2_bold_type').val(),
					}).then(function (data){
						window.location.reload('true');
					})
				}
				
			});
			$(".font_reset_a").click(function(e){
				
				$('#light_type').val('https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2');
				$('#regular_type').val('https://fonts.gstatic.com/s/poppins/v5/pxiEyp8kv8JHgFVrJJfecg.woff2	');
				$('#semibold_type').val('https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2');
				$('#bold_type').val('https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2');
				$('#f2_light_type').val('https://fonts.gstatic.com/s/barlowcondensed/v1/HTxwL3I-JCGChYJ8VI-L6OO_au7B47rxz3bWuQ.woff2');
				$('#f2_regular_type').val('https://fonts.gstatic.com/s/barlowcondensed/v1/HTx3L3I-JCGChYJ8VI-L6OO_au7B6xHT2g.woff2');
				$('#f2_semibold_type').val('https://fonts.gstatic.com/s/barlowcondensed/v1/HTxwL3I-JCGChYJ8VI-L6OO_au7B4873z3bWuQ.woff2');
				$('#f2_bold_type').val('https://fonts.gstatic.com/s/barlowcondensed/v1/HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3bWuQ.woff2');
				
			})
			
		});
	});*/
	
	
	
	/*------ customize toggle ---------*/
	
	$('.more_custom_icon').click(function(){
	var	$parent_box = $(this).closest('.b_btm');
	//	$parent_box.siblings().find('.expand_main_div').hide();
		$parent_box.find('.expand_main_div').toggle("slow" , function() {
		    if ($(this).is(':visible'))
		        $(this).css('display','inline-block');
	});
	//	$(this).find('i').removeClass("fa fa-plus-circle");
	//	$(this).find('i').addClass("fa fa-minus-circle");
	/*	$parent_box.siblings().find('i').removeClass("fa fa-minus-circle");
		$parent_box.siblings().find('i').addClass("fa fa-plus-circle");*/
		 $("i", this).toggleClass("fa fa-plus-circle fa fa-minus-circle");
	});
	
	
});
});
