# -*- coding: utf-8 -*-

from . import controllers
from . import models
from odoo import http
from odoo.http import request

class WebUtils(http.Controller):
    @http.route('/webutils/featured_products/', type='json', auth='public')
    def index(self, **kw):
      Products = request.env['product.template']
      featured = Products.browse([16563, 16562, 15836])
      new = Products.browse([16563, 16562, 15836])
      inspired = Products.browse([16563, 16562, 15836])
      products = {'new': [],'featured': [], 'inspired': []}
      for partner in featue:
        result['products'].append(partner)
      return request.env['ir.ui.view'].render_template("theme_eiser.featured_products_list", result)