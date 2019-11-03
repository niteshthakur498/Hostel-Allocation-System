import React, { Component } from 'react';

import Label from './Label';

class Select extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : props.name,
            value : props.value
        }
    }
    onChange(e){
        this.setState({name:this.props.name, value: e.target.value},() => {
            this.props.onChange(this.state.name, this.state.value);
            
        });
    }


    render(){
        const selectOptions = this.props.options.split(', ');

        const selectedOptionsList = selectOptions.map((opt) => {
            return <option key = {opt} value = {opt} >{opt}</option>
        })
        return(
            <fieldset>
                <Label 
                    hasLabel = {this.props.hasLabel}
                    htmlFor = {this.props.htmlFor}
                    label = {this.props.label}
                />

                <select onChange={this.onChange.bind(this)}>
                    defaultValue = ''
                    id = {this.props.htmlFor}
                    name = {this.props.name}
                    required = {this.props.required || null}

                    <option value=''>Select one option</option>
                    {selectedOptionsList}
                </select>
            </fieldset>
        )
    }
} 



export default Select;