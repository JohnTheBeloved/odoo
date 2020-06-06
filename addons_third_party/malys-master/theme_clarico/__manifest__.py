{
    # Theme information
    'name' : 'Theme Clarico',
    'category' : 'Theme/eCommerce',
    'version' : '11.0.2.10',
    'summary': 'Fully Responsive Odoo Theme suitable to both Services & eCommerce Businesses',
    'description': """.""",
    'license': 'OPL-1',	


	

    # Dependencies
    'depends': [
#            'website',     
            'clarico_attribute_filter',
         	'clarico_latest_blogs',
            'clarico_brand',
            'clarico_category',
            'clarico_category_attribute',
			 'clarico_customize_color',
            'clarico_404',
          	'clarico_recently_viewed',
          	'clarico_contact',
          	'clarico_layout2',
          	'clarico_reset_password',
     		'clarico_shop_left_sidebar',
            'clarico_shop_list',
            'clarico_shop_right_sidebar',
            'clarico_signin',
            'clarico_signup',
            'clarico_product_carousel_wishlist',
            'clarico_quick_view_compare',
            'clarico_quick_view_wishlist',
            'clarico_quick_view_carousel',
            'clarico_pricefilter',
            'customize_theme',
            'clarico_compare_wishlist',     
            'clarico_rating', 
			 'clarico_category_description',
			 'clarico_similar_product',
	     'clarico_business_carousel',	

    ],


    # Views
    'data': [
         'data/clarico_data.xml',  
    #     'data/company_data/company_data.xml',
    ],
   
    #Odoo Store Specific
    'live_test_url': 'http://goo.gl/AU577q',
    'images': [
        'static/description/main_poster.jpg',
        'static/description/main_screenshot.jpg',
    ],
    
    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',
    'maintainer': 'Emipro Technologies Pvt. Ltd.',

    # Technical
    'installable': True,
    'application': True,
    'auto_install': False,
    'price': 199.00,
    'currency': 'EUR',
}
