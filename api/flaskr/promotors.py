#!flask/bin/python
from flaskr.user import User
from flaskr import apis, db, login
from flask import Flask, jsonify
import json
import requests

class Promotors(User):
    def __init__(self, id, username, password):
        self.__init__(self, username,password)
        self.id = promotor_id

# # main driver
# if __name__ == '__main__':
#     app.run(port=5000,debug=True)