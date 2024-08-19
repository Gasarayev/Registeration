import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const getEmail = localStorage.getItem("email");
  const getPassword = localStorage.getItem("password");

  if (getEmail !== "a" || getPassword !== "a") {
    return <Navigate to={"/"} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
