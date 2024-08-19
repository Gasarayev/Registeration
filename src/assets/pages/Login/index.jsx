import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Home from "../Home/index";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const getEmail = localStorage.setItem("emailInfo", "gasar@gmail.com");
  const getPassword = localStorage.setItem("passwordinfo", "12345");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email == "gasar@gmail.com" && password == "12345") {
      getEmail;
      getPassword;
      onLogin();
      navigate("/");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <>
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <section id="registration">
          <div className="login">
            <div className="logo">
              <img
                src="https://app.morooq.com/Content/UIContent/images/icon2.png"
                alt="morooq_logo"
              />
            </div>

            <div className="content">
              <div className="head">
                <div className="signIn">Sign In</div>
                <div className="signUp active">Sign Up</div>
              </div>
              <div className="body">
                <div className="form">
                  <form method="post" id="login_form">
                    <div className="form-group">
                      <input
                        autoComplete="off"
                        id="login-username"
                        type="email"
                        name="loginUsername"
                        required
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {/* <label htmlFor="login-username" className="label_email">email</label> */}
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
                      {/* <label htmlFor="login-password" className="label-material">password</label> */}
                    </div>

                    <div className="form-button">
                      <input
                        type="button"
                        id="login"
                        className="btn"
                        value="Login"
                        onClick={handleLogin}
                      />
                    </div>
                  </form>
                </div>
                <p className="forgot_password">Forgot Password?</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
