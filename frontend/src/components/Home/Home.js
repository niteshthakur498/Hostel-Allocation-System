import React from 'react';
import {Route,NavLink,Switch,withRouter} from 'react-router-dom'


//Assets
import './Home.css'
import nith from '../../static/images/nithw.png';

//Importing Components
import InfoCard from '../InfoCard/InfoCard';
import StudentLogIn from '../StudentLogIn/StudentLogIn';
import AdminLogIn from '../AdminLogIn/AdminLogIn';
import StudentRegister from '../Form/Form';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    handleLogIn(){
        const {history}=this.props;
        history.push('/student/profile');
    }
    handleAdminLogIn(){
        const {history}=this.props;
        history.push('/admin/profile');
    }
    render(){   
        // var ch ;
        // if(this.context.)
        return(
            <div className="homeContent">
                <div className="leftSide">
                    <div className="container">
                        <div className="home-content">
                            <div>
                                <img src={nith}/>
                            </div>
                            <div>
                                <div className="home-title">
                                    <p>Welcome to the</p>
                                    <p>Hostel Allocation Portal</p>
                                    <p>of NIT Hamirpur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    {/* <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div> */}
                    <div className="container">
                        <div className="home-FormTitle">
                            <NavLink  exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Student Log In</NavLink>
                            or
                            {/* <NavLink exact to="/student-register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Student Register</NavLink> 
                            or  */}
                            <NavLink exact to="/admin-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Admin Log In</NavLink>
                        </div>
                        <Switch>
                            <Route exact path="/" 
                                render={
                                    (routeProps)=>(<StudentLogIn {...routeProps} onLogIn={this.handleLogIn.bind(this)}/>)
                                }                            
                            ></Route>
                            <Route path="/admin-in" 
                                render={
                                    (routeProps)=>(<AdminLogIn {...routeProps} onAdminLogIn={this.handleAdminLogIn.bind(this)}/>)
                                }                            
                            ></Route>
                            {/* <Route path="/admin-in" component={AdminLogIn}></Route> */}
                            <Route path="/register" component={StudentRegister}></Route>
                        </Switch>                      
                        
                    </div>
                </div>
            </div>
        )
    }
       
}


export default withRouter(Home);