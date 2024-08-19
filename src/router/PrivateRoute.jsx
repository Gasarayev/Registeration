import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const getEmail = localStorage.getItem("email");
const getPassword = localStorage.getItem("password");

console.log("private", getEmail)


const PrivateRoute = ({ children }) => {
  

  if(!getEmail == "a" && !getPassword == "a"){
   
   return Navigate("/")

  }
  
  return children
 
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;