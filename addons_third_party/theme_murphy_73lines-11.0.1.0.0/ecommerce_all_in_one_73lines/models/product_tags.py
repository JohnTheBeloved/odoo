# -*- coding: utf-8 -*-
# Part of Odoo Module Developed by 73lines
# See LICENSE file for full copyright and licensing details.


from odoo import fields, models


class ProductTags(models.Model):
    _name = 'product.tags'
    _order = 'sequence'

    sequence = fields.Integer(help="Gives the sequence order when "
                                   "displaying a list of rules.")
    name = fields.Char(string='Name', required=True, translate=True)

    _sql_constraints = [('name_uniq', 'unique (name)',
                         "Tag name already exists !")]


class ProductTemplate(models.Model):
    _inherit = "product.template"

    tag_ids = fields.Many2many('product.tags', string='Product Tags')
