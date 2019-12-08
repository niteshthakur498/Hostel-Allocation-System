import React, { Component } from 'react';
import jwt from 'jsonwebtoken';

import './AdminLogIn.css';
import Input from'../Input/Input';
import PageTitle from '../PageTitle/Pagetitle';

class AdminLogIn extends Component{
    constructor(){
        super();
        this.state={
            adminid:'',
            password:''
        }
    }
    handleChange(nam,val){
        this.setState({
          [nam]:val
        })
      }
      validate(){
        let isError= false;

        if(this.state.adminid === ''){
            //errors.nameError  = 'Please enter a valid name';
            isError = true;
          }
          if(this.state.password === ''){
            //errors.nameError  = 'Please enter a valid name';
            isError = true;
          }

          return isError;
    }
      handleSubmit(e){
        e.preventDefault();
        let err = this.validate();
        if(err){
            alert("Enter All Fields Correctly");
        }
        else{
            let data = {
                adminID:this.state.adminid,
                password:this.state.password
            }
            fetch('http://127.0.0.1:5000/admin/login',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8'
                  }
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.error){
                    alert("Invalid ID or Password")
                    return;
                }
                console.log(jwt.verify(result.token,'secret'));
                localStorage.setItem('admin_token',result.token);
                // this.setState({
                //     isLogIn:true
                // })
                // const {history}=this.props;
                // history.push('/student/profile');
                this.props.onAdminLogIn();
                
            })
            .catch(err=>{
                console.log(err);
            })
        }
        //   if(this.state.adminid==="admin" && this.state.password==="admin"){
        //       console.log(this.state);
        //       this.props.onAdminLogIn();
        //   }
      }
    render(){
        return(
            <div className="adminLogIn-container">
                <div>
                    <div className="adminLogIn-content">
                        <PageTitle text="Admin Log In"/>
                        <form   onSubmit = {this.handleSubmit.bind(this)}>
                            <Input 
                                value = {this.state.adminid}
                                hasLabel = 'true'
                                label='Admin Id'
                                htmlFor = 'adminid'
                                name = 'adminid'
                                type = 'text'
                                placeholder = 'Admin Id'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                // value = {this.state.name}
                                hasLabel = 'true'
                                label='Password'
                                htmlFor = 'password'
                                name = 'password'
                                type = 'password'
                                placeholder = 'Password'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                type ='Submit'
                                htmlFor = 'login'
                                value = 'Log In'
                            />
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}



export default AdminLogIn;