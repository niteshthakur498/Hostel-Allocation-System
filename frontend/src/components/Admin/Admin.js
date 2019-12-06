import React from 'react';
import jwt from 'jsonwebtoken';
import {Switch,Route,Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './Admin.css';
import nith from '../../static/images/nithw.png';


import AdminProfile from '../AdminProfile/AdminProfile';
import ApplicationsRecieved from '../ApplicationsRecieved/ApplicationsRecieved';
import AllocatedRooms from '../RoomsAllocated/RoomsAllocated'

class Admin extends React.Component{
    constructor(){
        super();
    }
        logout(){
            let key ="admin_token";
            localStorage.removeItem(key);
        }
    render(){
        if(!localStorage.getItem("admin_token")){
            return(
                <Redirect to="/"/>
            )
        }
        return(
            <div className="admin-body">
            <div className="leftSide">
                <div className="container">
                    <div className="menu-content">
                        <div>
                            <img src={nith}/>
                        </div>
                        <div className="menu-buttonlist"> 
                            {/* <div style={{marginBottom:"15px"}}><NavLink to="" activeClassName="FormTitle__Link--Active"  className="menu-button" >Dashboard</NavLink></div>
                            <div><NavLink to="" activeClassName="FormTitle__Link--Active"  className="menu-button" >Log in as Admin</NavLink></div> */}
                            {/* <NavLink to="/student/profile" activeClassName="menu-button--Active"  className="menu-button" >Profile</NavLink>
                            <NavLink to="/student/hostel" activeClassName="menu-button--Active"  className="menu-button" >Hostels</NavLink>
                            <NavLink to="/student/choice-filling" activeClassName="menu-button--Active"  className="menu-button" >Choice Filling</NavLink>
                            <NavLink to="/student/edit-profile" activeClassName="menu-button--Active"  className="menu-button" >Edit Profile</NavLink>
                            <NavLink to="/" className="menu-button" onClick={this.logout.bind(this)}>Log out</NavLink> */}
                            <NavLink to="/admin/profile" activeClassName="menu-button--Active"  className="menu-button" >Profile</NavLink>
                            <NavLink to="/admin/applications" activeClassName="menu-button--Active"  className="menu-button" >Applications Recieved</NavLink>
                            <NavLink to="/admin/allocatedRooms" activeClassName="menu-button--Active"  className="menu-button" >Allocated Rooms</NavLink>
                            <NavLink to="/" className="menu-button" onClick={this.logout.bind(this)}>Log out</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSide"> 
                <div className="container">
                    <Switch>
                        <Route path="/admin/profile" render={
                            (routeProps)=> (<AdminProfile {...routeProps} />)
                        }
                        ></Route>
                        <Route path = "/admin/applications" component={ApplicationsRecieved}></Route>
                        <Route path = "/admin/allocatedRooms" component={AllocatedRooms}></Route>
                        {/* <Route path = "/student/edit-profile" component={Edit-Profile}></Route> */}
                    </Switch>
                </div>
            </div>
        </div>
        );
    }
}


export default Admin;