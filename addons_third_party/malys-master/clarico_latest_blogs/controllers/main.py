from odoo import http
from odoo.http import request

class bellusblog(http.Controller):
     
    @http.route(['/blog_data'],type='json', auth='public', website=True , csrf=False, cache=30)
    def category_data(self,template):
        data=request.env['blog.post'].search([('website_published','=',True)],order='post_date desc',limit=3)
        values = {'object':data}

        return request.env.ref(template).render(values)

    
    
    
       

    
     
    
    
    
    
    
    
    
    
    
    
