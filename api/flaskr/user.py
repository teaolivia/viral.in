from flaskr import apis, db, login, bcrypt
from flask import Flask, session, request, abort, make_response
from werkzeug.security import generate_password_hash, check_password_hash, safe_str_cmp

class User(object):
    def __init__(self, username, password):
        self.username = username
        self.set_password(password)

    def set_password(self, password):
        self.pw_hash = generate_password_hash(password)

    def check_password(self, password) -> str:
        return check_password_hash(self.pw_hash, password)

    def authenticate(self, username, password):
        user = username_table.get(username, None)
        if user and safe_str_cmp(user.password.encode('utf-8'), password.encode('utf-8')):
            return user
    
    def identity(payload):
        user_id = payload['identity']
        return userid_table.get(user_id, None)

    # uploading profile picture
    def upload_profile_picture(self, id):
        pass

    def log_in(self, username, password):
        p_hash = self.password
        if check_password:
            session['logged_in'] = True
        else:
            print('wrong password')

    def sign_up(self) -> object:
        self.username = request.get_json()['username']
        self.password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')


## Flask-JWT Config
# apis.debug = True
# apis.config['SECRET_KEY'] = 'super-secret'
# apis.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)
# jwt = JWT(apis)

# api.add_resource(User, '/user')

# if __name__ == '__main__':
#     app.run(debug=True)