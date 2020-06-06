 odoo.define('clarico_similar_product.similar_product', function(require) {
	"use strict";
	//require('web.dom_ready')
	var base = require('web_editor.base');
	var ajax = require('web.ajax');
	var utils = require('web.utils');
	var core = require('web.core');
	var _t = core._t;

	require('web.dom_ready');

	$(".similar_product").click(function()
	{
		$('.cus_theme_loader_layout').removeClass('hidden');
			var pid = $(this).attr('data-id');
			ajax.jsonRpc('/suggest_product', 'call', {'product_id':pid}).then(function(data) {
				$(".similar_product_popover").css("display","block").addClass("zoom-fadein");
				$('.cus_theme_loader_layout').addClass('hidden');
				$('.similar_product_main-div').html(data);

				//Rating
				/*var val_ele = $("input[name='rating']");
			 	$(val_ele).each(function()
			 	{
			 			var curr_ele=$(this);
			 			var val=curr_ele.attr('data-default');
			 			var index = Math.floor(val);
						var decimal = val - index;
			 	    	parent=curr_ele.parent()
			 	    	parent.find('.stars').find("i:lt("+index+")").removeClass('fa-star-o fa-star-half-o').addClass('fa-star');
			 	    	if(decimal){
								parent.find('.stars').find("i:eq("+(index)+")").removeClass('fa-star-o fa-star fa-star-half-o').addClass('fa-star-half-o');
			 	    	}
			 	});*/

			 	//Total similar product - products
			 	var similar_total = $('.similar_total_product').html();

			 	if(similar_total > 1){
					$('.similar_product_found').html(similar_total+ " Similar Products Found");
				}
				else if(similar_total == 1){
					$('.similar_product_found').html(similar_total+ " Similar Product Found");
				}
			})
	});

	$(".common-close-btn").click(function(){
		$(".similar_product_popover").css("display","none");
	});
	
	$(document).on( 'keydown', function(e){
		if(e.keyCode === 27) {
			$(".similar_product_popover").css("display","none");
		}
	});
});

