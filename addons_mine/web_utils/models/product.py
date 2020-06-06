# -*- coding: utf-8 -*-

from odoo import models, fields, api

class Product(models.Model):
    _inherit = "product.template"

    web_description = fields.Char(string='Website Description')

    def class_for(self, active):
      if active :
        return 'active'
      else:
        return ''
