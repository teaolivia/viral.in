import os, json, datetime
from bson.objectid import ObjectId
from flask import Flask, Blueprint, request
from flask_cors import CORS
from flask_dynamo import Dynamo
from flask_jwt_extended import JWTManager, create_access_token
from pymongo import MongoClient
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
import boto3

apis = Flask(__name__)

## pymongo Config
client = MongoClient('mongodb://localhost:27017/')
db = client.viralinDB

## DynamoDB Config
dynamo_client = boto3.client('dynamodb')
def get_items():
    return dynamo_client.scan(TableName='viralinDB')

## Flask-JWT
apis.debug = True
apis.config['JWT_SECRET_KEY'] = 'laskarkalong2019'
apis.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)
jwt = JWTManager(apis)

## Flask-Login Config
login = LoginManager(apis)

## Flask-BCrypt Config
bcrypt = Bcrypt(apis)

## Flask-CORS Config
CORS(apis)

from flaskr import routes, user, sellers, promotors, contents