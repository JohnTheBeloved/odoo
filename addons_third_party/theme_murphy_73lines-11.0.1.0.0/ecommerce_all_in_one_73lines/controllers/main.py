# -*- coding: utf-8 -*-
# Part of Odoo Module Developed by 73lines
# See LICENSE file for full copyright and licensing details.

from odoo import http
from odoo.http import request
from odoo.addons.website.controllers.main import QueryURL
from odoo.addons.website_sale.controllers.main import WebsiteSale
from odoo.addons.website_sale.controllers.main import TableCompute
from odoo.addons.http_routing.models.ir_http import slug

PPG = 20  # Products Per Page
PPR = 4  # Products Per Row


class WebsiteShopBrands(http.Controller):
    _brand_box_per_page = 18

    @http.route([
        '/brand',
        '/brand/page/<int:page>', ], type='http', auth="public", website=True)
    def ProductBrands(self, page=1, search='', **post):
        brand_obj = request.env['product.brand']
        domain = []
        if search:
            post["search"] = search
            for srch in search.split(" "):
                domain += [('name', 'ilike', srch)]
        brand_count = brand_obj.search_count(domain)
        pager = request.website.pager(url='/brand', total=brand_count,
                                      page=page,
                                      step=self._brand_box_per_page)
        brand_boxes = brand_obj.search(domain, offset=(
                                                              page - 1) * self._brand_box_per_page,
                                       limit=self._brand_box_per_page)
        values = {
            'search': search,
            'brand_boxes': brand_boxes,
            'search_count': brand_count,
            'pager': pager
        }
        return request.render(
            "ecommerce_all_in_one_73lines.shop_by_brand", values)


class WebsiteProductLimit(http.Controller):

    @http.route(['/shop/product_limit'], type='json', auth="public")
    def change_limit(self, value):
        global PPG
        PPG = int(value)
        return True


