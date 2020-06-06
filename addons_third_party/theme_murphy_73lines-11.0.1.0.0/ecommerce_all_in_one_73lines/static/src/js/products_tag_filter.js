/*
    Part of Odoo Module Developed by 73lines
    See LICENSE file for full copyright and licensing details.
*/
odoo.define('ecommerce_all_in_one_73lines.products_tag_filter', function (require) {
    "use strict";

    $(function(){
        if ($('input.product_tags').length) {
            _.each($('input.product_tags'), function(el) {
                if (el.getAttribute('checked')) {
                    el.closest('label').classList.add('tag_checked');
                }
                else {
                    el.closest('label').classList.remove('tag_checked');
                }
             });
         }
    });

});
