from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from bson import json_util

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
        result = {'Application' : 'Submitted'}
        return jsonify({'Result' : result})

    if (request.method == 'GET'):
        roomApplications = mongo.db.roomApplications
        response = roomApplications.find({})
        json_docs = []
        for doc in response:
            json_doc = json.dumps(doc, default=json_util.default)
            json_docs.append(json_doc)
        result = jsonify({'response':json_docs})
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



@app.route('/admin/login', methods=['POST'])
def adminlogin():
    admin = mongo.db.admin
    adminID = request.get_json()['adminID']
    password = request.get_json()['password']
    print(password)
    accessTime = datetime.utcnow()
    result = ""

    response = admin.find_one({'adminid': adminID})
    
        # if bcrypt.check_password_hash(response['password'], password):
    if response:
        if response['password']==password:
            access_token = create_access_token(identity = {
                'adminID': response['adminid'],
                'accessTime': accessTime
            })
            result = jsonify({'token':access_token})
    else:
        result = jsonify({'error':'Invalid Admin Credentials'})
    return result 




if __name__=='__main__':
    app.run(debug=True)