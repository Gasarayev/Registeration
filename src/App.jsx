import React, { useState } from "react";
import "./App.css";
import Login from "./assets/pages/Login/index.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
