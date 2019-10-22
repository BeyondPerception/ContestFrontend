import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBBtn } from "mdbreact";
import { getAllTeams, getAllStudents } from "./DataFetcher";
import Cookies from "universal-cookie";
class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: null,
      teams: null
    };
  }

  componentDidMount() {
    getAllTeams(new Cookies().get("key")).then(data => {
      this.setState({
        teams: data
      });
    });
    getAllStudents(new Cookies().get("key")).then(data => {
      this.setState({
        students: data
      });
    });
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  submitHander = event => {
    event.preventDefault();
    const { students, teams } = this.state;
    console.log(students);
    console.log(teams);
  };

  render() {
    if (!this.state.students || !this.state.teams) return null;
    console.log(this.state);
    return (
      <MDBContainer className="text-center mt-5">
        <form className="team_validation_form" onSubmit={this.submitHander}>
          <h1>Teams</h1>
          <MDBRow>
            <h2>
              <b>Edit Students</b>
            </h2>
          </MDBRow>
          <br />
          {this.state.students.map((student, index) => (
            <div>
              <MDBRow>
                <MDBCol>
                  <label>Select Division</label>
                  <select
                    className="browser-default custom-select"
                    defaultValue={student.division}
                    onChange={event => {
                      console.log(event.type);
                    }}
                  >
                    <option value="0">Choose...</option>
                    <option value="N">Novice</option>
                    <option value="A">Advanced</option>
                  </select>
                </MDBCol>

                <MDBCol>
                  <label>Enter First Name</label>
                  <MDBInputGroup
                    value={student.name.split(" ")[0]}
                  ></MDBInputGroup>
                </MDBCol>

                <MDBCol>
                  <label>Enter Last Name</label>
                  <MDBInputGroup
                    value={student.name.split(" ")[1]}
                  ></MDBInputGroup>
                </MDBCol>

                <MDBBtn outline color="danger">
                  {" "}
                  Remove Student
                </MDBBtn>
              </MDBRow>
              <br />
            </div>
          ))}
          <br />
          <MDBRow>
            <MDBBtn color="red">Add Student</MDBBtn>
          </MDBRow>
          <br />
          <br />
          <MDBRow>
            <h2>
              <b>Edit Teams</b>
            </h2>
          </MDBRow>
          <br />
          {this.state.teams.map(team => (
            <div>
              <MDBRow>
                <MDBCol style={{ width: "10%" }}>
                  <label>Select Division</label>
                  <select
                    className="browser-default custom-select"
                    defaultValue={team.division}
                  >
                    <option value="0">Choose...</option>
                    <option value="N">Novice</option>
                    <option value="A">Advanced</option>
                  </select>
                </MDBCol>

                <MDBCol>
                  <label>Select Team Members</label>
                  <select className="browser-default custom-select">
                    <option value="-1">Choose...</option>
                    {this.state.students.map((student, index) => (
                      <option value={student.id}>{student.name}</option>
                    ))}
                  </select>

                  <br />
                  <select className="browser-default custom-select">
                    <option value="-1">Choose...</option>
                    {this.state.students.map((student, index) => (
                      <option value={index}>{student.name}</option>
                    ))}
                  </select>
                  <select className="browser-default custom-select">
                    <option value="-1">Choose...</option>
                    {this.state.students.map((student, index) => (
                      <option value={index}>{student.name}</option>
                    ))}
                  </select>
                </MDBCol>

                <MDBBtn outline color="danger">
                  X
                </MDBBtn>
              </MDBRow>
              <br />
            </div>
          ))}
          <MDBRow>
            <MDBBtn color="red">Add Team</MDBBtn>
          </MDBRow>
          <br />
          <br />
          <MDBRow>
            <h4>
              <b>Total Cost: </b>
            </h4>
          </MDBRow>
          <br />
          <br />
          <MDBRow>
            <MDBBtn color="red" type="submit">
              Save
            </MDBBtn>
          </MDBRow>
        </form>
      </MDBContainer>
    );
  }
}
export default Teams;
