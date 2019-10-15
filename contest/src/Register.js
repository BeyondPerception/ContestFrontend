import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard } from 'mdbreact';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
       <MDBContainer>
           <br/><br/><br/>
           <MDBRow center='true'>
                <MDBCol md="6" middle>
                <form>
                    <p className="h5 text-center mb-4">Register your school here!</p>
                    <div className="grey-text">
                    <MDBInput
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Confirm your email"
                        icon="exclamation-triangle"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                    />
                    <MDBInput
                        label="Confirm your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                    />
                    </div>
                    <div className="text-center">
                    <MDBBtn color="red">Register</MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
       </MDBContainer>
        
        );
    }

}
export default Register;