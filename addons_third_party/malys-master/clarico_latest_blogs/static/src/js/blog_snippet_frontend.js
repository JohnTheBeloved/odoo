odoo.define('blog.snippets.animation', function (require) {
    'use strict';

    var ajax = require('web.ajax');
    var core = require('web.core');
    var base = require('web_editor.base');
    var animation = require('website.content.snippets.animation');
    var no_of_product;
    var qweb = core.qweb;

    animation.registry.js_get_blog = animation.Class.extend({
        selector : ".js_get_blog",

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
                template = self.$target.data("template");

           var template="clarico_latest_blogs.blog_showcase";
            if(!style)style = 1;
            if(style == 1)
      	  	{
      			 template = "clarico_latest_blogs.blog_showcase";
      	  	}
      	  	else if(style == 2)
      	  	{
      			 template = "clarico_latest_blogs.blog_showcase_slider";
      	  	}
      	  	else
      	  	{
      			 template = "clarico_latest_blogs.blog_showcase";
      	  	}

            ajax.jsonRpc('/blog_data', 'call', {'template': template}).then(function(data)
            {
                $(data).appendTo(self.$target);
                blog_carousel()
            })
                .then(function()
                {
    	  
                })
                .fail(function(e)
                {
                    console.log("Something is wrong")
                    return;
                });
        },
    });

});
