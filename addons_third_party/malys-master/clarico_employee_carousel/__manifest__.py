{
    # Theme information
    'name' : 'clarico Employee Carousel',
    'category' : 'Website',
    'version' : '1.0',
    'summary': 'Showcase your Employee using clarico Carousel',
    'description': """""",

    # Dependencies
    'depends': [
        'clarico_carousel','website_hr','clarico_snippets',
    ],

    # Views
    'data': [
        'templates/assets.xml',
        'templates/employee_carousel_snippet.xml',
        'templates/employee_carousel_option.xml',
        'view/hr_employee.xml'
    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',

    # Technical
    'installable': True,
}
