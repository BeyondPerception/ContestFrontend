import React, { Component } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBInput,
    MDBCard
} from "mdbreact";
import { withRouter } from "react-router-dom";
import { createUser, authenticateUser } from "./DataFetcher.js";
import Cookies from "universal-cookie";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            confirmPassword: "",
            email: "",
            confirmEmail: "",
            school: ""
        };
    }

    onChange(key, val) {
        this.setState({
            [key]: val
        });
    }

    submitHandler = event => {
        event.preventDefault();
        const {
            name,
            password,
            confirmPassword,
            email,
            confirmEmail,
            school
        } = this.state;
        if (
            name === "" ||
            password === "" ||
            confirmPassword === "" ||
            email === "" ||
            confirmEmail === "" ||
            school === ""
        ) {
            alert("Please do not leave any fields blank");
            return;
        }

        submitHandler = event => {
            event.preventDefault();
            const { name, password, confirmPassword, email, confirmEmail, school } = this.state;
            if (name.trim() === "" || password.trim() === "" || confirmPassword.trim() === "" || email.trim() === "" || confirmEmail.trim() === "" || school.trim() === "") {
                alert("Please do not leave any fields blank");
                return;
            }
            if (password !== confirmPassword) {
                alert("Passwords do not match, please try again.");
                return;
            }
            if (email !== confirmEmail) {
                alert("Emails do not match, please try again.");
                return;
            }
            createUser(name, password, email, school, (data) => {
            });
            authenticateUser(email, password, (data) => {
                new Cookies().set("key", data.key, { path: "/" });
            });

            this.props.history.push('/profile');
        }
        if (email !== confirmEmail) {
            alert("Emails do not match, please try again.");
            return;
        }
        createUser(name, password, email, school, data => { });
        authenticateUser(email, password, data => {
            new Cookies().set("key", data.key, { path: "/" });
        });

        this.props.history.push("/profile");
    };

    render() {
        const {
            name,
            password,
            confirmPassword,
            email,
            confirmEmail,
            school
        } = this.state;

        return (
            <MDBContainer>
                <br />
                <br />
                <br />
                <MDBRow center="true">
                    <MDBCol md="6" middle>
                        <form
                            className="register_validation_form"
                            onSubmit={this.submitHandler}
                        >
                            <p className="h2 text-center mb-4">Register your school here!</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    required
                                    value={name}
                                    onChange={e => this.onChange("name", e.target.value)}
                                />
                                <MDBInput
                                    label="School"
                                    icon="school"
                                    group
                                    type="text"
                                    validate
                                    required
                                    value={school}
                                    onChange={e => this.onChange("school", e.target.value)}
                                />
                                <MDBInput
                                    label="Enter your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    required
                                    value={email}
                                    onChange={e => this.onChange("email", e.target.value)}
                                />
                                <MDBInput
                                    label="Confirm your email"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    required
                                    value={confirmEmail}
                                    onChange={e => this.onChange("confirmEmail", e.target.value)}
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    required
                                    value={password}
                                    onChange={e => this.onChange("password", e.target.value)}
                                />
                                <MDBInput
                                    label="Confirm your password"
                                    icon="exclamation-triangle"
                                    group
                                    type="password"
                                    validate
                                    required
                                    value={confirmPassword}
                                    onChange={e =>
                                        this.onChange("confirmPassword", e.target.value)
                                    }
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="red" type="submit">
                                    Register
                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default withRouter(Register);
