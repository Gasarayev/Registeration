import React from "react";
import "./App.css";
import Login from "./assets/pages/Login/index.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/index.jsx";
import Registration from "./assets/pages/Registration/index.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
