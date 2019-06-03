from flask import Flask, redirect, render_template, request, session, abort, url_for
from werkzeug.security import generate_password_hash, check_password_hash
# import api.services.sellers as sellers
# import api.services.contents as contents
# import api.services.promotors as promotors
import os
# from services import root_dir, nice_json
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

if __name__ == '__main__':
    app.run(debug=True)

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

@app.route('/register', methods=['PUT'])
def register():
    if request.method == 'PUT'
    

# if __name__ == "__main__":
#     app.secret_key = os.urandom(12)
#     app.run(debug=True,host='0.0.0.0', port=4000)