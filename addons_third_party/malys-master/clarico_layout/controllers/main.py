from odoo import http
from odoo.http import request

class claricoLayout(http.Controller):
    
    @http.route('/menu_html_builder', type='http', auth="user", website=True)
    def menu_builder(self, model=False, id=False, **kw):
        if id and model:
            id = int(id)
            record = request.env[model].browse(id)
            values = {
                'record': record,
                'model': model,
                'id': id,
            }
            return request.render("clarico_layout.website_menu_edit",values)
        return ("/")