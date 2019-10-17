import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBTable} from 'mdbreact';

const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];

class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <MDBContainer>
                    <br/><br/><br/>
                    <h1>Profile</h1>
                    <br/>
                    <MDBRow >
                        <MDBCol >
                            <h3>School Name: </h3>
                            <br/><br/>
                            <h4>Coaches Name: </h4>
                        </MDBCol>
                        
                    </MDBRow>
                    
                </MDBContainer>
            </div>
        );
    }

}
export default Profile;