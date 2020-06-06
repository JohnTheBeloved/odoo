from odoo import http
from odoo.http import request
from odoo import SUPERUSER_ID
from odoo.tools.safe_eval import safe_eval
from odoo.addons.website_sale.controllers.main import QueryURL

class claricoEmployeeCarousel(http.Controller):
     
        
    @http.route(['/employee_carousel_snippets/render'], type='json', auth='public', website=True , csrf=False, cache=300)
    def render_employee_carousel(self,template="clarico_employee_carousel.employee_carousel_snippet_data"):
        employee_rc = request.env['hr.employee'].sudo().search([('active','=',True),('website_published', '=',True)])
        values={
            'objects':employee_rc,
            }
        return request.env.ref(template).render(values)
