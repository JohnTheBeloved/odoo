# -*- coding: utf-8 -*-
from odoo import api, fields, models
 
class BaseConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'
    
    theme_color = fields.Char('Theme Color')
#     theme_btn_color = fields.Char('Button Color')

    @api.model
    def get_values(self):
        res = super(BaseConfigSettings, self).get_values()
        params = self.env['ir.config_parameter'].sudo()
        theme_color = params.get_param('customize_theme.theme_color', default=False)
        if theme_color:
            res.update(theme_color= theme_color.replace("'", ""))
        else:
            res.update(theme_color=False)
        return res

 
    @api.multi
    def set_values(self):
        self.ensure_one()
        super(BaseConfigSettings, self).set_values()
        self.env['ir.config_parameter'].sudo().set_param("customize_theme.theme_color",
                                                         repr(self.theme_color))
         
        
