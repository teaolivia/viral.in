#!flask/bin/python
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)
from flaskr import apis, login, db, dynamo_client, sellers
from flask import Flask, Blueprint, jsonify, request, abort, make_response
from flaskr.user import User
from bson.objectid import ObjectId
import json
import requests


class Sellers(User):
    def __init__(self, id, username, password):
        User.__init__(self, username, password)
        self.seller_id = id

    @apis.route('/sellers/login', methods=['GET','POST'])
    def login():
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400
        username = request.json.get('username', None)
        password = request.json.get('password', None)
        if not username:
            return jsonify({"msg": "Missing username parameter"}), 400
        if not password:
            return jsonify({"msg": "Missing password parameter"}), 400
        if username != 'test' or password != 'test':
            return jsonify({"msg": "Bad username or password"}), 401
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200

        # if bcrypt.check_password_hash('password', password):
        #     access_token = create_access_token(identity={})

    @apis.route('/sellers/register', methods=['GET','POST'])
    def sign_up():
        business_name = request.args.get('namaUsaha', None)
        business_type = request.args.get('jenisUsaha', None)
        name = request.args.get('namaPebisnis', None)
        email = request.args.get('email', None)
        phone = request.args.get('nomorTelepon', None)
        alamat = request.args.get('alamat', None)
        birthplace = request.args.get('tempatLahir', None)
        birthdate = request.args.get('tanggalLahir', None)
        username = request.args.get('username', None)
        password = request.args.get('password', None)
        phash = bcrypt.generate_password_hash(password).decode('utf-8')
        obj = {
            'email' : request.json['email'],
            'password' : request.json['password']
        }
        db.Sellers.insertOne(obj)

    def upload_profile_picture(self, seller_id):
        pass

    # basic getter route
    @apis.route('/sellers/<seller_id>/n_promotors', methods=['GET'])
    def count_total_promotors(self, seller_id):
        return db.Promotors.count_documents({"seller_id": seller_id})

    @apis.route('/sellers', methods=['GET'])
    def get_sellers():
        return jsonify(dynamo_client.scan(
            TableName='sellers',
            # Key={
            #     'seller_id': seller_id
            #     }
            )
        )
        # seller_documents = [doc for doc in db.Sellers.find({})]
        # return jsonify({'sellers': seller_documents})

    @apis.route('/sellers/<seller_id>/<username>', methods=['GET'])
    def get_sellers_username(username):
        if username not in sellers:
            return "404 Not Found"
        return "return sellers username"

    @apis.route('/sellers/<seller_id>/promotors', methods=['GET'])
    def get_sellers_promotors():
        return db.Promotors.find({"seller_id": seller_id})

    @apis.route('/sellers/<seller_id>/contents', methods=['GET'])
    def get_sellers_contents():
        return db.Contents.find({"seller_id": seller_id})

    # counter which is displayed on dashboards
    @apis.route('/sellers/<seller_id>/total_active_contents', methods=['POST'])
    def count_active_contents(seller_id):
        return db.Contents.find({"seller_id": seller_id, "status": "TRUE"}).count()

    # count contents from a seller_id
    @apis.route('/sellers/<seller_id>/total_contents', methods=['POST'])
    def count_total_contents(seller_id):
        return jsonify(contents.item_count)

    # count total referral
    @apis.route('/sellers/<seller_id>/total_referrals', methods=['POST'])
    def count_referrals(seller_id):
        # return db.promotors.find({"seller_id": seller_id}).count()
        pass

    # all sellers' functions
    def make_new_contents(sellerId, contentId):
        self.add_contents(username,sellerId)

    @apis.route('/sellers/<seller_id>/stats', methods=['GET'])
    def view_stats(seller_id):
        # response = sellers.get_item(
        #     Key={
        #         'seller_id': seller_id
        #     }
        # )
        # item = response['Item']
        return jsonify(dynamo_client.scan(
            TableName='sellers',
            ScanFilter={
                'seller_id': {
                    'AttributeValueList' : [{'S': seller_id}],
                    "ComparisonOperator": "EQ"
                    }
                }
            )
        )

# # main driver
# if __name__ == '__main__':
#     app.run(port=5001,debug=True)