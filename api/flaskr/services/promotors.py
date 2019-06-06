#!flask/bin/python
from services import Blueprint, root_dir, nice_json
from flask import Flask, jsonify
import json
import requests

app = Flask(__name__)
api = Api(app)

with open("{}/database/promotors.json".format(root_dir()), "r") as f:
    promotors = json.load(f)
    
class Promotors(User):
    def __init__(self, id, username, password):
        self.__init__(self, username,password)
        self.id = promotor_id

# main driver
if __name__ == '__main__':
    app.run(port=5002,debug=True)