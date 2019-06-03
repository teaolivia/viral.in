#!flask/bin/python
from services import root_dir, nice_json
from flask import Flask, jsonify
import json
import requests

app = Flask(__name__)

with open("{}/database/promotors.json".format(root_dir()), "r") as f:
    promotors = json.load(f)

# main driver
if __name__ == '__main__':
    app.run(port=5002,debug=True)