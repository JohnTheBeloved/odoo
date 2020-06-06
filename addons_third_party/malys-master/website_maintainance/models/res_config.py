# -*- coding: utf-8 -*-
# Part of Softhealer Technologies.
import logging

from odoo import api, fields, models

class WebisteConfiguration(models.TransientModel):
    _inherit = 'res.config.settings'

    is_maintainance = fields.Boolean(related='website_id.is_maintainance',string="Maintainance") 
    sh_titile=fields.Char(related="website_id.sh_titile", string="Title")
    sh_message=fields.Text(related="website_id.sh_message",string="Message")
    sh_email=fields.Char(related="website_id.sh_email", string="E-Mail")   
    
class website(models.Model):
    _inherit = 'website'

    is_maintainance = fields.Boolean(string='Maintainance')
    sh_titile=fields.Char(string="Title")
    sh_message=fields.Text(string="Message")
    sh_email=fields.Char(string="E-Mail")
    