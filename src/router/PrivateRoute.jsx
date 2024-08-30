import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;