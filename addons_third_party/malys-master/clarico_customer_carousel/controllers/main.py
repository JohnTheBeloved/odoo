from odoo import http
from odoo.http import request
from odoo import SUPERUSER_ID
from odoo.tools.safe_eval import safe_eval

class claricoCustomerCarousel(http.Controller):
     
    @http.route(['/customer_carousel_snippets/render'], type='json', auth='public', website=True)
    def render_customer_carousel(self,template=None):
        if template:
            customer_rc = request.env['res.partner'].sudo().search([('is_website_published','=',True)])
            values={
                'objects':customer_rc,
            }
            return request.env.ref(template).render(values)
        
