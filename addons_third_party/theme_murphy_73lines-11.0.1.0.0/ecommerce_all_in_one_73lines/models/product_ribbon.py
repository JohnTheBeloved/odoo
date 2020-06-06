# -*- coding: utf-8 -*-
# Part of Odoo Module Developed by 73lines
# See LICENSE file for full copyright and licensing details.

from odoo import fields, models


class ProductRibbon(models.Model):
    _name = 'product.ribbon'
    _description = 'Product Brand'
    _order = 'name'

    name = fields.Char(string='Name', size=20, required=True, translate=True)
    ribbon_color_back = fields.Char(string='Background Color', required=True)
    ribbon_color_text = fields.Char(string='Font Color', required=True)


class ProductTemplate(models.Model):
    _inherit = "product.template"

    ribbon_id = fields.Many2one('product.ribbon', string='Product Ribbon')
