import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBTable, MDBBtn} from 'mdbreact';
import { getCurrentUser } from './DataFetcher.js'
import Cookies from 'universal-cookie';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            school: "",
            name: "",
            email: "",
        };
        this.storeData = this.storeData.bind(this);
    }
    onClick()
    {
        getCurrentUser(new Cookies().get("key"), (data) => {
            console.log(data)
        })
    }

    storeData(data, key) {
        this.setState({
            [key]: data
        });
    }

    render() {
        const { school, name, email } = this.props
        return (
            <div>
                <MDBContainer>
                    <br /><br /><br />
                    <h1>Profile</h1>
                    <br /><br />
                    <MDBRow >
                        <MDBCol >
                            <h4>School Name: {school}</h4>
                            <h4>Coaches Name: {name}</h4>
                            <h4>Email: {email}</h4>
                            <br />
                            <MDBBtn color='red' href='/Editinfo'>Edit Information</MDBBtn>
                            <MDBBtn color="red" type="button" className="btn-block z-depth-2" onClick={this.onClick.bind(this)}>
                                Request
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>

                    </MDBRow>

                </MDBContainer>
            </div>
        );
    }

}
export default Profile;