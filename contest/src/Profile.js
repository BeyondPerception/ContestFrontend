import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <MDBContainer className="text-center mt-5">
                    <h2>Profile</h2>
                    <MDBRow>
                        <MDBCol >
                        <h1>Hi</h1>
                        <br/>
                        <h2>School Name: </h2>
                        <br/>
                        <h3>Hi</h3>
                        <br/>
                        <h4>Hi</h4>
                        <br/>
                        <h5>Hi</h5>
                        <br/>
                        <h6>Hi</h6>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }

}
export default Profile;