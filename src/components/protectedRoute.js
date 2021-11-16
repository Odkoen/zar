import React from "react";
import { Redirect, Route } from "react-router-dom";

const protectedRoute = (props) => {
  const user = true;

  if (!user) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export default protectedRoute;
