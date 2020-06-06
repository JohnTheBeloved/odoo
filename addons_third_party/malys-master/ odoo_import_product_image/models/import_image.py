# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

from odoo.exceptions import Warning
from odoo import models, fields, api, _
import itertools,operator
import tempfile
import binascii
import xlrd
#import urllib2
import urllib.request 
import io

import logging
_logger = logging.getLogger(__name__)
try:
    import xlwt
except ImportError:
    _logger.debug('Cannot `import xlwt`.')
try:
    import cStringIO
except ImportError:
    _logger.debug('Cannot `import cStringIO`.')
try:
    import base64
except ImportError:
    _logger.debug('Cannot `import base64`.')


class bi_import_product_image(models.Model):
    _name = "bi.import.product.image"

    model = fields.Selection([('template','Product Template'),('product','Product')],string='Models', required=True)
    operation = fields.Selection([('create','Create Product'),('update','Update Product')],string='Operations', required=True)
    file = fields.Binary('Select Excel File', required=True) 

    def import_image(self):
        fp = tempfile.NamedTemporaryFile(suffix=".xlsx")
        fp.write(binascii.a2b_base64(self.file))
        fp.seek(0)
        values = {}
        workbook = xlrd.open_workbook(fp.name)
        sheet = workbook.sheet_by_index(0)
        for row_no in range(sheet.nrows):
            val = {}
            if row_no <= 0:
                fields = map(lambda row:row.value.encode('utf-8'), sheet.row(row_no))
            else:
                line = list(map(lambda row:isinstance(row.value, bytes) and row.value.encode('utf-8') or str(row.value), sheet.row(row_no)))
                values.update( {'name':line[0],
                                'code': line[1],
                                'image': line[2],
                    
                                })
                if values.get('image') != '':
                    try:
                        f = base64.encodestring(urllib.request.urlopen(values.get('image')).read())
                    except ValueError:  # invalid URL
                        with open(values.get('image'), "rb") as image_file:
                            f = base64.b64encode(image_file.read())
                       
                       
                else:
                    f = False
                if self.model == 'template':
                    model = self.env['product.template']
                else:
                    model = self.env['product.product']
                
                if self.operation == 'create':
                    model.create({
                                'name':values.get('name'),
                                'default_code':values.get('code'),
                                'image':f
                                })
                else:
                    prod_search = model.search([('name','=', values.get('name')),('default_code','=', values.get('code'))])
                    if prod_search:
                        for product in prod_search:
                            product.image = f
                    else:
                        raise Warning(_('"%s" does not found') % values.get('name'))

        return True
    









                
                    
