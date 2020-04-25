from odoo import models,fields

class ModumExpertise(models.Model):
    _name = "website.expertise"
    
    name=fields.Char("Name")
    expertise=fields.Integer("Expertise")
    company_id=fields.Many2one('res.company', 'Company')