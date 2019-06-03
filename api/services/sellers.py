#!flask/bin/python
from services import root_dir, nice_json
from flask import Flask, jsonify
import json
import requests

app = Flask(__name__)

with open("{}/database/sellers.json".format(root_dir()), "r") as f:
    sellers = json.load(f)
with open("{}/database/promotors.json".format(root_dir()), "r") as f:
    promotors = json.load(f)
with open("{}/database/contents.json".format(root_dir()), "r") as f:
    contents = json.load(f)

@app.route("/", methods=['GET'])
def body():
    return nice_json({
        "uri": "/",
        "subresource_uris": {
            "sellers": "/sellers",
            "username": "/sellers/<userid>/<username>",
            "promotors": "/sellers/<userid>/promotors",
            "contents": "/sellers/<userid>/contents"
        }
    })

# basic getter route
@app.route('/sellers', methods=['GET'])
def get_sellers():
    return nice_json(sellers)

@app.route('/sellers/<userid>/<username>', methods=['POST'])
def get_sellers_username(username):
    if username not in sellers:
        return "404 Not Found"
    return nice_json(sellers[userid])

@app.route('/sellers/<userid>/promotors', methods=['POST'])
def get_sellers_promotors():
    return nice_json(sellers[promotors])

@app.route('/sellers/<userid>/contents', methods=['POST'])
def get_sellers_contents():
    return nice_json(sellers[contents])

# counter which is displayed on dashboards
def count_active_contents():
    return 2

def count_total_contents():
    return float('inf')

def count_referrals():
    return 2

# main driver
if __name__ == '__main__':
    app.run(port=5001,debug=True)