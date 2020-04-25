from odoo import models,fields

class ResCompany(models.Model):
    _inherit="res.company"
    
    expertise_ids=fields.One2many('website.expertise','company_id','Expertise ids')