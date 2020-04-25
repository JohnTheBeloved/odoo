odoo.define('clarico_customize_color.snippet_bg_color_js',function(require) {
'use strict';

    var core = require('web.core');
    var options = require('web_editor.snippets.options');
    var wUtils = require('website.utils');
    var Utils = require('web.utils');
    var qweb = core.qweb;
    var _t = core._t;
    var ajax = require("web.ajax");
    
    var color_global;
    
options.registry.set_custom_color = options.Class.extend({
	
        popup_template_id: "editor_new_snippet_background_color",
        popup_title: _t("Set Background Color"),
        
        start: function(){
        	var self = this;
        },
        set_color: function(type,value) {
            var self = this;
            
            var def = wUtils.prompt({
                'id': this.popup_template_id,
                'window_title': this.popup_title,
                 'input': "Add Color",
                 'init': function (color,dialog) {
                	 var $group = this.$dialog.find('div.form-group');
                	 $group.find('input').attr({
                		 "placeholder":"Format : #000000 or rgb(0,0,0)",
                	 })
                	 $group.after("<div class='colors_container'><div class='color_before'></div></div>")
                	 var $clr_div = this.$dialog.find('div.color_before');
                	 var cs = document.cookie.split(';');
                	 for(var i=0;i<cs.length;i++)
                	 {
                		 if(cs[i].trim().startsWith("ept"))
                		 {
                			 var colorarr = cs[i].split('=');
                			 $clr_div.after("<div class='btn-final' data-color='"+colorarr[1]+"' style='width:15px;display:inline-block;margin:1%;height:15px;background-color:"+colorarr[1]+"'>")
                			 
                		 }
                	 }
            		 dialog.on('click', '.btn-final', function () {
            			 $group.find('input').val($(this).attr('data-color'))
            		 })
            }
        });
            def.then(function (color,$dialog) {
            	
            	var isValidColor  = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/i.test(color)
            	
            	if(isValidColor){
            		color_global = color;
            		if(self.$target.hasClass("carousel") == true){
            			self.$target.find(".item.active").css('background-color',color_global);
            			Utils.set_cookie('ept'+color,color,60*60*24);
            		}else{
            			self.$target.css('background-color',color_global);
	            		Utils.set_cookie('ept'+color,color,60*60*24);
            		}
            	}else{
            		alert("Invalid Color Code! Please enter correct format.")
            		self.set_color('click');
            	}
            })
            return def;
        },
        cleanForSave:function(){
        	//this.$target.find('.active.custom').css('background-color',color_global)
	    }
    });
});
    
