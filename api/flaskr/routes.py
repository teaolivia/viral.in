from api import api
from services import services

@app.route('/')
@app.route('/sellers/<seller-id>')
@app.route('/sellers/<seller-id>/<username>')
@app.route('/sellers/<seller-id>/<password')

@app.route('/')
def index():
    return "Hello, World!"