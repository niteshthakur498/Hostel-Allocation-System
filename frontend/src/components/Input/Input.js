import React, { Component } from 'react';

import './Input.css';

import Label from '../Label/Label';


class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      value : props.value
    }
  }
  onChange(e){
    this.setState({name: e.target.name, value: e.target.value},() => {
      this.props.onChange(this.state.name,this.state.value);
      this.setState({name: '', value: ''});
    });
    
  }

  render() {
    return (
     <fieldset>
         <Label 
            hasLabel={this.props.hasLabel}
            htmlFor={this.props.htmlFor}
            label={this.props.label}
         />
         <input
            id={this.props.htmlFor}
            value={this.props.value}
            max={this.props.max || null}
            min={this.props.min || null}
            name={this.props.name || null}
            placeholder={this.props.placeholder || null}
            required={this.props.required || null}
            step={this.props.required || null}
            type={this.props.type || 'text'}
            onChange={this.onChange.bind(this)}
         />
     </fieldset>
    );
  }
}

export default Input;