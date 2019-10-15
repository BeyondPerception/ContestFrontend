import React, { Component } from 'react';
import { MDBTable, MDBContainer, MDBTableHead, MDBTableBody} from "mdbreact";
import logo from './download.png';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <MDBContainer className="text-center mt-5">
                    <h2>Welcome to the Cy Woods Computer Science Contest Registration Page!</h2>
                    <br/>
                    <img src={logo} className="img-fluid" alt="" />
                    <br/> <br/>
                    <h3> The contest will be held on December 14, 2019 at Cypress Woods High School</h3>
                    <br/><br/>
                    
                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                            <th>Time</th>
                            <th>Event</th>
                            <th>Description</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>7:15 am</td>
                                <td>Check In</td>
                                <td>Coaches will register with the front desk and be given team numbers as well as other information regarding the rest of the contest.</td>
                            </tr>
                            <tr>
                                <td>8:30 am</td>
                                <td>Written Test Begins</td>
                                <td>40 question UIL style exam consisting of standard Java topics based of the UIL computer science contest will take place in the auditorium.</td>
                            </tr>
                            <tr>
                                <td>9:40 am</td>
                                <td>Written Test Ends</td>
                                <td>Teams will return to the Commons and begin set up for the Programming portion of the contest and submit dry run.</td>
                            </tr>
                            <tr>
                                <td>10:30 am</td>
                                <td>Programming Begins</td>
                                <td>Teams will attempt to solve as many questions as possible out of an 18 problem packet in the 2 hour period.</td>
                            </tr>
                            <tr>
                                <td>12:30 pm</td>
                                <td>Programming Ends</td>
                                <td>All teams will stop programming and we will grade team scores on programming and take appeals in the Commons, final scores will be compiled and validated.</td>
                            </tr>
                            <tr>
                                <td>1:30 pm</td>
                                <td>Awards</td>
                                <td>We will distribute awards to the top 10 individuals in novice and advanced, and top 3 teams in each division.</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    
                </MDBContainer>

                
            </div>
        );
    }

}
export default Home;