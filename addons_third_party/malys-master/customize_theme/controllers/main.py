from odoo import http
from odoo.http import request
import os

class themeColor(http.Controller):

    @http.route('/theme_color_change', type='json', auth="user", website=True)
    def color(self, theme_color=False, **kw):
        colorObj = request.env['ir.config_parameter']
	
        if theme_color:
            request.env['ir.config_parameter'].sudo().set_param("customize_theme.theme_color",
                                                                repr(theme_color))

#             path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
#             path = path + "/static/src/less/custom_color.less"
# 
#             #...write file
#             f = open(path, "w")
#             f.write("@theme-color:"+theme_color+';')
#             f.close()

    @http.route('/theme_color_store', type='json', auth="user", website=True)
    def color_store(self, theme_color=False, **kw):
        colorObj = request.env['ir.config_parameter']
        color_id = colorObj.sudo().get_param('customize_theme.theme_color')
        if color_id:
            color_id = color_id.replace("'", "")

            return color_id
    
    
#     @http.route(['/fontbox'], type='json', auth="public", methods=['POST'], website=True,csrf=False)    
#     def fontbox(self, **post):
#         response = http.Response(template="customize_theme.font_box_template",qcontext=post)
#         return response.render()
#     
#     @http.route(['/change_font'], type='json', auth="public", methods=['POST'], website=True,csrf=False)    
#     def change_font(self, **post):
#         path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
#         path = path + "/clarico_base/static/src/less/fonts.less"
#         fin = open(path, 'r')
#         linelist = fin.readlines()
#         fin.close()
#         fout = open(path, 'w')
#         flag=''
#         for line in linelist:
#             if flag=='muli-Bold':
#                 ln=line.replace(line,'    src: url('+post['bold_type']+');\n')
#                 fout.write(ln)
#                 flag=''
#             elif flag=='muli-Regular':
#                 ln=line.replace(line,'    src: url('+post['regular_type']+');\n')
#                 fout.write(ln)
#                 flag=''
#             elif flag=='muli-semibold':
#                 ln=line.replace(line,'    src: url('+post['semibold_type']+');\n')
#                 fout.write(ln)
#                 flag=''
#             elif flag=='muli-light':
#                 ln=line.replace(line,'    src: url('+post['light_type']+');\n')
#                 fout.write(ln)
#                 flag=''
#             elif 'font-family: muli-Bold' in line:
#                 flag='muli-Bold';
#                 fout.write(line)
#             elif 'font-family: muli-Regular' in line:
#                 flag='muli-Regular';
#                 fout.write(line)
#             elif 'font-family: muli-semibold' in line:
#                 flag='muli-semibold';
#                 fout.write(line)
#             elif 'font-family: muli-light' in line:
#                 flag='muli-light';
#                 fout.write(line)          
#             elif flag=='oswald-bold':
#                 ln=line.replace(line,'    src: url('+post['f2_bold_type']+');\n')
#                 fout.write(ln)
#                 flag=''
#             elif flag=='oswald-regular':
#                 ln=line.replace(line,'    src: url('+post['f2_regular_type']+');\n')
#                 fout.write(ln)
#                 flag=''
#             elif flag=='oswald-semibold':
#                 ln=line.replace(line,'    src: url('+post['f2_semibold_type']+');\n')
#                 fout.write(ln)
#                 flag=''
#             elif flag=='oswald-light':
#                 ln=line.replace(line,'    src: url('+post['f2_light_type']+');\n')
#                 fout.write(ln)
#                 flag=''
#             elif 'font-family: oswald-bold' in line:
#                 flag='oswald-bold';
#                 fout.write(line)
#             elif 'font-family: oswald-regular' in line:
#                 flag='oswald-regular';
#                 fout.write(line)
#             elif 'font-family: oswald-semibold' in line:
#                 flag='oswald-semibold';
#                 fout.write(line)
#             elif 'font-family: oswald-light' in line:
#                 flag='oswald-light';
#                 fout.write(line)
#             else:
#                 flag='';
#                 fout.write(line)
#         fout.close()
#         return True
#     
