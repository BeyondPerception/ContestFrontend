import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./Home";
import WrittenScoreboard from "./WrittenScoreboard.js";
import ProgrammingScoreboard from "./ProgrammingScoreboard.js";
import Register from "./Register.js";
import Formpage from "./Formpage.js";
import Login from "./Login.js";
import Editinfo from "./Editinfo.js";
import Profile from "./Profile.js";
import Frgtpass from "./Forgotpass.js";
import Teams from "./Teams.js";
import { isLogicalExpression } from '@babel/types';

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
                  <MDBNavItem>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  {/* <MDBNavItem>
                    <MDBNavLink to="/written">Written Scoreboard</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/programming">Programming Scoreboard</MDBNavLink>
                  </MDBNavItem> */}
                  <MDBNavItem>
                    <MDBNavLink to="/teams">Teams</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/profile">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/formpage">Test</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/register">Register</MDBNavLink>
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
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Editinfo">
              <Editinfo />
            </Route>
            <Route path="/Forgotpass">
              <Frgtpass />
            </Route>
            <Route path="/Teams">
              <Teams />
            </Route>
            <Route path="/Formpage">
              <Formpage />
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