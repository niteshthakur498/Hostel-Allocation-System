import React from 'react';
import './Hostels.css'


import PageTitle from '../PageTitle/Pagetitle';

class Hostel  extends React.Component{
    render(){
        return(
            <div className="hostel-container">
                <div>
                    <div className="hostel-content">
                        <PageTitle text="Hostels"/>
                        <div className="hostel-list">
                            <div className="hostel-item">
                                <div className="hostel-name">Himgiri Boys Hostel</div>
                                <div className="hostel-year">Final Year</div>
                                <br></br>
                                <div className="hostel-year">Rooms Available</div>
                                <div className="hostel-rooms">101 - 114</div>
                                <div className="hostel-rooms">201 - 214</div>
                                <br></br>
                                <div className="hostel-room-type">Singlets</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Hostel;