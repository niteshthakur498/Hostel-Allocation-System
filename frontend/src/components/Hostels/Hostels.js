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
                                <div className="hostel-rooms">345</div>
                                <div className="hostel-room-type">Singlets</div>
                            </div>
                            <div className="hostel-item">
                                <div className="hostel-name">Himgiri Boys Hostel</div>
                                <div className="hostel-year">Final Year</div>
                                <div className="hostel-rooms">345</div>
                                <div className="hostel-room-type">Singlets</div>
                            </div><div className="hostel-item">
                                <div className="hostel-name">Himgiri Boys Hostel</div>
                                <div className="hostel-year">Final Year</div>
                                <div className="hostel-rooms">345</div>
                                <div className="hhostel-room-type">Singlets</div>
                            </div>
                            <div className="hostel-item">
                                <div className="hostel-name">Himgiri Boys Hostel</div>
                                <div className="hostel-year">Final Year</div>
                                <div className="hostel-rooms">345</div>
                                <div className="hostel-room-type">Singlets</div>
                            </div>
                            <div className="hostel-item">
                                <div className="hostel-name">Himgiri Boys Hostel</div>
                                <div className="hostel-year">Final Year</div>
                                <div className="hostel-rooms">345</div>
                                <div className="hostel-room-type">Singlets</div>
                            </div>
                            <div className="hostel-item">
                                <div className="hostel-name">Himgiri Boys Hostel</div>
                                <div className="hostel-year">Final Year</div>
                                <div className="hostel-rooms">345</div>
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