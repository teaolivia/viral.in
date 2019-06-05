#!flask/bin/python
from contents import add_contents
from services import root_dir, nice_json
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
import json
import requests

app = Flask(__name__)
api = Api(app)

with open("{}/database/sellers.json".format(root_dir()), "r") as f:
    sellers = json.load(f)
with open("{}/database/promotors.json".format(root_dir()), "r") as f:
    promotors = json.load(f)
with open("{}/database/contents.json".format(root_dir()), "r") as f:
    contents = json.load(f)

class Sellers(User):

    def __init__(self, id, username, password):
        User.__init__(self, username, password)
        self.seller_id = id
    
    def count_total_promotors(self, id, pro_id):
        count = 0
        for i in promotors:
            if promotors.id[promotor_id] == pro_id:
                count += 1
        return count
    
    def upload_profile_picture(self, id):
        pass

@app.route("/", methods=['GET'])
def body():
    return jsonify({
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
    return jsonify({"seller_id"})

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
    count = 0
    for i in contents:
        if contents[i].status == "TRUE":
            count += 1
        else:
            continue
    return count

def count_total_contents(seller_id):
    count = 0
    for i in contents:
        if contents[i] == seller_id:
            count += 1
        else:
            continue
    return count

def count_referrals(seller_id):
    count = 0
    for i in promotors:
        if promotors[i].seller_id == seller_id:
            count += 1
        else:
            continue
    return count

# all sellers' functions
def make_new_contents(seller_id, content_id):
    

# main driver
if __name__ == '__main__':
    app.run(port=5001,debug=True)