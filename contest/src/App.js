import React, { Component } from 'react';
import NavBar from './NavBar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
