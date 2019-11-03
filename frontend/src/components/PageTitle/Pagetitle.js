import React, { Component } from 'react';
import './PageTitle.css';


let PageTitle = (props)=>{
    return(
        <h1 className="pageTitle">
            {props.text}
        </h1>
    );
}

export default PageTitle;