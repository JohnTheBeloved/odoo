odoo.define('customer.snippets.animation', function (require) {
'use strict';
// First Execute
var ajax = require('web.ajax');
var core = require('web.core');
var base = require('web_editor.base');
var animation = require('website.content.snippets.animation');
var qweb = core.qweb;
/*-------------------------------------------------------------------------*/
animation.registry.js_get_customer = animation.Class.extend({
    selector : ".js_get_customer",

    start: function(){
      this.redrow();
    },
    stop: function(){
      this.clean();
    },

    redrow: function(debug){
      this.clean(debug);
      this.build(debug);
    },

    clean:function(debug){
      this.$target.empty();
    },
    
    build: function(debug)
    {
      var self = this,
      style = self.$target.data("style");
      self.$target.attr("contenteditable","False");
	  var json_url = '/customer_carousel_snippets/render';
	  var template = "clarico_customer_carousel.customer_carousel_snippet_data_style_1";
	  if(style == 1)
	  {
			 template = "clarico_customer_carousel.customer_carousel_snippet_data_style_1";
	  }
	  else if(style == 2)
	  {
			 template = "clarico_customer_carousel.customer_carousel_snippet_data_style_2";
	  }
	  else if(style == 3)
	  {
			 template = "clarico_customer_carousel.customer_carousel_snippet_data_style_3";
	  }
	  else if(style == 4)
	  {
			 template = "clarico_customer_carousel.customer_carousel_snippet_data_style_4";
	  }
	  else if(style == 5)
	  {
			 template = "clarico_customer_carousel.customer_carousel_snippet_data_style_5";
	  }
	  else
	  {
			 template = "clarico_customer_carousel.customer_carousel_snippet_data_style_1";
	  }
	   
      ajax.jsonRpc(json_url, 'call', {'template':template}).then(function(objects) {
    	  $(objects).appendTo(self.$target);
    	  customer_carousel();
      }).then(function(){
    	  self.loading(debug);
      }).fail(function(e) {
        return;
      });
    },
    
    loading: function(debug){
    	//function to hook things up after build    	
    }
});
	
});
