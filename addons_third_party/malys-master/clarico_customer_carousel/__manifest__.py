{
    # Theme information
    'name' : 'Clarico Customer Carousel',
    'category' : 'Website',
    'version' : '1.0',
    'summary': 'Showcase your Customers using clarico Customer Carousel',
    'description': """""",

    # Dependencies
    'depends': [
        'clarico_carousel','clarico_snippets'
    ],

    # Views
    'data': [
         'templates/assets.xml',
         'templates/customer_carousel_snippet.xml',
         'templates/customer_carousel_snippent_option.xml',
         'view/res_partner.xml'
    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',

    # Technical
    'installable': True,
}
