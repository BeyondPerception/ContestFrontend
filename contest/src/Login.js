import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard } from 'mdbreact';



class Login extends Component {
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
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                    <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                    />
                    </div>
                    <div className="text-center">
                    <MDBBtn color='red'>Login</MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
       </MDBContainer>
        
        );
    }

}
export default Login;