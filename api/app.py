from flask import Flask, redirect, render_template, request, session, abort, url_for
from api.services.sellers import *
from api.services.contents import *
from api.services.promotors import *
import os
from services import root_dir, nice_json
from flask import Flask, jsonify
import json
import requests

app = Flask(__name__)

# @app.route("/", methods=['POST'])
# def body():
#     return nice_json({
#         "uri": "/",
#         "subresource_uris": {
#             "sellers": "/sellers",
#             "username": "/sellers/<userid>/<username>",
#             "promotors": "/sellers/<userid>/promotors",
#             "contents": "/sellers/<userid>/contents"
#         }
#     })

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'This is for test'

list_of_sellers = sellers.get_sellers()
print(list_of_sellers)


# @app.route('/')
# def home():
#     return "Welcome!"

# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     error = None
#     if request.method == 'POST':
#         if request.form['username'] != 'admin' or request.form['password'] != 'admin':
#             error = 'Invalid Credentials. Please try again.'
#         else:
#             return redirect(url_for('home'))
#     return render_template('login.html', error=error)

# @app.route('/logout')
# def logout():
#     session.pop('logged_in', None)
#     return(redirect(url_for('home')))

# if __name__ == "__main__":
#     app.secret_key = os.urandom(12)
#     app.run(debug=True,host='0.0.0.0', port=4000)