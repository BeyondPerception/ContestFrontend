import React, { Component } from 'react';
import {MDBContainer} from 'mdbreact';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <MDBContainer className="text-center mt-5">
                    <h2>Home</h2>
                    <h5>Test Page</h5>
                </MDBContainer>
            </div>
        );
    }

}
export default Home;