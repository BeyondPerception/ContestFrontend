import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./Home";
import WrittenScoreboard from "./WrittenScoreboard.js";
import ProgrammingScoreboard from "./ProgrammingScoreboard.js";
import Profile from "./Profile.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar color="red" dark expand="md">
              <MDBNavbarBrand href="/">
                <strong>CyWoods Contest</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/written">Written Scoreboard</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/programming">Programming Scoreboard</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/profile">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
          {/* Add new pages here*/}
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/programming">
              <ProgrammingScoreboard />
            </Route>
            <Route path="/written">
              <WrittenScoreboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default NavBar;