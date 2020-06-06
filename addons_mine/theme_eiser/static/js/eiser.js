odoo.define('webutils.featured_products', function (require) {
  'use strict';
  
  var sAnimation = require('website.content.snippets.animation');
  
  console.log('loaded featured products module')
  sAnimation.registry.visitor = sAnimation.Class.extend({
    selector: ".oe_featured_products, .featured_products",

      /**
       * @override
       */
      start: function () {
        console.log('start featured products module')
          var defs = [this._super.apply(this, arguments)];
          var self = this;
          defs.push(this._rpc({route: '/webutils/featured_products'}).then(function (data) {
              if (data) {
                  self.$('.featured_products_list').replaceWith(data);
              }
          }));
          return $.when.apply($, defs);
      },
  });
  });
  