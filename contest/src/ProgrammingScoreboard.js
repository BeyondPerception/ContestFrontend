import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';



class ProgrammingScoreboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <MDBContainer className="text-center mt-5">
                    <h2>Programming Scoreboard</h2>
                    <h5>This page will be available on the day of the contest.</h5>
                </MDBContainer>
            </div>
        );
    }

}
export default ProgrammingScoreboard;