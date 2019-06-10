#!flask/bin/python
from flask import Flask, jsonify, request, abort, make_response
from flaskr import apis, login, db
import json
import requests

class Contents(object):
    def __init__(self, id):
        self.content_id = id

    @apis.route('/<seller_id>/contents', methods=['POST'])
    def add_content(self, sellerId):
        if not request.json or not 'username' in request.json:
            abort(400)
        title = request.args.get('title',None)
        content_type = request.args.get('content_type',None)
        duration = request.args.get('duration',None)
        form = request.args.get('type',None)
        asset = request.args.get('asset',None)            
        rule = request.args.get('game_rule',None)
        content = {
            'seller_id': request.json['seller_id'],
            '_id': tasks[-1]['_id'] + 1,
            'title': request.json['title'],
            'status': True,
            'isReferral': True,
            'content_type': request.json['content_type'],
            'duration': request.json['duration'],
            'type': request.json['form'],
            'asset': request.json['asset'],
            'games_rule': request.json.get('rule', "")
        }
        x = db.Contents.insert_one(content)
        
    @apis.route('/<seller_id>/contents', methods=['DELETE'])
    def delete_content(self, seller_id, content_id):
        db.Contents.deleteOne( { "seller_id": seller_id, "_id": content_id } )
        return jsonify({'result': True})

    @apis.route('/<seller_id>/contents', methods=['PUT'])
    def edit_content(self, username):
        pass

    @apis.route('/<seller_id>/contents', methods=['PUT'])
    def toggle_active_content(self, username, content_id, stat):
        if stat == True:
            stat = False
        else:
            stat = True

    @apis.route('/contents/duration/', methods=['POST'])
    def set_duration(self, username, content_id, start, end) -> int:
        self.duration_start = start
        self.duration_end = end
        return self.duration_end - self.duration_start
    
# # main driver
# if __name__ == '__main__':
#     app.run(port=5003,debug=True)