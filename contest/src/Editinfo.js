import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard } from 'mdbreact';



class Editinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <MDBContainer >
                    
                <br/><br/><br/>
                <MDBRow center='true'>
                
                        <MDBCol md="6" >
                            <form>
                            <p className="h3 text-center mb-4">Edit your information here</p>
                            <a className="h5 text-center mb-4">Please only enter in data you want to change</a>
                            <br/><br/>
                            <a className="h5 text-center mb-4">If you would like to change your password, make sure to also confirm your password</a>
                            <br/><br/>
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
                                label="Phone Number"
                                icon="phone"
                                group
                                type="text"
                                validate
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
                                icon="exclamation-triangle"
                                group
                                type="password"
                                validate
                            />
                            </div>
                            <div className="text-center">
                            <MDBBtn color="red" href="/Profile">Finish Editing</MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }

}
export default Editinfo;