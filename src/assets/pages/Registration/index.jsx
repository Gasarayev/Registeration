import React, { useState } from "react";
import Login from "../Login";
import Signin from "../SignUp";
import "../Registration/style.css";

function Registration() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div>
      <section id="registration">
        <div className="login active">
          <div className="logo">
            <img
              src="https://app.morooq.com/Content/UIContent/images/icon2.png"
              alt="morooq_logo"
            />
          </div>

          <div className={`content `}>
            <div className="head">
              <div
                className={`signIn ${isSignIn ? "active" : ""}`}
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </div>
              <div
                className={`signUp ${!isSignIn ? "active" : ""}`}
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </div>
            </div>

            {isSignIn ? <Login /> : <Signin />}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
