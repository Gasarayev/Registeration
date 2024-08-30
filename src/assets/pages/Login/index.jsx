import React, { useState } from "react";
import "../Login/style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../redux/auth/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const url = "http://waiting.barattson.com/api/User/token";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Email: email,
          Password: password
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error("Network response was not ok: " + errorText);
      }

      const responseBody = await response.json();

      // Tokeni localStorage-də saxlamaq
      localStorage.setItem("authToken", responseBody.token);

      dispatch(loginSuccess(responseBody));
      navigate("/home");
    } catch (error) {
      alert("Login failed, please try again.");
    }
  };

  return (
    <div className="body">
      <div className="form">
        <form method="post" id="login_form" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              autoComplete="off"
              id="login-username"
              type="text"
              name="loginUsername"
              required
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              autoComplete="off"
              id="login-password"
              type="password"
              name="loginPassword"
              required
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-button">
            <input type="submit" id="login" className="btn" value="Login" />
          </div>
        </form>
      </div>
      <p className="forgot_password">Forgot Password?</p>
    </div>
  );
}

export default Login;
