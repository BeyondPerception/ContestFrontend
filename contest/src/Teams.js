import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBBtn } from 'mdbreact';



class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
                <MDBContainer className="text-center mt-5">
                    <h1>Teams</h1>
                    <MDBRow>
                        <h2><b>Edit Students</b></h2>
                    </MDBRow>
                    <br/>
                    <MDBRow>
                        <MDBCol>
                            <label>Select Division</label>
                            <select className="browser-default custom-select">
                                <option value="0">Choose...</option>
                                <option value="N">Novice</option>
                                <option value="A">Advanced</option>
                            </select>
                        </MDBCol >

                        <MDBCol>
                        <label>Enter First Name</label>
                        <MDBInputGroup></MDBInputGroup>
                        </MDBCol>
                    
                        <MDBCol>
                        <label>Enter Last Name</label>
                        <MDBInputGroup></MDBInputGroup>
                        </MDBCol>

                       <MDBBtn outline color='danger'> Remove Student</MDBBtn>

                    </MDBRow>
                    <br/>
                    <MDBRow>
                        <MDBBtn color='red'>Add Student</MDBBtn>
                    </MDBRow>
                    <br/><br/>
                    <MDBRow>
                    <h2><b>Edit Teams</b></h2>
                    </MDBRow>
                    <br/>
                    <MDBRow>
                        <MDBCol style={{width:"10%"}}>
                            <label>Select Division</label>
                            <select className="browser-default custom-select">
                                <option value="0">Choose...</option>
                                <option value="N">Novice</option>
                                <option value="A">Advanced</option>
                            </select>
                        </MDBCol >

                        <MDBCol>
                        <label>Select Team Members</label>
                            <select className="browser-default custom-select">
                                
                            </select>
                            <br/>
                            <select className="browser-default custom-select">
                                
                            </select>
                            <select className="browser-default custom-select">
                                
                            </select>

                        </MDBCol>

                        <MDBBtn outline color='danger'>X</MDBBtn>

                    </MDBRow>

                    <br/>
                    <MDBRow>
                        <MDBBtn color='red'>Add Team</MDBBtn>
                    </MDBRow>
                    <br/><br/>
                    <MDBRow>
                        <h4><b>Total Cost: </b></h4>
                    </MDBRow>
                    <br/><br/>
                    <MDBRow>
                        <MDBBtn color='red'>Save</MDBBtn>
                    </MDBRow>


                        
                   
                </MDBContainer>
        );
    }

}
export default Teams;