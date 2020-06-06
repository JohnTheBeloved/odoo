# -*- coding: utf-8 -*-
from odoo import http

class Eiser(http.Controller):
    @http.route('/eiser/eiser/', auth='public', website=True)
    def index(self, **kw):
      Products = http.request.env['product.product']
      return http.request.render('eiser.index', {
            'products': Products.search([]),
        })

    @http.route('/eiser/<model("product.product"):product>/', auth='public', website=True)
    def product(self, product):
      return http.request.render('eiser.details', {
          'product': product
      })

#     @http.route('/eiser/eiser/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('eiser.listing', {
#             'root': '/eiser/eiser',
#             'objects': http.request.env['eiser.eiser'].search([]),
#         })

#     @http.route('/eiser/eiser/objects/<model("eiser.eiser"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('eiser.object', {
#             'object': obj
#         })