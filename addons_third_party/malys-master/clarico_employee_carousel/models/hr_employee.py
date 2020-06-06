from odoo import api, fields, models

class SocialAccount(models.Model):

    _inherit = 'hr.employee'
   
    emp_facebook = fields.Char("Facebook Account")
    emp_twitter = fields.Char("Twitter Account")
    emp_linkedin = fields.Char("Linkedin Account")
    emp_google = fields.Char("Google Account")

