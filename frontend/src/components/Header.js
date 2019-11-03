import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
      		<div className="container">
                <div className="header-content">
                  {/* <div className="logo"><Link to="/">PIZZA LO</Link></div>
                  <div className="navbar">
                    <ul>
                      <li>
                        <NavLink to='/' activeClassName="activeNav">Student</NavLink>
                      </li>
                      <li>
                        <NavLink to='/' activeClassName="activeNav" className="placeOrder">Place Order</NavLink>
                      </li>
                    </ul>
                  </div> */}
                  <div className="title"> 
                        Hostel Allocation System
                  </div>
                </div>
          </div>
      </header> 
    );
  }
}

export default Header;
