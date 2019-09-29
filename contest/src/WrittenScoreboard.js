import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';

class WrittenScoreboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
    
        return (
            <div>
                <MDBContainer className="text-center mt-5">
                    <h2>Written Scoreboard</h2>
                    <h5>Test Page</h5>
                </MDBContainer>
            </div>
        );
    }
}
export default WrittenScoreboard;