class WebsiteSaleExt(WebsiteSale):

    def _get_search_domain_ext(self, search, category, attrib_values,
                               tag_values, brand_values):
        domain = request.website.sale_product_domain()

        if search:
            for srch in search.split(" "):
                domain += [
                    '|', '|', '|', ('name', 'ilike', srch),
                    ('description', 'ilike', srch),
                    ('description_sale', 'ilike', srch),
                    ('product_variant_ids.default_code', 'ilike', srch)]

        if category:
            domain += [('public_categ_ids', 'child_of', int(category))]

        if attrib_values:
            attrib = None
            ids = []
            for value in attrib_values:
                if not attrib:
                    attrib = value[0]
                    ids.append(value[1])
                elif value[0] == attrib:
                    ids.append(value[1])
                else:
                    domain += [('attribute_line_ids.value_ids', 'in', ids)]
                    attrib = value[0]
                    ids = [value[1]]
            if attrib:
                domain += [('attribute_line_ids.value_ids', 'in', ids)]

        if tag_values:
            domain += [('tag_ids', 'in', tag_values)]

        if brand_values:
            domain += [('brand_id', 'in', brand_values)]

        return domain

    @http.route()
    def shop(self, page=0, category=None, search='', ppg=False, **post):

        if ppg:
            try:
                ppg = int(ppg)
            except ValueError:
                ppg = PPG
            post["ppg"] = ppg
        else:
            ppg = PPG

        # For Attributes
        attrib_list = request.httprequest.args.getlist('attrib')
        attrib_values = [[int(x) for x in v.split("-")] for v in attrib_list if v]
        attributes_ids = {v[0] for v in attrib_values}
        attrib_set = {v[1] for v in attrib_values}

        # For Tags
        tag_list = request.httprequest.args.getlist('tags')
        tag_values = [[str(x) for x in v.split("-")] for v in tag_list if v]
        tag_set = set([int(v[1]) for v in tag_values])

        # For Brands
        brand_list = request.httprequest.args.getlist('brands')
        brand_values = [[str(x) for x in v.split("-")] for v in brand_list if v]
        brand_set = set([int(v[1]) for v in brand_values])

        Product = request.env['product.template']

        domain = self._get_search_domain_ext(search, category, attrib_values,
                                             list(tag_set), list(brand_set))
        keep = QueryURL('/shop', category=category and int(category),
                        search=search, attrib=attrib_list,
                        order=post.get('order'), brands=brand_list,
                        tags=tag_list)

        url = "/shop"
        if category:
            category = request.env['product.public.category'].browse(
                int(category))
            url = "/shop/category/%s" % slug(category)
        if attrib_list:
            post['attrib'] = attrib_list
        if tag_list:
            post['tags'] = tag_list
        if brand_list:
            post['brands'] = brand_list
        # if search:
        #     post['search'] = search

        product_count = Product.search_count(domain)
        pager = request.website.pager(url=url, total=product_count,
                                      page=page, step=ppg, scope=7,
                                      url_args=post)
        products = Product.search(domain, limit=ppg, offset=pager['offset'],
                                  order=self._get_search_order(post))

        ProductAttribute = request.env['product.attribute']
        ProductBrand = request.env['product.brand']
        ProductTag = request.env['product.tags']
        if products:
            attributes = ProductAttribute.search(
                [('attribute_line_ids.product_tmpl_id', 'in', products.ids)])
            prod_brands = []
            prod_tags = []
            for product in products:
                if product.brand_id:
                    prod_brands.append(product.brand_id.id)
                if product.tag_ids:
                    for tag_id in product.tag_ids.ids:
                        prod_tags.append(tag_id)
            brands = ProductBrand.browse(list(set(prod_brands)))
            tags = ProductTag.browse(list(set(prod_tags)))
        else:
            attributes = ProductAttribute.browse(attributes_ids)
            brands = ProductBrand.browse(brand_set)
            tags = ProductTag.browse(tag_set)

        limits = request.env['product.view.limit'].search([])

        res = super(WebsiteSaleExt, self).shop(page=page, category=category,
                                               search=search, ppg=ppg, **post)

        res.qcontext.update({
            'pager': pager, 'products': products, 'tags': tags,
            'brands': brands, 'bins': TableCompute().process(products, ppg),
            'attributes': attributes, 'search_count': product_count,
            'attrib_values': attrib_values, 'tag_values': tag_values,
            'brand_values': brand_values, 'brand_set': brand_set,
            'attrib_set': attrib_set, 'tag_set': tag_set, 'limits': limits,
            'PPG': PPG, 'keep': keep,
        })
        return res

    @http.route()
    def product(self, product, category='', search='', **kwargs):
        ProductCategory = request.env['product.public.category']
        if category:
            category = ProductCategory.browse(int(category)).exists()

        # For Attributes
        attrib_list = request.httprequest.args.getlist('attrib')
        attrib_values = [map(int, v.split("-")) for v in attrib_list if v]
        attrib_set = set([v[1] for v in attrib_values])

        # For Tags
        tag_list = request.httprequest.args.getlist('tags')
        tag_values = [map(str, v.split("-")) for v in tag_list if v]
        tag_set = set([int(v[1]) for v in tag_values])

        # For Brands
        brand_list = request.httprequest.args.getlist('brands')
        brand_values = [map(str, v.split("-")) for v in brand_list if v]
        brand_set = set([int(v[1]) for v in brand_values])

        keep = QueryURL('/shop', category=category and category.id,
                        search=search, attrib=attrib_list,
                        brands=brand_list, tags=tag_list)

        res = super(WebsiteSaleExt, self).product(product=product,
                                                  category=category,
                                                  search=search, **kwargs)

        res.qcontext.update({
            'attrib_values': attrib_values,
            'attrib_set': attrib_set,
            'tag_values': tag_values,
            'tag_set': tag_set,
            'brand_values': brand_values,
            'brand_set': brand_set,
            'keep': keep,
        })
        return res
