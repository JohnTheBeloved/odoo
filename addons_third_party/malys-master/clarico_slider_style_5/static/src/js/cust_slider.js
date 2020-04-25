odoo.define('clarico_slider_style_5.cust_slider', function (require) {
'use strict';

var options = require('web_editor.snippets.options');
var slider_built_id;

options.registry.clarico_slider_style_5_carousel = options.Class.extend({
	
	start: function () {
		var self = this;
	    this.$target.carousel({interval: false});
	    this.id = this.$target.attr('id');
	    this.$inner = this.$target.find('.carousel-inner');
	    this.$indicators = this.$target.find('.carousel-indicators');
	    this.$target.carousel('pause');
	    
	    this.slider_built_id = slider_built_id;
	    this._rebindEvents();
	
	    var def = this._super.apply(this, arguments);
	
	    // set background and prepare to clean for save
	    this.$target.on('slid.bs.carousel', function () {
	        self.$target.carousel('pause');
	        self.trigger_up('option_update', {
	            optionNames: ['background', 'background_position', 'colorpicker'],
	            name: 'target',
	            data: self.$target.find('.item.active'),
	        });
	    });
	    this.$target.trigger('slid.bs.carousel');
	    
	    return def;
	},

//Associates unique ID on slider elements.

	onBuilt: function () {
		var slider_parent = this.$target.parents('.slider_wrapper_mtb')
		slider_parent = this.$target.parents('#slider_wrapper_mtb').attr('id','slider_wrapper_mtb' + new Date().getTime());
		
		this.id = 'myCarousel' + new Date().getTime();
	    this.$target.attr('id', this.id);
	    this.$target.find('[data-slide]').attr('data-cke-saved-href', '#' + this.id);
	    this.$target.find('[data-target]').attr('data-target', '#' + this.id);
	    
	    this._rebindEvents();
	    
	},

//Associates unique ID on cloned slider elements.

	onClone: function () {
		var slider_parent = this.$target.parents('.slider_wrapper_mtb')
		this.$target.parents('#slider_wrapper_mtb').attr('id','slider_wrapper_mtb' + new Date().getTime());
	    var id = 'myCarousel' + new Date().getTime();
	    this.$target.attr('id', id);
	    this.$target.find('[data-slide]').attr('href', '#' + id);
	    this.$target.find('[data-slide-to]').attr('data-target', '#' + id);
	},

	cleanForSave: function () {
//		var slider_parent = this.$target.parents('.slider_wrapper_mtb')
		
	    this._super.apply(this, arguments);
	    this.$target.find('.item').removeClass('next prev left right active')
	        .first().addClass('active');
	    this.$target.find('.carousel-indicators').find('li').removeClass('active')
	        .first().addClass('active');
	    this.$target.removeClass('oe_img_bg ' + this._class).css('background-image', '');
	},

//Adds a slide.

	addSlide: function (previewMode) {
	    var self = this;
	    var cycle = this.$inner.find('.item').length;
	    var $active = this.$inner.find('.item.active, .item.prev, .item.next').first();
	    var index = $active.index();
	    this.$('.carousel-control, .carousel-indicators').removeClass('hidden');
	    this.$indicators.append('<li data-target="#' + this.id + '" data-slide-to="' + cycle + '"></li>');
	    
	    var $clone = this.$('.item:first').clone(true);
	    $clone.removeClass('active').insertAfter($active);
	    _.defer(function () {
	        self.$target.carousel().carousel(++index);
	        self._rebindEvents();
	    });
	},
	
//Removes the current slide.
	
	removeSlide: function (previewMode) {
	    if (this.remove_process) {
	        return;
	    }
	
	    var self = this;
	
	    var $items = this.$inner.find('.item');
	    var cycle = $items.length - 1;
	    var $active = $items.filter('.active');
	    var index = $active.index();
	    if (cycle > 0) {
	        this.remove_process = true;
	        this.$target.on('slid.bs.carousel.slide_removal', function (event) {
	            $active.remove();
	            self.$indicators.find('li:last').remove();
	            self.$target.off('slid.bs.carousel.slide_removal');
	            self._rebindEvents();
	            self.remove_process = false;
	            if (cycle === 1) {
	                self.$target.find('.carousel-control, .carousel-indicators').addClass('hidden');
	            }
	        });
	        _.defer(function () {
	            self.$target.carousel(index > 0 ? --index : cycle);
	        });
	    }
	},

//Changes the interval for autoplay.

	interval: function (previewMode, value) {
	    this.$target.attr('data-interval', value);
	},

	_setActive: function () {
	    this.$el.find('li[data-interval]').removeClass('active')
	        .filter('li[data-interval=' + this.$target.attr('data-interval') + ']').addClass('active');
	},

//Rebinds carousel events on indicators.

	_rebindEvents: function () {
	    var self = this;
	    this.$target.find('.carousel-control').off('click').on('click', function () {
	        self.$target.carousel($(this).data('slide'));
	    });
	    this.$target.find('.carousel-indicators [data-slide-to]').off('click').on('click', function () {
	        self.$target.carousel(+$(this).data('slide-to'));
	    });
	
	    /* Fix: backward compatibility saas-3 */
	    this.$target.find('.item.text_image, .item.image_text, .item.text_only').find('.container > .carousel-caption > div, .container > img.carousel-image').attr('contentEditable', 'true');
	    
	},
});
});

$(document).ready(function(){
		
	/*$('.carousel').on('slide.bs.carousel', function (e) {
		var slideFrom = $(this).parents('.slider_wrapper_mtb').find('.clarico_slider_style_5_list_item.active').index();
		var slideTo = $(e.relatedTarget).index();
		$(this).parents('.slider_wrapper_mtb').find('.list-group-item.clarico_slider_style_5_list_item').eq(slideFrom).removeClass('active');
		$(this).parents('.slider_wrapper_mtb').find('.list-group-item.clarico_slider_style_5_list_item').eq(slideTo).addClass('active');
	});*/
	
		
});