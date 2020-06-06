# -*- coding: utf-8 -*-
# Part of Odoo Module Developed by 73lines
# See LICENSE file for full copyright and licensing details.

from odoo import fields, models


class WebsiteProductLimit(models.Model):
    _name = 'product.view.limit'
    _order = 'sequence'

    sequence = fields.Integer(help="Gives the sequence order when "
                                   "displaying a list of rules.")
    name = fields.Integer(string='Limit', required=True)

    _sql_constraints = [('name', 'unique(name)', 'This must be unique!')]
