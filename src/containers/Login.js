import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Textbox from "../components/Textbox";
import UserDataService from "../services/UserDataService";
import UserActions from "../store/actions/UserActions";

class Login extends Component {
  state = { username: "", password: "" };

  doLogin = async (e) => {
    e.preventDefault();
    try {
      const { username, password } = this.state;
      const { data } = await UserDataService.getUserData();
      if (username !== data.username) {
        this.props.loginError("Invalid Username");
      } else {
        if (password !== data.password) {
          this.props.loginError("Invalid Password");
        } else {
          this.props.loginSuccess(data);
        }
      }
    } catch (e) {
      console.log("error", e.response.data);
      this.props.loginError(e.response.data.error.message);
    }
  };

  renderError() {
    if (this.props.errorMessage) {
      console.log(this.props.errorMessage);
      return (
        <div className="alert alert-danger p-1">Invalid login credentials</div>
      );
    }
    return null;
  }

  render() {
    if (this.props.isLoggedin) {
      console.log("About to navigate");
      return <Redirect to="/dashboard" />; // redirect
    }

    return (
      <div className="container">
        <div className="login border-rounded shadow p-4">
          <h5 className="text-center">LOGIN</h5>
          <hr />
          {this.renderError()}
          <form onSubmit={this.doLogin}>
            <Textbox
              valueChange={(username) => this.setState({ username })}
              label={"Username"}
              placeholder={"Username"}
              type={"text"}
            />
            <Textbox
              valueChange={(password) => this.setState({ password })}
              label={"Password"}
              placeholder={"Password"}
              type={"password"}
            />
            <button className="btn btn-success w-100">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStoreDataToProps = (storeData) => {
  return {
    isLoggedin: !!storeData.userSession.user,
    errorMessage: storeData.userSession.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (user) => dispatch(UserActions.loginSuccess(user)),
    loginError: (err) => dispatch(UserActions.loginError(err)),
  };
};

export default connect(mapStoreDataToProps, mapDispatchToProps)(Login);
