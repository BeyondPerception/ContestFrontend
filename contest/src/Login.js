import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { authenticateUser } from './DataFetcher.js'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onClick() {
        const { email, password } = this.state;
        authenticateUser(
            email, password,
            ((data) => {
                new Cookies().set("key", data.key, { path: "/" });
            }),
        ).then((success) => {
            if (success) {
                this.props.history.push('/profile');
                window.location.reload(false);
            } else
                alert("Failed to login, username or password incorrect. Please try again.");
        });
    }

    setEmail(email) {
        this.setState({ email });
    }
    setPassword(password) {
        this.setState({ password });
    }

    render() {
        const { email, password } = this.state;
        return (
            <MDBContainer>
                <br /><br /><br />
                <MDBRow center>
                    <MDBCol md="6">
                        <MDBCard>
                            <div className="header pt-3 grey lighten-2">
                                <MDBRow className="d-flex justify-content-start">
                                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                        Log in
                                    </h3>
                                </MDBRow>
                            </div>
                            <MDBCardBody className="mx-4 mt-4">
                                <MDBInput
                                    label="Your email"
                                    group type="text"
                                    validate
                                    value={email}
                                    onChange={(e) => this.setEmail(e.target.value)}
                                />
                                <MDBInput
                                    label="Your password"
                                    group
                                    type="password"
                                    validate
                                    containerClass="mb-0"
                                    value={password}
                                    onChange={(e) => this.setPassword(e.target.value)}
                                />
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Forgot
                                    <a href="/Forgotpass" className="dark-grey-text font-weight-bold ml-1">
                                        Password?
                                    </a>
                                </p>
                                <div className="text-center mb-4 mt-5">
                                    <MDBBtn color="red" type="button" className="btn-block z-depth-2" onClick={this.onClick.bind(this)}>
                                        Log in
                                    </MDBBtn>
                                </div>
                                <p className="font-small grey-text d-flex justify-content-center">
                                    Don't have an account?
                                    <a href="/Register" className="dark-grey-text font-weight-bold ml-1">
                                        Sign up
                                    </a>
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        );
    }

}
export default withRouter(Login);