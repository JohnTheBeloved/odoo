# -*- coding: utf-8 -*-
# Part of Odoo Module Developed by 73lines
# See LICENSE file for full copyright and licensing details.
{
    'name': 'Theme Murphy',
    'description': 'Theme Murphy',
    'category': 'Theme/eCommerce',
    'version': '11.0.1.0.0',
    'author': '73Lines',
    'website': 'https://www.73lines.com',
    'depends': ['website_sale', 'ecommerce_all_in_one_73lines', 'mass_mailing'],
    'data': [
        'views/assets.xml',
        'views/customize_modal.xml',
        'views/mid_header.xml',
        'views/homepage.xml',
        'views/footer_template.xml',
    ],
    'images': [
        'static/description/murphy_ecommerce_banner.png',
        'static/description/murphy_screenshot.png',
    ],
    'application': True,
    'license': 'OPL-1',
    'live_test_url': ''
}
