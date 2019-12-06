from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'admin'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/admin'
app.config['JWT_SECRET_KEY'] = '#secret#'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/admin/login', methods=['POST'])
def login():
    admin = mongo.db.admin
    adminID = request.get_json()['adminID']
    password = request.get_json()['password']
    accessTime = datetime.utcnow()
    result = ""

    response = admin.find_one({'adminID': adminID})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'adminID': response['adminID'],
                'accessTime': accessTime
            })
            result = jsonify({'token':access_token})
    else:
        result = jsonify({'error':'Invalid Admin Credentials'})
    return result 

if __name__=='__main__':
    app.run(debug=True)
