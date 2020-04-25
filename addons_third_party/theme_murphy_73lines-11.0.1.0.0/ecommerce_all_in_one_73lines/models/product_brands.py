# -*- coding: utf-8 -*-
# Part of Odoo Module Developed by 73lines
# See LICENSE file for full copyright and licensing details.


from odoo import fields, models


class ProductBrand(models.Model):
    _name = 'product.brand'
    _description = 'Product Brands'
    _order = 'sequence'

    sequence = fields.Integer(help="Gives the sequence order when displaying "
                                   "a list of rules.")
    name = fields.Char(string='Name', required=True, translate=True)
    brand_image = fields.Binary(string='Brand Image')

    _sql_constraints = [('name_uniq', 'unique (name)',
                         'Brand name already exists !')]


class ProductTemplate(models.Model):
    _inherit = "product.template"

    brand_id = fields.Many2one('product.brand', string="Product's Brand")
