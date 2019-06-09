from flask import request, make_response
from flaskr import apis

@apis.route('/')
def henlo():
    """
    Main menu, displaying login and register page of each user types.
    """
    return 'henlo'

@apis.route('/bye')
def bye():
    return 'bye'

@apis.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)