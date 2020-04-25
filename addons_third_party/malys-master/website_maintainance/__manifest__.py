# -*- coding: utf-8 -*-
# Part of Softhealer Technologies.
{
    'name' : 'Website Maintenance / Under Construction / Coming Soon',
    'author' : 'Softhealer Technologies',
    'website': 'http://www.softhealer.com',
    'category': 'Website',
    'description': """ 
            Website Maintainance Mode
    """,    
    'version':'11.0.1',
    'depends': ['web', 'web_editor', 'web_planner','website','portal'],
    'application' : True,
    'data': [
        'views/website_templates.xml',
        'views/res_config.xml',
     ],       
    'images': ['static/description/background.png',],              
    'auto_install':False,
    'installable' : True,
    'license': 'LGPL-3',
    "price": 20,
    "currency": "EUR"   
}
