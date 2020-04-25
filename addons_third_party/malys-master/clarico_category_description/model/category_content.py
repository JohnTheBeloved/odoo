from odoo import api, fields, models
from odoo.tools.translate import html_translate

 
class product_category(models.Model):
    
    _inherit = ["product.public.category"]
     
    content = fields.Html('Content', translate=html_translate)
    category_image = fields.Binary('Category Image')