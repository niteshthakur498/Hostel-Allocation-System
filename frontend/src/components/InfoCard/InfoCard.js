import React from 'react';
import {Link} from 'react-router-dom';
import './InfoCard.css';
import nith from '../../static/images/nith.png';

let InfoCard = (props) => {
    return(
        <div className="infoCard-body">
            <div className="container">
                <div className="infoCard-content">
                    <div>
                        <div className="infocard-title">
                            <p>Welcome to the</p>
                            <p>Hostel Allocation Portal</p>
                            <p>of NIT Hamirpur</p>
                        </div>
                    </div>
                    <div>
                        <img src={nith}/>
                    </div>
                    <div className="infocard-buttonlist"> 
                        <div className="infoCard-button" style={{marginBottom:"15px"}}><Link to="">Log in as Student</Link></div>
                        <div className="infoCard-button"><Link to="">Log in as Admin</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default InfoCard;