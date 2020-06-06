odoo.define('clarico_layout.clarico_themecolor', function (require) {
    'use strict';

    var ajax = require('web.ajax');
    var core = require('web.core');
    var session = require('web.session');
    var Widget = require('web.Widget');
    var QWeb = core.qweb;

    var clarico_themecolor = require('website.theme');

    clarico_themecolor.include({

        active_select_tags: function () {
            /* Data store using json*/
            var theme = []
            ajax.jsonRpc('/theme_color_store', 'call', {
                theme_color: theme
            }).then(function (data) {
                if(data){
                    $('#input_color').val(data);
                }
            });
            
       
            
            /* Apply theme color using json */
            
			$(".select_theme_color").click(function () {
				var theme_color = $('#input_color').val();
				if (theme_color != '') {
					if (theme_color.match(/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/) || theme_color.match(/^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)) {
						ajax.jsonRpc('/theme_color_change', 'call', {
							theme_color: theme_color
						}).then(function (data) {
						});
					}
					else {
						$('.select_theme_color').find("input").remove();
						$('#theme_customize_modal').find('.cus_theme_loader').css('display', 'none');
						alert("Not a Valid Color");
						$('#theme_customize_modal').removeClass('in');
						$('#theme_customize_modal').addClass('out');
					}
				}
            });
        },
        
        
      get_xml_ids: function ($inputs) {
	      var xml_ids = [];
	      $inputs.each(function () {
	          if ($(this).data('xmlid') && $(this).data('xmlid').length) {
	              xml_ids = xml_ids.concat($(this).data('xmlid').split(/\s*,\s*/));
	          }
	          if ($(this).data('tmp_xmlid') && $(this).data('tmp_xmlid').length) {
	              xml_ids = xml_ids.concat($(this).data('tmp_xmlid').split(/\s*,\s*/));
	          }
	      });
	      return xml_ids;
	  },
        update_style: function (enable, disable, reload) {
            if (this.$el.hasClass('loading')) {
                return;
            }
            this.$el.addClass('loading');

            if (this.$el.find('.cus_theme_loader').hasClass("hidden")) {
                this.$el.find('.cus_theme_loader').removeClass('hidden');
            }

            if (!reload && session.debug !== 'assets') {
                var self = this;
                return this._rpc({
                    route: '/website/theme_customize',
                    params: {
                        enable: enable,
                        disable: disable,
                        get_bundle: true,
                    },
                }).then(function (bundleHTML) {
                    var $links = $('link[href*=".assets_frontend"]');
                    var $newLinks = $(bundleHTML).filter('link');

                    var linksLoaded = $.Deferred();
                    var nbLoaded = 0;
                    $newLinks.on('load', function (e) {
                        if (++nbLoaded >= $newLinks.length) {
                            linksLoaded.resolve();
                        }
                    });
                    $newLinks.on('error', function (e) {
                        linksLoaded.reject();
                        window.location.hash = 'theme=true';
                        window.location.reload();
                    });

                    $links.last().after($newLinks);
                    return linksLoaded.then(function () {
                        $links.remove();
                        self.$el.removeClass('loading');
                        self.$el.find('.cus_theme_loader').addClass('hidden');
                    });
                });
            } else {
                var href = '/website/theme_customize_reload'+
                    '?href='+encodeURIComponent(window.location.href)+
                    '&enable='+encodeURIComponent(enable.join(','))+
                    '&disable='+encodeURIComponent(disable.join(','));
                window.location.href = href;
                return $.Deferred();
            }
        },
	    change_selection: function (event, init_mode) {
	      var self = this;
	      clearTimeout(this.time_select);
	
	      if (this.$el.hasClass('loading')) return; // prevent to change selection when css is loading
	
	      var $option = $(event.target).is('input') ? $(event.target) : $('input', event.target),
	          $options = $option,
	          checked = $option.prop('checked');
	
	      if (checked) {
	          var $inputs;
	          if ($option.data('enable')) {
	              $inputs = this.get_inputs($option.data('enable'));
	              $options = $options.add($inputs.filter(':not(:checked)'));
	              this.enable_disable($inputs, true);
	          }
	          if ($option.data('disable')) {
	              $inputs = this.get_inputs($option.data('disable'));
	              $options = $options.add($inputs.filter(':checked'));
	              this.enable_disable($inputs, false);
	          }
	          $option.closest('label').addClass('checked');
	      } else {
	          $option.closest('label').removeClass('checked');
	      }
	
	      var $enable = this.$inputs.filter('[data-xmlid]:checked');
	      $enable.closest('label').addClass('checked');
	      var $disable = this.$inputs.filter('[data-xmlid]:not(:checked)');
	      $disable.closest('label').removeClass('checked');
	
	      var $sets = this.$inputs.filter('input[data-enable]:not([data-xmlid]), input[data-disable]:not([data-xmlid])');
	      $sets.each(function () {
	          var $set = $(this);
	          var checked = true;
	          if ($set.data('enable')) {
	              self.get_inputs($(this).data('enable')).each(function () {
	                  if (!$(this).prop('checked')) checked = false;
	              });
	          }
	          if ($set.data('disable')) {
	              self.get_inputs($(this).data('disable')).each(function () {
	                  if ($(this).prop('checked')) checked = false;
	              });
	          }
	          if (checked) {
	              $set.prop('checked', true).closest('label').addClass('checked');
	          } else {
	              $set.prop('checked', false).closest('label').removeClass('checked');
	          }
	          $set.trigger('update');
	      });
	
	      if (this.flag && $option.data('reload') && document.location.href.match(new RegExp( $option.data('reload') ))) {
	          this.reload = true;
	      }
	
	      clearTimeout(this.timer);
	      if (this.flag) {
	          this.timer = _.defer(function () {
	              if (!init_mode) self.on_select($options, event);
	              self.update_style(self.get_xml_ids($enable), self.get_xml_ids($disable), self.reload);
	              self.reload = true;
	          });
	      } else {
	              this.timer = _.defer(function () {
	                  if (!init_mode) self.on_select($options, event);
	                  self.reload = true;
	              });
	      }
	  },
    });
});


