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

    def add_content(self, username):
        pass
    
    def delete_content(self, username, content_id):
        pass

    def edit_content(self, username):
        pass

    def toggle_active_content(self, username, content_id, stat):
        if stat == True:
            stat = False
        else:
            stat = True

    def set_duration(self, username, content_id, start, end):
        self.duration_start = start
        self.duration_end = end
    
# main driver
if __name__ == '__main__':
    app.run(port=5003,debug=True)