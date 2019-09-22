import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {

  const user = auth.getCurrentUser();

  return (
    <Route
      {...rest}
      render={props => {
        if (user && user.isAdmin)
          return Component ? <Component {...props} /> : render(props);
        else if (user && user.isAdmin === false)
          return (
            <Redirect
              to={{
                pathname: "/not-found",
                state: { from: props.location }
              }}
            />
          )
        else
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
      }}
    />
  );
};

export default ProtectedRoute;
