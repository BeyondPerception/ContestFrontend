import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBTable, MDBBtn} from 'mdbreact';
import { getCurrentUser } from './DataFetcher.js'
import Cookies from 'universal-cookie';


class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    onClick()
    {
        getCurrentUser(new Cookies().get("key"), (data) => {
            console.log(data)
        })
    }
    render() {
        return (
            <div>
                <MDBContainer>
                    <br/><br/><br/>
                    <h1>Profile</h1>
                    <br/><br/>
                    <MDBRow >
                        <MDBCol >
                            <h4>School Name: </h4>
                            <h4>Coaches Name: </h4>
                            <h4>Phone Number: </h4>
                            <h4>Email: </h4>
                            <br/>
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