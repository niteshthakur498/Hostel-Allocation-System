import React from 'react';
import {Redirect} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import './ChoiceFilling.css';

import Input from '../Input/Input';
import Select from '../Select/Select';
import PageTitle from '../PageTitle/Pagetitle';

class ChoiceFilling extends React.Component{
    constructor(){
        super();
        this.state={
            rollno:'',
            hostel:'',
            rooms:'',
            submitted:false
        }
    }
    handleChange(nam,val){
        this.setState({
          [nam]:val
        })
      }
      validate=()=>{
        let isError= false;

        // if(this.state.rollno === ''){
        //     //errors.nameError  = 'Please enter a valid name';
        //     isError = true;
        //   }
          if(this.state.hostel === ''){
            //errors.nameError  = 'Please enter a valid name';
            isError = true;
          }
          if(this.state.rooms === ''){
            //errors.nameError  = 'Please enter a valid name';
            isError = true;
          }

        return isError;
    }
    submitController(){
        let rooms = this.state.rooms.split(',');
        let choice = {
            rollNo:  jwt.verify(localStorage.getItem("student_token"),'secret').identity.rollno,
            hostelName: this.state.hostel,
            roomOptions: rooms
        }
        fetch(
            'http://127.0.0.1:5000/students/roomApplication',
            {
                method: 'POST',  
                body: JSON.stringify(choice),
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Credentials": true,
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            }
        )
        .then((res)=>res.json())
        .then(result=>{
            console.log("jijij");
            this.setState({
                submitted:true
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
      handleSubmit(e){
        e.preventDefault();
        let er = this.validate();
        let check;
        if(er){
            alert("Enter All Fields Correctly")
        }
        else{
            
            
            let check = {
                rollNo: jwt.verify(localStorage.getItem("student_token"),'secret').identity.rollno
            }
            fetch('http://127.0.0.1:5000/students/getApplication',
                {
                    method: 'POST',  
                    body: JSON.stringify(check),
                    headers:{
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Access-Control-Allow-Origin': '*',
                        "Access-Control-Allow-Credentials": true,
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                    }
                }
            )
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                if(result.result=='No results found'){
                    this.submitController();
                }
                else{
                    this.setState({
                        submitted:true
                    });
                    alert("Already Submitted")
                    
                }
            })
            .catch(err=>console.log(err))
            console.log(check);
        }
      }
    render(){
        if(this.state.submitted){
            return (
                <Redirect to='/student/profile'/>
            )
        }
        return(
            <div className="choiceFilling-Container">
                <div>
                    <div className="choiceFilling-Content">
                        <PageTitle text="Fill your Choice"/>
                        <form onSubmit = {this.handleSubmit.bind(this)}>
                            {/* <Input 
                                value = {this.state.rollno}
                                hasLabel='false'
                                htmlFor='rollno'
                                name='rollno'
                                type='text'
                                placeholder='Roll No'
                                onChange = {this.handleChange.bind(this)}
                            /> */}
                            {/* <Input 
                                value = {this.state.cgpa}
                                hasLabel='false'
                                htmlFor='cgpa'
                                name='cgpa'
                                type='text'
                                placeholder='CGPA'
                                onChange = {this.handleChange.bind(this)}
                            /> */}
                            <Select 
                                value = {this.state.hostel}
                                hasLabel='false'
                                label="Hostel"
                                htmlFor='hostel'
                                name='hostel'
                                options="Himgiri Boys Hostel"
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                value = {this.state.rooms}
                                hasLabel='false'
                                htmlFor='rooms'
                                name='rooms'
                                type='text'
                                placeholder='Room Choices(Fill Comma separated list)'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                type='Submit'
                                htmlFor='choiceFilling'
                                value='Submit'
                            />
                        </form>
                    </div>
                </div>
            </div>            
        );
    }
}


export default ChoiceFilling;