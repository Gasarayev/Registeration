import React from "react";
import "../Login/style.css";

function Login() {
  return (
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
                        <div class="form-group">
                            <input autocomplete="off" id="login-username" type="text" name="loginUsername" required/>
                            <label for="login-username" class="label_email">email</label>
                        </div>
                        <div class="form-group">
                            <input autocomplete="off" id="login-password" type="password" name="loginPassword" class="input_password" required/>
                            <label for="login-password" class="label-material">password</label>
                        </div>

                        <div className="form-button">
                        <input type="button" id="login" class="btn" value="Login"/>
                        </div>
                    </form>
                </div>
                <p className="forgot_password">Forgot Password?</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
