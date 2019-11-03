import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Input from './Input';
import Select from './Select';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      name : '',
      nameError: '',
      email: '',
      emailError: '',
      address: '',
      addressError: '',
      city: '',
      cityError: '',
      phone: '',
      phoneError: '',
      pizzaType: '',
      typeError: '',
      pizzaSize: '',
      sizeError: '',
      pizzaDough: '',
      doughError: '',
      toOrders:false
    }
  }
  handleChange(nam,val){
    this.setState({
      [nam]:val
    })
  }
  prev = this.state;
  validate = () =>{
    let isError = false;
    let errors ={
      nameError: '',
      emailError: '',
      addressError: '',
      cityError: '',
      phoneError: '',
      typeError: '',
      sizeError: '',
      doughError: ''
    }

    if(this.state.name === ''){
      errors.nameError  = 'Please enter a valid name';
      isError = true;
    }
    if(!this.state.email.includes('@')){
      errors.emailError  = 'Please enter a valid Email';
      isError = true;
    }
    if(this.state.address === ''){
      errors.addressError  = 'Please enter a valid address';
      isError = true;
    }
    if(this.state.city === ''){
      errors.cityError  = 'Please enter a valid city';
      isError = true;
    }
    if(this.state.phone.length !== 10){
      errors.phoneError  = 'Please enter a valid phone number';
      isError = true;
    }
    if(this.state.pizzaType === ''){
      errors.typeError  = 'Please enter a valid Type';
      isError = true;
    }
    if(this.state.pizzaSize === ''){
      errors.sizeError  = 'Please enter a valid Size';
      isError = true;
    }
    if(this.state.pizzaDough === ''){
      errors.doughError  = 'Please enter a valid Dough';
      isError = true;
    }
    this.setState({
      ...this.state ,
      ...errors
    }); 
    return isError;
  }
  handleSubmit(e){
    e.preventDefault();
    const err  = this.validate();
    let data  = {
      name : this.state.name,
      email : this.state.email,
      address : this.state.address,
      city : this.state.city,
      phone : this.state.phone,
      pizzaType : this.state.pizzaType,
      pizzaSize : this.state.pizzaSize,
      pizzaDough : this.state.pizzaDough
    }
    console.log('Data',data)
    if(!err){
      fetch('http://127.0.0.1:5000/api/orders',{
        method : 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(res => res.json())
      .then(response => {
        console.log('Success:', response);
        alert("Order Placed")
        this.setState ({
          name : '',
          nameError: '',
          email: '',
          emailError: '',
          address: '',
          addressError: '',
          city: '',
          cityError: '',
          phone: '',
          phoneError: '',
          typeError: '',
          sizeError: '',
          doughError: '',
          toOrders:true
        },() => {
          this.handleChange({
            name:'',
            email:'',
            address:'',
            city:'',
            phone:'',
            pizzaType:'',
            pizzaSize:'',
            pizzaDough:''
          });
        })
        
      })
      .catch(error => console.error('Error:', error));
    }
  }

  render() {
    if(this.state.toOrders === true){
     return <Redirect to= '/orders'/>
    }
    return (
      <div className ="formContent">
        <div className = 'container'>
            <div className = "formContainer">
                <form  id = 'orderForm' method = 'POST' action = '/addOrder' onSubmit = {this.handleSubmit.bind(this)}>
                    <Input 
                        value = {this.state.name}
                        hasLabel = 'false'
                        htmlFor = 'name'
                        name = 'name'
                        type = 'text'
                        placeholder = 'Name'
                        onChange = {this.handleChange.bind(this)}
                    />
                    <div className = "error">{this.state.nameError}</div>
                    <Input 
                        value = {this.state.email}
                        hasLabel = 'false'
                        label = 'Email: '
                        htmlFor = 'email'
                        name = 'email'
                        type = 'email'
                        placeholder = 'Email'
                        onChange = {this.handleChange.bind(this)}
                    />
                    <div className = "error">{this.state.emailError}</div>
                    <Input 
                        value = {this.state.address}
                        hasLabel = 'false'
                        label = 'Address: '
                        htmlFor = 'address'
                        name = 'address'
                        type = 'text'
                        placeholder = 'Address'
                        onChange = {this.handleChange.bind(this)}
                    />
                    <div className = "error">{this.state.addressError}</div>
                    <Input 
                        value = {this.state.city}
                        hasLabel = 'false'
                        label = 'City: '
                        htmlFor = 'city'
                        name = 'city'
                        type = 'text'
                        placeholder = 'City'
                        onChange = {this.handleChange.bind(this)}
                    />
                    <div className = "error">{this.state.cityError}</div>
                    <Input 
                        value = {this.state.phone}
                        hasLabel = 'false'
                        label = 'Phone Number: '
                        htmlFor = 'phone'
                        name = 'phone'
                        type = 'number'
                        placeholder = 'Phone Number'
                        onChange = {this.handleChange.bind(this)}
                    />
                    <div className = "error">{this.state.phoneError}</div>

                    <div className = 'pizzaChoice'>
                        <Select 
                          value = {this.state.pizzaType}
                          hasLabel = 'true'
                          name = 'pizzaType'
                          label = 'Pizza Type'
                          htmlFor = 'pizzaType'
                          options = 'Corn, Margreeta, Capsicum'
                          onChange = {this.handleChange.bind(this)}
                        />
                        <div className = "error">{this.state.typeError}</div>
                        <Select 
                          value = {this.state.pizzaSize}
                          name = 'pizzaSize'
                          hasLabel = 'true'
                          label = 'Size'
                          htmlFor = 'pizzaSize'
                          options = 'Regular, Small, Large'
                          onChange = {this.handleChange.bind(this)}
                        />
                        <div className = "error">{this.state.sizeError}</div>
                        <Select 
                          value = {this.state.pizzaDough}
                          name = 'pizzaDough'
                          hasLabel = 'true'
                          label = 'Dough'
                          htmlFor = 'pizzaDough'
                          options = 'Regular, Small, Large'
                          onChange = {this.handleChange.bind(this)}
                        />
                        <div className = "error">{this.state.doughError}</div>
                    </div>
                    <Input 
                      type ='Submit'
                      htmlFor = 'orderSubmit'
                      value = 'Submit'
                    />
                </form>
            </div>
         </div> 
      </div>
    );
  }
}

export default Form;