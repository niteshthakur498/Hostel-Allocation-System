import React, { Component } from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import './App.css';


//Routes
import Home from './components/Home/Home';
import Student from './components/Student/Student';
import StudentLogIn from './components/StudentLogIn/StudentLogIn';
import AdminLogIn from './components/AdminLogIn/AdminLogIn';
import Form from './components/Form/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/admin-in" component={Home}></Route>
          <Route exact path="/register" component={Home}></Route>
          <Route exact path='/student/profile' component={Student}></Route>
          <Route exact path='/student/hostel' component={Student}></Route>
          <Route exact path='/student/choice-filling' component={Student}></Route>
          <Route exact path='/student/edit-profile' component={Student}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
