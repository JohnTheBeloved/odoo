odoo.define('pricefilter.filter', function(require) {
	"use strict";
	require('web.dom_ready');
	$('form.js_attributes').submit(function(){
	    $(this).find('input[name], select[name]').each(function(){
				if (!$(this).val()){
					$(this).removeAttr('name');
				}
			});
	});
	
	if($("#price_range_max_value").val() && $("#price_range_min_value").val() == "")
	{
		$("#price_range_min_value").val('0')
	}
	
	
	var price_slider_min = $("#price_slider_min").val();
	var price_sldier_max = $("#price_slider_max").val();
	var price_from = $("#price_range_min_value").val();
	if (price_from ==""){price_from=price_slider_min}
	var price_to = $("#price_range_max_value").val();
	if (price_to ==""){price_to=price_sldier_max}
	$("#range").ionRangeSlider({
         hide_min_max: true,
         keyboard: true,
         min: price_slider_min,
         max: price_sldier_max,
         from:price_from,
         to: price_to,
         type: 'double',
         step: 1,
         grid: false,
         
         onChange: function (data) {
             $("#price_range_min_value").val(data.from)
             $("#price_range_max_value").val(data.to)
         },
     });
	

	$("#price_range_min_value").keypress(function(e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});
	$("#price_range_max_value").keypress(function(e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});
	
	$("#price_slider_form").click(function() {
		if ($("#price_range_min_value").val() == "")
			return false			
		else if ($("#price_range_max_value").val() == "")
			return false
		else
			return true
	});
	
	$("#price_range_min_value").change(function() {
		
		var min = parseInt($(this).attr('min'));

		if ($(this).val() < min) {
			$(this).val(min);
		}
	});

	$("#price_range_max_value").change(function() {
		var max = parseInt($(this).attr('max'));
		if ($(this).val() > max) {
			$(this).val(max);
		}

	});
})