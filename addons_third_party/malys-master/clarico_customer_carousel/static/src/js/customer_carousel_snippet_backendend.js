odoo.define('website.snippets.options', function (require) {
'use strict';
require('web.dom_ready')
var ajax = require("web.ajax");
var core = require("web.core");
var Dialog = require("web.Dialog");
var editor = require("web_editor.editor");
var options = require('web_editor.snippets.options');
var snippet_editor = require('web_editor.snippet.editor');
var website = require('website.website');


var _t = core._t;
var qweb = core.qweb;

snippet_editor.Class.include({
    _get_snippet_url: function () {
        return '/website/snippets';
    }
});

options.registry.js_get_customer = options.Class.extend({
	drop_and_build_snippet: function(){
	      var self = this;
	      
	      if (!self.$target.data('snippet-view')) {  	  
	        this.$target.data("snippet-view", new website.snippet.animationRegistry.js_get_customer(this.$target));
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
	console.log("customer")
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

})
