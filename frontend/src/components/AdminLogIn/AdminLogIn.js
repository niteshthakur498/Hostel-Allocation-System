import React, { Component } from 'react'

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
      handleSubmit(e){
          e.preventDefault();
          console.log(this.state);
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