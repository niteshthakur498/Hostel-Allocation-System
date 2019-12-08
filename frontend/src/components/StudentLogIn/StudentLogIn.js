import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import './StudentLogIn.css';
import Input from'../Input/Input';
import PageTitle from '../PageTitle/Pagetitle';


class StudentLogIn extends Component{
    constructor(props){
        super(props);
        this.state={
            rollno:'',
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

        if(this.state.rollno === ''){
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
            console.log(this.state);
            let data = {
                rollno:this.state.rollno,
                password:this.state.password
            }
            fetch('http://127.0.0.1:5000/student/login',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8'
                  }
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                if(result.error){
                    alert("Invalid RollNo or Password")
                }
                else
                {
                    console.log(jwt.verify(result.token,'secret'));
                    localStorage.setItem('student_token',result.token);
                    // this.setState({
                    //     isLogIn:true
                    // })
                    // const {history}=this.props;
                    // history.push('/student/profile');
                    this.props.onLogIn();
                }
                
            })
            .catch(err=>{
                console.log(err);
            })
          }

      }
    render(){
        // if(this.state.isLogIn){
        //     return(
        //         <Redirect to="/student/profile"/>
        //     );
        // }
        return(
            
            <div className="studentLogIn-container">
                <div>
                    <div className="studentLogIn-content">
                    <PageTitle text="Student Log In"/>
                        <form  onSubmit = {this.handleSubmit.bind(this)}>
                            <Input 
                                alue = {this.state.rollno}
                                hasLabel = 'true'
                                label='Student Roll No'
                                htmlFor = 'rollno'
                                name = 'rollno'
                                type = 'text'
                                placeholder = 'Roll No'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                value = {this.state.password}
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
                <div className="extraLink">
                    Don't have an account? <Link to="/register">Student Register</Link>
                 </div>
            </div>
        );
    }
}



export default withRouter(StudentLogIn);