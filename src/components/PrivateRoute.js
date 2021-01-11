import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: RoutedComponent, ...rest }) {
  let auth = useSelector((storeData) => !!storeData.userSession.user); // boolean
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <RoutedComponent />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location.pathname },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
