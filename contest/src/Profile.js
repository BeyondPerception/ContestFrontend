import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';



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
                    <h5>Test Page</h5>
                </MDBContainer>
            </div>
        );
    }

}
export default Profile;