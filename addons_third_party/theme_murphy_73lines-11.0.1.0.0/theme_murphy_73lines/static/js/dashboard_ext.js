odoo.define('theme_murphy_73lines.web_settings_dashboard', function (require) {
    "use strict";

    var core = require('web.core');
    var Dashboard = require('web_settings_dashboard');
    var Widget = require('web.Widget');

    var QWeb = core.qweb;

    QWeb.add_template('/theme_murphy_73lines/static/xml/dashboard_ext_tracy.xml');
    Dashboard.Dashboard.include({
        init: function () {
            var res = this._super.apply(this, arguments);
            this.all_dashboards.push('73lines_theme');
            return res;
        },
        load_73lines_theme: function (data) {
            return new ThemeMurphy(this, data.apps).replace(this.$('.o_web_settings_dashboard_73lines_theme'));
        }
    });


    var ThemeMurphy = Widget.extend({
        template: 'ThemeMurphy',
        init: function () {
            return this._super.apply(this, arguments);
        },

        start: function () {
            var self = this;
            this._rpc({
                model: 'ir.config_parameter',
                method: 'get_param',
                args: ['database.uuid', false],
            }).then(function (dbuuid) {
                var apps = $('.org_logo_with_uuid_name').attr('data-app-name');
            });

            this._super.apply(this, arguments);
        },
    });
});