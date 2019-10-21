import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup } from 'mdbreact';



class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <MDBContainer className="text-center mt-5">
                    <h1>Teams</h1>
                    <MDBRow>
                        <h2><b>Edit Students</b></h2>
                    </MDBRow>
                    <br/>
                    
                    <MDBCol style={{width:'20%'}}>
                        <label>Select Division</label>
                        <select className="browser-default custom-select">
                            <option value="0">Choose...</option>
                            <option value="N">Novice</option>
                            <option value="A">Advanced</option>
                        </select>
                    </MDBCol >
                    <br/><br/>
                    
                    <MDBCol>
                    <label for="username">First Name   </label>
                    <input id="user_first_name" name="user[first_name]" size="30" type="text" />

                    <label for="name">Last Name</label>
                    <input id="user_last_name" name="user[last_name]" size="30" type="text" />
                    </MDBCol>
                        
                   
                </MDBContainer>
            </div>
        );
    }

}
export default Teams;