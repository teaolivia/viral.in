#!flask/bin/python
from services import Blueprint, root_dir, nice_json
from flask import Flask, jsonify
import json
import requests

app = Flask(__name__)
api = Api(app)

class Contents(object):
    def __init__(self, id):
        self.content_id = id

    def create_new_content(self, username):
        return 2
    
    def delete_content(self, username, content_id):
        pass

    def edit_content(self, username):
        pass

# main driver
if __name__ == '__main__':
    app.run(port=5003,debug=True)