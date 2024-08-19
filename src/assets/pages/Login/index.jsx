import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email == "a" && password == "a") {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      navigate("/home");
    } else {
      navigate("/");
      alert("False");
    }
  };

  return (
    <>
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
                      type="submit"
                      id="login"
                      className="btn"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
              <p className="forgot_password">Forgot Password?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
