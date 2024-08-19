import React, { useState } from "react";
import "./App.css";
import Login from "./assets/pages/Login/index.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/index.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [getEmail, setEmail] = useState('')

  console.log("getEmail-",getEmail)
  console.log(setEmail)
  const handleLogin = () => {
   
      setIsAuthenticated(true);
  
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} setEmail={getEmail} />} />
        <Route
          path="/home"
          element={
            <PrivateRoute Component={Home} isAuthenticated={isAuthenticated} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
