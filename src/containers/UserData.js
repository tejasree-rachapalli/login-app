import React, { Component } from "react";
import UserDataService from "../services/UserDataService";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class UserData extends Component {
  state = { user: [] };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const response = await UserDataService.getDashboardData();
      console.log("success", response.data);
      this.setState({ user: response.data.user });
    } catch (e) {
      console.log("error", e);
    }
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Email </TableCell>
              <TableCell>Phone No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.user.map((u) => (
              <TableRow key={u.id}>
                <TableCell component="th" scope="row">
                  {u.name}
                </TableCell>
                <TableCell align="right">{u.age}</TableCell>
                <TableCell>{u.gender}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.phoneNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default UserData;
