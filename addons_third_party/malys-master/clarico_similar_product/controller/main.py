import odoo
from odoo import http
from odoo.http import request

 
class claricoSimilarProduct(http.Controller):
    @http.route(['/suggest_product'], type='json', auth="public", website=True)    
    def fetchProduct(self,product_id=None, **kwargs):
        Rating = request.env['rating.rating']
        pricelist_context = dict(request.env.context)
        if not pricelist_context.get('pricelist'):
            pricelist = request.website.get_current_pricelist()
            pricelist_context['pricelist'] = pricelist.id
        else:
            pricelist = request.env['product.pricelist'].browse(pricelist_context['pricelist'])

        request.context = dict(request.context, pricelist=pricelist.id, partner=request.env.user.partner_id)
        
        rating_templates = {}
        compute_currency=""
        if product_id :
            product_record = request.env['product.template'].search([['id','=',product_id]])    
            values = {}
            for product_t in product_record.alternative_product_ids:
                products = request.env['product.template'].browse(product_t.id)          
                ratings = Rating.search([('message_id', 'in', products.website_message_ids.ids)])
                rating_message_values = dict([(record.message_id.id, record.rating) for record in ratings])
                rating_product = products.rating_get_stats([('website_published', '=', True)])
                rating_templates[products.id] = rating_product
                
            from_currency = request.env.user.company_id.currency_id
            to_currency = pricelist.currency_id
            compute_currency = lambda price: from_currency.compute(price, to_currency)
            
            if product_record.alternative_product_ids:
                values={
                    'product':product_record,
                    'rating_product': rating_templates,
                    'compute_currency': compute_currency,
                    'pricelist': pricelist,
                }
            response = http.Response(template="clarico_similar_product.clarico_similar_product_record",qcontext=values)
            return response.render()
            
