import React, { Component } from "react";
import Home from "./Home.js";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';



class NavBar extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
    }
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        return(
            <Router>
            <MDBNavbar color="red" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text">Cypress Woods Computer Science Contest</strong>
                <icon>
                    
                </icon>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Written Scoreboard</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Programming Scoreboard</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem right>
                    <MDBNavLink to="#!">Profile</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                  <MDBNavLink to="#!">Login</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        );
    }
    
}
export default NavBar;