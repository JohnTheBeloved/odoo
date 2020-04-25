from odoo import models, fields, api, _

class ResPartner(models.Model):
    _inherit="res.partner"
    
    review=fields.Text("Review")
    is_website_published=fields.Boolean("Website Published")
