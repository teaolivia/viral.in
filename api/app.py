#!flask/bin/python
from flask import Flask, jsonify

app = Flask(__name__)

business_owners = [
    {
        'id': 1,
        'username': 'asdf',
        'password': '1234'
        'business_name': u'ASD',
        'description': u'Kami adalah usaha dengan menjual barang elektronik', 
        'email': 'asd@abc.com',
        'phone': '+6281234567890',
        'contents': {
            'content_type': [

            ],
            'content_title': '',
            'duration': 20,
            'form': [
                'fisik',
                'digital'
            ],
            'asset': 999999999,
            'games_rule': 'naldfghahgargawjg;arjg;lasjg'
        }
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web', 
        'done': False
    }
]

@app.route('/business/api/v1.0/business', methods=['POST'])
def get_all():
    return jsonify({'business_owners': business_owners})

if __name__ == '__main__':
    app.run(debug=True)