import React from 'react';
import './AdminProfile.css';
import pp from '../../static/images/PP.png';


import PageTitle from '../PageTitle/Pagetitle';

class AdminProfile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // let adminData=localStorage.getItem("admin_token").identity;
        // console.log(adminData);
        
    return(
        <div className="adminProfile-Container">
            <div className="adminProfile-Content">
                <PageTitle text="admin Profile"/>
                <div className="profilePicture">
                    <img src={pp}/>
                </div>
                <div>
                    <div className="admin-header">
                        <div className="adminName">
                            
                        </div>
                        <div className="adminDesig">
                            Admin
                        </div>
                    </div>
                    <div className="admin-info">
                        <div className="infoGroup">
                            <span className="infoTitle">
                                Hostel: 
                            </span>
                            <span className="infoValue">
                                Himgiri Boys Hostel
                            </span>
                        </div>
                        {/* <div className="infoGroup">
                            <span className="infoTitle">
                                Phone Number: 
                            </span>
                            <span className="infoValue">
                                {this.props.phonenumber}
                            </span>
                        </div>
                        <div className="infoGroup">
                            <span className="infoTitle">
                                Email: 
                            </span>
                            <span className="infoValue">
                                {this.props.email}
                            </span>
                        </div>
                        <div className="infoGroup">
                            <span className="infoTitle">
                                Department: 
                            </span>
                            <span className="infoValue">
                                {this.props.dept}
                            </span>
                        </div>
                        <div className="infoGroup">
                            <span className="infoTitle">
                                Year: 
                            </span>
                            <span className="infoValue">
                                {this.props.yearofstudy}
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
    }
}


export default AdminProfile;