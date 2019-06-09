#!flask/bin/python
from flask_jwt import JWT, jwt_required, current_identity
from jsonschema import validate
from jsonschema.exceptions import ValidationError
from jsonschema.exceptions import SchemaError
from flaskr import apis, login, db
from flask import Flask, Blueprint, jsonify, request, abort
from flaskr.user import User
from bson.objectid import ObjectId
import json
import requests

seller_schema =   {
    "type": "object",
    "required": [
        "sellers"
        ],
    "properties": {
        "sellers": {
            "type": "array",
            "items": {
                "type": "object",
                "title": "The Items Schema",
                "required": [
                    "seller_id",
                    "username",
                    "password",
                    "name",
                    "business_name",
                    "email",
                    "phone",
                    "business_type"
                ],
            }
        }
    }
}

class Sellers(User):
    def __init__(self, id, username, password):
        User.__init__(self, username, password)
        self.seller_id = id

    @apis.route('/sellers/login', methods=['POST'])
    def log_in(self, username, password):
        pass

    @apis.route('/sellers/register', methods=['POST'])
    def sign_up(self, username, password):
        pass

    def upload_profile_picture(self, seller_id):
        pass

    # basic getter route
    @apis.route('/sellers/<string:seller_id>/n_promotors', methods=['GET'])
    def count_total_promotors(self, seller_id):
        return db.promotors.count_documents({"seller_id": seller_id})

    @apis.route('/sellers', methods=['GET'])
    def get_sellers():
        seller_documents = [doc for doc in db.Sellers.find({})]
        return jsonify({'sellers': seller_documents})

    @apis.route('/sellers/<seller_id>/<username>', methods=['POST'])
    def get_sellers_username(username):
        if username not in sellers:
            return "404 Not Found"
        return "return sellers username"

    @apis.route('/sellers/<seller_id>/promotors', methods=['GET'])
    def get_sellers_promotors():
        return db.promotors.find({"seller_id": seller_id})

    @apis.route('/sellers/<seller_id>/contents', methods=['GET'])
    def get_sellers_contents():
        return db.contents.find({"seller_id": seller_id})

    # counter which is displayed on dashboards
    @apis.route('/sellers/<seller_id>/total_active_contents', methods=['POST'])
    def count_active_contents(seller_id):
        return db.contents.count_documents({"seller_id": seller_id, "status": "TRUE"})

    # count contents from a seller_id
    @apis.route('/sellers/<seller_id>/total_contents', methods=['POST'])
    def count_total_contents(seller_id):
        return db.contents.count_documents({"seller_id": seller_id})

    # count total referral
    @apis.route('/sellers/<seller_id>/total_referrals', methods=['POST'])
    def count_referrals(seller_id):
        return db.promotors.count_documents({"seller_id": seller_id})

    # all sellers' functions
    def make_new_contents(sellerId, contentId):
        self.add_contents(username,sellerId)

# # main driver
# if __name__ == '__main__':
#     app.run(port=5001,debug=True)