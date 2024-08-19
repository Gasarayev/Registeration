import React, { useState } from "react";
import "./App.css";
import Login from "./assets/pages/Login/index.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/index.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleLogin = () => {
   
      setIsAuthenticated(true);
  
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/"
          element={
            <PrivateRoute Component={Home} isAuthenticated={isAuthenticated} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
