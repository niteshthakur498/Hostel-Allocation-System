from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'students'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/students'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/student/register', methods=["POST"])
def register():
    students = mongo.db.students
    rollno = request.get_json()['rollno']
    name = request.get_json()['name']
    yearofstudy = request.get_json()['yearofstudy']
    email = request.get_json()['email']
    dept = request.get_json()['dept']
    phonenumber = request.get_json()['phonenumber']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()
    role='Student'

    student_id = students.insert({
        'rollno' : rollno,
        'name': name,
        'email': email,
        'yearofstudy' : yearofstudy,
        'dept' : dept,
        'phonenumber' : phonenumber,
        'password': password,
        'created': created,
        'role': role
    })

    new_student = students.find_one({'_id': student_id})
    result = {'Name': new_student['name'] + ' Registered'}
    return jsonify({'Result' : result})

@app.route('/student/login', methods=['POST'])
def login():
    students = mongo.db.students 
    rollno = request.get_json()['rollno']
    password = request.get_json()['password']
    result = ""

    response = students.find_one({'rollno': rollno})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'name': response['name'],
                'rollno': response['rollno'],
                'email': response['email'],
                'role':response['role'],
                'yearofstudy': response['yearofstudy'],
                'dept' : response['dept'],
                'phonenumber' : response['phonenumber']

            })
            result = jsonify({'token':access_token})
        else:
            result = jsonify({"error":"Invalid username and password"})
    else:
        result = jsonify({"result":"No results found"})
    return result 

if __name__=='__main__':
    app.run(debug=True)