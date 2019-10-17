import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';



class Forgotpass extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <MDBContainer className="text-center mt-5">
                    <h2>Forgot Password</h2>
                    <br/>
                    <h4>If you forgot your password please email Mr. Armstrong at stacey.armstrong@cfisd.net</h4>
                </MDBContainer>
            </div>
        );
    }

}
export default Forgotpass;