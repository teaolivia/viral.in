from flask import Flask
from flask_restful import Resource, Api
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
api = Api(app)

class User(object):
    
    with open("{}/database/sellers.json".format(root_dir()), "r") as f:
        sellers = json.load(f)
    with open("{}/database/promotors.json".format(root_dir()), "r") as f:
        promotors = json.load(f)
    with open("{}/database/contents.json".format(root_dir()), "r") as f:
        contents = json.load(f)

    def __init__(self, username, password):
        self.username = username
        self.set_password(password)

    def set_password(self, password):
        self.pw_hash = generate_password_hash(password)

    def check_password(self, password) -> str:
        return check_password_hash(self.pw_hash, password)

    def register(self, username, password):
        phash = self.password
        self.set_password(password)

    def login(self, username, password):
        p_hash = self.password
        if check_password

api.add_resource(User, '/user')

if __name__ == '__main__':
    app.run(debug=True)