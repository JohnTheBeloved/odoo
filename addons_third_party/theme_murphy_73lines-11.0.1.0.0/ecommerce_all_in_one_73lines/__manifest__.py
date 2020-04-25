# -*- coding: utf-8 -*-
# Part of Odoo Module Developed by 73lines
# See LICENSE file for full copyright and licensing details.
{
    'name': 'E-commerce All In One',
    'summary': 'E-commerce Options like... Tags, Brands, View Limit, '
               'View Switcher, Sorting, Quick View, Product Ribbon',
    'description': 'E-commerce Options like... Tags, Brands, View Limit, '
                   'View Switcher, Sorting, Quick View, Product Ribbon',
    'category': 'Website',
    'version': '11.0.1.0.1',
    'author': '73Lines',
    'website': 'https://www.73lines.com/',
    'depends': ['website_sale'],
    'data': [
        'security/ir.model.access.csv',
        'views/product_limit_data.xml',
        'views/assets.xml',
        'views/templates.xml',
        'views/brand_template.xml',
        'views/product_limit_view.xml',
        'views/product_views.xml',
        'views/product_ribbon_view.xml',
    ],
    'demo': [
        'data/brand_menu_data.xml'
    ],
    'images': [
        'static/description/ecommerce_all_in_one_73lines.png',
    ],
    'installable': True,
    'license': 'OPL-1',
    'currency': 'EUR',
}
