import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import './Form.css'


import Input from '../Input/Input';
import Select from '../Select/Select';
import PageTitle from '../PageTitle/Pagetitle';

class Form extends Component{
    constructor(){
        super();
        this.state={
            rollno:'',
            name:'',
            email:'',
            yearofstudy:'',
            dept:'',
            phonenumber:'',
            password:'',
            confirmpassword:'',
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

        if(this.state.rollno === ''){
            //errors.nameError  = 'Please enter a valid name';
            isError = true;
          }
          if(this.state.name === ''){
            //errors.nameError  = 'Please enter a valid name';
            isError = true;
          }
          if(!this.state.email.includes('@')){
            //errors.emailError  = 'Please enter a valid Email';
            isError = true;
          }
          if(this.state.phonenumber.length !== 10){
            //errors.phoneError  = 'Please enter a valid phone number';
            isError = true;
          }
          if(this.state.yearofstudy === ''){
            //errors.typeError  = 'Please enter a valid Type';
            isError = true;
          }
          if(this.state.dept === ''){
            //errors.typeError  = 'Please enter a valid Type';
            isError = true;
          }
          if(this.state.password.length < 5){
            //errors.sizeError  = 'Please enter a valid Size';
            isError = true;
          }
          if(this.state.password != this.state.confirmpassword){
            //errors.doughError  = 'Please enter a valid Dough';
            isError = true;
          }

        return isError;
    }
    handleSubmit(e){
        e.preventDefault();
        let er = this.validate();
        if(er){
            alert("Enter All Fields Correctly")
        }
        else{
            console.log(this.state);
            let student = {
                rollno: this.state.rollno,
                name:this.state.name,
                email:this.state.email,
                yearofstudy:this.state.yearofstudy,
                dept:this.state.dept,
                phonenumber:this.state.phonenumber,
                password:this.state.password,
            }
            fetch('http://127.0.0.1:5000/student/register',
                {
                    method: 'POST',  
                    body :JSON.stringify(student),
                    headers:{
                        'Content-Type': 'application/json;charset=UTF-8'
                      }
                }
            )
            .then((res)=>res.json())
            .then(result=>{
                console.log(result);
                alert("Student Registered");
                this.setState({
                    submitted:true
                });
            })
            .catch(err=>{
                console.log(err)
            })
        }
        // this.setState(
        //     {
        //         rollno:'',
        //         firstname:'',
        //         lastname:'',
        //         yearofstudy:'',
        //         dept:'',
        //         phonenumber:'',
        //         password:''
        //     },
        //     ()=>{
        //         this.handleChange({
        //             rollno:'',
        //             firstname:'',
        //             lastname:'',
        //             yearofstudy:'',
        //             dept:'',
        //             phonenumber:'',
        //             password:''
        //         })
        //     }
        // );
    }
    render(){
        if(this.state.submitted){
            return(
                <Redirect to="/"/>
            )
        }
        return(
            <div  className ="formContent">
                <div>
                    <div className="formContainer">
                        <PageTitle text="Student Registration"/>
                        <form method="POST" action="/student/register" id="registerForm" onSubmit = {this.handleSubmit.bind(this)}>
                            <Input 
                                value = {this.state.rollno}
                                hasLabel='false'
                                htmlFor='rollno'
                                name='rollno'
                                type='text'
                                placeholder='Roll No'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                value = {this.state.name}
                                hasLabel='false'
                                htmlFor='name'
                                name='name'
                                type='text'
                                placeholder='Name'
                                onChange = {this.handleChange.bind(this)}
                            />
                            
                            <Input 
                                value = {this.state.email}
                                hasLabel='false'
                                htmlFor='email'
                                name='email'
                                type='email'
                                placeholder='Email'
                                onChange = {this.handleChange.bind(this)}
                            />
                            {/* <Input 
                                // value = {this.state.name}
                                hasLabel = 'false'
                                htmlFor = 'yearofstudy'
                                name = 'yearofstudy'
                                type = 'text'
                                placeholder = 'Year of Study'
                                //onChange = {this.handleChange.bind(this)}
                            /> */}
                            <Select 
                                value = {this.state.yearofstudy}
                                name = 'yearofstudy'
                                hasLabel = 'false'
                                label = 'Year of Study'
                                htmlFor = 'yearofstudy'
                                options = 'First, Second, Third, Final'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                value = {this.state.dept}
                                hasLabel = 'false'
                                htmlFor = 'dept'
                                name = 'dept'
                                type = 'text'
                                placeholder = 'Department'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                value = {this.state.phonenumber}
                                hasLabel = 'false'
                                htmlFor = 'phonenumber'
                                name = 'phonenumber'
                                type = 'Number'
                                placeholder = 'Phone Number'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                value = {this.state.password}
                                hasLabel = 'false'
                                htmlFor = 'password'
                                name = 'password'
                                type = 'password'
                                placeholder = 'Password'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                value = {this.state.confirmpassword}
                                hasLabel='false'
                                htmlFor='confirmpassword'
                                name='confirmpassword'
                                type='password'
                                placeholder='Confirm Password'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                type='Submit'
                                htmlFor='register'
                                value='Submit'
                            />
                        </form>
                    </div>
                </div>
                <div className="extraLink">
                                Already have an account?  <Link to="/">Student Log In</Link>
                                
                        </div>
            </div>
        )
    }
}






export default Form;