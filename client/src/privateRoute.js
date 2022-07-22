import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ user, redirectPath = "/login", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};

export default PrivateRoute;
