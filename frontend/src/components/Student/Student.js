import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './Student.css';
import nith from '../../static/images/nithw.png';


import StudentProfile from '../StudentProfile/StudentProfile';
import ChoiceFilling from '../ChoiceFilling/ChoiceFilling';
import Hostel from '../Hostels/Hostels';

class Student extends React.Component{
    logout(){
        let key ="student_token";
        localStorage.removeItem(key);
    }
    render(){
    if(!localStorage.getItem("student_token")&&localStorage.getItem("student_token").identity.role==='Student'){
        return(
            <Redirect to="/"/>
        )
    }
    return(
        <div className="student-body">
            <div className="leftSide">
                <div className="container">
                    <div className="menu-content">
                        <div>
                            <img src={nith}/>
                        </div>
                        <div className="menu-buttonlist"> 
                            {/* <div style={{marginBottom:"15px"}}><NavLink to="" activeClassName="FormTitle__Link--Active"  className="menu-button" >Dashboard</NavLink></div>
                            <div><NavLink to="" activeClassName="FormTitle__Link--Active"  className="menu-button" >Log in as Admin</NavLink></div> */}
                            <NavLink to="/student/profile" activeClassName="menu-button--Active"  className="menu-button" >Profile</NavLink>
                            <NavLink to="/student/hostel" activeClassName="menu-button--Active"  className="menu-button" >Hostels</NavLink>
                            <NavLink to="/student/choice-filling" activeClassName="menu-button--Active"  className="menu-button" >Choice Filling</NavLink>
                            <NavLink to="/student/edit-profile" activeClassName="menu-button--Active"  className="menu-button" >Edit Profile</NavLink>
                            <NavLink to="/" className="menu-button" onClick={this.logout.bind(this)}>Log out</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <div className="container">
                    <Switch>
                        <Route path="/student/profile" render={
                            (routeProps)=> (<StudentProfile {...routeProps} {...localStorage.getItem("student_token").identity}/>)
                        }
                        ></Route>
                        <Route path = "/student/choice-filling" component={ChoiceFilling}></Route>
                        <Route path = "/student/hostel" component={Hostel}></Route>
                        {/* <Route path = "/student/edit-profile" component={Edit-Profile}></Route> */}
                    </Switch>
                </div>
            </div>
        </div>
    );
}
}


export default Student;