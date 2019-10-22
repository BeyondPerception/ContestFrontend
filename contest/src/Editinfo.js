import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard } from 'mdbreact';
import Cookies from 'universal-cookie';
import { getCurrentUser, patchUser } from './DataFetcher';



class Editinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            school: "",
            key: "",
            id: "",
        };
        var cookie = new Cookies().get("key");
        this.onChange("key", cookie);
        getCurrentUser(cookie, (data) => {
            this.onChange("name", data.name);
            this.onChange("email", data.email);
            this.onChange("school", data.school);
            this.onChange("id", data.id);
        });
        this.state = {
            ["key"]: cookie
        }
    }

    onChange(key, val) {
        this.setState({
            [key]: val
        });
    }

    submitHandler = event => {
        event.preventDefault();
        const { key, id, name, password, confirmPassword, email, school } = this.state;
        if (name.trim() === "" || password.trim() === "" || confirmPassword.trim() === "" || email.trim() === "" || school.trim() === "") {
            alert("Please do not leave any fields blank");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match, please try again.");
            return;
        }

        patchUser(key, id, name, password, email, school);

        // this.props.history.push('/profile');
    }

    render() {
        const { name, password, confirmPassword, email, school } = this.state;

        return (
            <div>
                <MDBContainer >
                    <br /><br /><br />
                    <MDBRow center='true'>

                        <MDBCol md="6" >
                            <form
                                className="register_validation_form"
                                onSubmit={this.submitHandler}
                            >
                                <p className="h3 text-center mb-4">Edit your information here</p>
                                <a className="h5 text-center mb-4">If you would like to change your password, make sure to also confirm your password</a>
                                <br /><br />
                                <div className="grey-text">
                                    <MDBInput
                                        label="Your name"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        required
                                        value={name}
                                        onChange={(e) => this.onChange("name", e.target.value)}
                                    />
                                    <MDBInput
                                        label="School"
                                        icon="school"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        required
                                        value={school}
                                        onChange={(e) => this.onChange("school", e.target.value)}
                                    />
                                    <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        required
                                        value={email}
                                        onChange={(e) => this.onChange("email", e.target.value)}
                                    />
                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        required
                                        value={password}
                                        onChange={(e) => this.onChange("password", e.target.value)}
                                    />
                                    <MDBInput
                                        label="Confirm your password"
                                        icon="exclamation-triangle"
                                        group
                                        type="password"
                                        validate
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => this.onChange("confirmPassword", e.target.value)}
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="red" type="submit">Save Edits</MDBBtn>
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