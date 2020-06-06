# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Import Product Images from Excel(from Path and URL)',
    'version': '11.0.0.2',
    'summary': 'This apps helps to import product images with product using local path as well as URL',
    "price": 35,
    "currency": "EUR",
    'description': """
	BrowseInfo developed a new odoo/OpenERP module apps.
	This module use for import product images,import images on product, multiple images on product, Import bulk images on product.Import product photos, Import from product images from link, Import images form link. Import from other website. Add product image. Update product Image.Import picture of product, import images from CSV, Import product images from CSV file, Import product data from CSV file. Set product image from URL , Import product images from URL, Import product images from CSV file. IMport product image from URL,Multi product images, Mutiple images on product, website multi images

Import from product images from path, Import images form local system path. Import images directory. Add product image. Update product Image.Import picture of product, import images from excel, Import product images from excel file, Import product data from excel file. Set product image from excel , Import product images from excel, Import product images from excel file. IMport product image from excel.
   """,
    'author': 'BrowseInfo',
    'website': 'http://www.browseinfo.in',
    'live_test_url':'https://youtu.be/pVtHVKjemPY',
    'depends': ['base','sale_management'],
	'data': ["views/import_image_view.xml",
             ],
    'demo': [],
    'test': [],
    'installable': True,
    'auto_install': False,
	"images":['static/description/Banner.png'],
}
