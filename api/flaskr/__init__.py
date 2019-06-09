import os, json, datetime
from bson.objectid import ObjectId
from flask import Flask, Blueprint, request
# from flask_dynamo import Dynamo
from pymongo import MongoClient
from flask_login import LoginManager
from flask_bcrypt import Bcrypt


apis = Flask(__name__)

## pymongo Config
client = MongoClient('mongodb://localhost:27017/')
db = client.viralinDB

## Flask-Login Config
login = LoginManager(apis)

## Flask-BCrypt Config
flask_bcrypt = Bcrypt(apis)

from flaskr import routes, user, sellers, promotors, contents