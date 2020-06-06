odoo.define('theme_clarico.front_js',function(require){
	'use strict';
  var sAnimation = require('website.content.snippets.animation');
  var ajax = require("web.ajax");
  
  sAnimation.registry.js_timer = sAnimation.Class.extend({
    selector : ".js_timer",
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
    	  
    	  var self = this;
    	  var date = self.$target.data("date");
    	  console.log("target date =="+date)
    	  if(date != "nan")
        	  {
    		  var countDownDate = new Date(date).getTime();
    		  var x = setInterval(function() {
    				
    				// Get todays date and time
    				var now = new Date().getTime();
    				
    				// Find the distance between now an the count down date
    				var distance = countDownDate - now;// Time calculations for days, hours, minutes and seconds
    				
    				
    				if (distance > 0) {
    						var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    						var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    						var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    						var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    						
    						if ((seconds+'').length == 1) {
    							seconds = "0" + seconds;
    						}
    						if ((days+'').length == 1) {
    							days = "0" + days;
    						}
    						if ((hours+'').length == 1) {
    							hours = "0" + hours;
    						}
    						if ((minutes+'').length == 1) {
    							minutes = "0" + minutes;
    						}
    				
    				}
    				// If the count down is over, write some text
    				if (distance <= 0) 
    				{
    					clearInterval(x);
    					seconds = "00" ;
    					days = "00";
    					minutes = "00";
    					hours = "00";
    				}
    				 
    				
    				if(self.$target.find(".snippet_right_timer_div"))
    				{
						self.$target.find(".snippet_right_timer_div").remove()
						var append_data="<div class='snippet_right_timer_div'><p id='date_timer' ><div class='timer_common'><div id='days'>"+	days +"</div><p id='d_lbl'>Days</p></div><p class='colon'>:</p><div class='timer_common'><div id='hours'>" + hours + "</div><p id='h_lbl'>Hours</p></div><p class='colon'>:</p><div class='timer_common'><div id='minutes'>"+ minutes +"</div><p id='m_lbl'>Minutes</p></div><p class='colon'>:</p><div class='timer_common'><div id='seconds'>" +seconds + "</div><p id='s_lbl'>Seconds</p></div></p></div>";

						self.$target.find(".snippet_right_timer_div").css("display","block")
						self.$target.append(append_data)			
    				}
    				}, 1000);
        	   }	  
      }
  });
});
			
			
