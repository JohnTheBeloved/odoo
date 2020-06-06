# -*- coding: utf-8 -*-
from odoo import http

# class WebUtils(http.Controller):
#     @http.route('/web_utils/web_utils/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/web_utils/web_utils/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('web_utils.listing', {
#             'root': '/web_utils/web_utils',
#             'objects': http.request.env['web_utils.web_utils'].search([]),
#         })

#     @http.route('/web_utils/web_utils/objects/<model("web_utils.web_utils"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('web_utils.object', {
#             'object': obj
#         })