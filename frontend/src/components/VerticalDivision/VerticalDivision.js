import React from 'react'
import {Link} from 'react-router-dom';
import './VerticalDivision.css';
import nith from '../../static/images/nithw.png';


import Form from "../Form/Form";
import Dashboard from "../Dashboard/Dashboard";

let VerticalDivision = () =>{
    return(
        <div className="verticalDivision-body">
            <div className="leftSide">
                <div className="container">
                    <div className="menu-content">
                        <div>
                            <img src={nith}/>
                        </div>
                        <div className="menu-buttonlist"> 
                            <div className="menu-button" style={{marginBottom:"15px"}}><Link to="">Dashboard</Link></div>
                            <div className="menu-button"><Link to="">Log in as Admin</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <Form />
            </div>
        </div>
    );   
}


export default VerticalDivision;