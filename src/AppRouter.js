import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import UserData from "./containers/UserData";
import PrivateRoute from "./components/PrivateRoute";

function AppRouter(props) {
  return (
    <main className="container-fluid" style={{ marginTop: "5rem" }}>
      <Switch>
        <Route path={"/"} exact={true} component={Login} />
        <PrivateRoute path={"/dashboard"} component={UserData} />
        {/* 404 ROUTE */}
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    </main>
  );
}
export default AppRouter;
