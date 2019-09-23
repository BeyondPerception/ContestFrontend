import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js';
import Home from './Home.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null 
    };
  }
  
  render() {
    const {user} = this.state;
    return (
      <div>
        <NavBar/>
      </div>
    );
  }
}

export default App;
