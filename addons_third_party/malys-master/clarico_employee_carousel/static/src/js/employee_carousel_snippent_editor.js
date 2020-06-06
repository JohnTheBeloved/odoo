odoo.define('employee_carousel.static_snippets_editor', function (require) {
'use strict';
var ajax = require('web.ajax');
var core = require('web.core');
var base = require('web_editor.base');
var widget = require('web_editor.widget');
var animation = require('website.content.snippets.animation');
var options = require('web_editor.snippets.options');
var snippet_editor = require('web_editor.snippet.editor');
var website = require('website.website');

var _t = core._t;
var qweb = core.qweb;

options.registry.js_get_employee = options.Class.extend({
	drop_and_build_snippet: function(){
	      var self = this;
	      if (!self.$target.data('snippet-view')) {  	  
	        this.$target.data("snippet-view", new website.snippet.animationRegistry.js_get_employee(this.$target));
	        
	      }
	    },
	    clean_for_save:function(){
		      this.$target.empty();
	    }	
	});
	
options.registry.js_get_style =  options.Class.extend({
	start:function(){
      var self = this;
      setTimeout(function(){
        var ul = self.$overlay.find(".snippet-option-js_get_style > ul");
        if (self.$target.attr("data-style")) {
          var limit = self.$target.attr("data-style");
          ul.find('li[data-style="' + limit + '"]').addClass("active");
        } else {
          ul.find('li[data-style="1"]').addClass("active");
        }
      },100)
    },
    style:function(previewMode, value){
	console.log("employee")
        var self = this
        var value = parseInt(value);
        this.$target.attr("data-style",value)
                    .data("style",value)
                    .data('snippet-view').redrow(true);
      },
      _setActive: function () {
          this.$el.find('li[data-style]').removeClass('active')
              .filter('li[data-style=' + this.$target.attr('data-style') + ']').addClass('active');
      }
});

});
