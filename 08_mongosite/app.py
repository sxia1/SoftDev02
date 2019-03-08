# Axc Perfume -- Sophia Xia, Ryan Aday, Raunak Chowdhury
# Softdev2 pd8
# K#08: Ay Mon, Go Git It From Yer Flask
# 2019-03-08

import os

from flask import Flask, render_template, request, flash

from mango import *

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods = ['GET', 'POST'])
def home():
    vars = {}
    if request.method == 'POST':
        ip = request.form['ip']
        # print('IP: "{}"'.format(ip))
        if ip:
            setup(ip)
        id = request.form['id']
        data = find_pokemon_by_id(int(id))
        if len(data) != 0:
            data = data[0]
            vars['pokemon_img'] = data['img']
            vars['id'] = data['id']
            vars['name'] = data['name']
            vars['type'] = data['type']
            vars['weaknesses'] = data['weaknesses']
            vars['data'] = True
        else:
            flash('Not a valid id!')
    return render_template('form.html', **vars)

if __name__ == '__main__':
    app.run(debug=True)
