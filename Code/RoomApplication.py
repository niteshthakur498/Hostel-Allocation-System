from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'students'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/students'

mongo = PyMongo(app)
CORS(app)

@app.route('/students/roomApplication',methods=['POST','GET'])
def roomApplication():
    roomApplications = mongo.db.roomApplications
    if (request.method == 'POST'):
        rollNo = request.get_json()['rollNo']
        hostelName = request.get_json()['hostelName']
        roomOptions = request.get_json()['roomOptions']
        created = datetime.utcnow()

        roomApplications.insert({
            'rollNo' : rollNo,
            'hostelName' : hostelName,
            'roomOptions' : roomOptions,
            'created' : created
        })

    if (request.method == 'GET'):
        roomApplications = mongo.db.roomApplications
        response = roomApplications.find({})
        result = jsonify({'response':response})
        return result
       

@app.route('/students/getApplication',methods=['POST'])
def getApplication():
    roomApplications = mongo.db.roomApplications
    rollNo = request.get_json()['rollNo']
    response = roomApplications.find_one({'rollNo':rollNo})
    if response:
        result = jsonify({'rollNo':response['rollNo'],'hostelName':response['hostelName'],'roomOptions':response['roomOptions']})
    else:
        result = jsonify({'result':'No results found'})
    return result