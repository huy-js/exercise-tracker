import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/excercises-list.component";
import EditExcercise from "./components/edit-excercise.component";
import CreateExcercise from "./components/create-excercise.component";
import CreateUser from './components/create-user.component';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <br/>
        <Route path='/' exact component={ ExercisesList } />
        <Route path='/edit/:id' component={ EditExcercise }/>
        <Route path='/create' component={ CreateExcercise } />
        <Route path='/user' component={ CreateUser }/>
        <div className="Container">
          Hello World!
        </div>
      </Router>
    );
  }
}

export default App;
