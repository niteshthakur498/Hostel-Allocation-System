import React from 'react'
import './ChoiceFilling.css';

import Input from '../Input/Input';
import Select from '../Select/Select';
import PageTitle from '../PageTitle/Pagetitle';

class ChoiceFilling extends React.Component{
    constructor(){
        super();
        this.state={
            rollno:'',
            name:'',
            email:'',
            hostel:'',
            rooms:''
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
      handleSubmit(e){
        e.preventDefault();
        let er = this.validate();
        if(er){
            alert("Enter All Fields Correctly")
        }
        else{
            console.log(this.state);
        }
      }
    render(){
        return(
            <div className="choiceFilling-Container">
                <div>
                    <div className="choiceFilling-Content">
                        <PageTitle text="Fill your Choice"/>
                        <form onSubmit = {this.handleSubmit.bind(this)}>
                            <Input 
                                value = {this.state.rollno}
                                hasLabel='false'
                                htmlFor='rollno'
                                name='rollno'
                                type='text'
                                placeholder='Roll No'
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Select 
                                value = {this.state.hostel}
                                hasLabel='false'
                                label="Hostel"
                                htmlFor='hostel'
                                name='hostel'
                                options="Himgiri Boys Hostel, Himadri Boys Hostel, Neelkanth Boys Hostel"
                                onChange = {this.handleChange.bind(this)}
                            />
                            <Input 
                                value = {this.state.rooms}
                                hasLabel='false'
                                htmlFor='rooms'
                                name='rooms'
                                type='text'
                                placeholder='Room Choices'
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