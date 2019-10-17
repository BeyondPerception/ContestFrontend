import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';



class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <MDBContainer className="text-center mt-5">
                    <h2>Teams</h2>
                    <h5>Test Page</h5>
                </MDBContainer>
            </div>
        );
    }

}
export default Teams;