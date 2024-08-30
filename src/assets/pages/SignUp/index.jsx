import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [nationalityId, setNationalityId] = useState("");
  const [entity, setEntity] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const requestData = {
      Email: email,
      Password: password,
      FirstName: firstName,
      LastName: lastName,
      ConfirmationCode: confirmationCode,
      NationalityId: parseInt(nationalityId),
      AgentType: entity ? 1 : 0, 
    };

    if (companyName) requestData.CompanyName = companyName;
    if (country) requestData.Country = country;

    try {
      const response = await fetchApi("signup", "POST", requestData);

      if (response.ok) {
        navigate("/home");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred");
    }
  };


  return (
    <div className="body">
      <div className="form">
        <form method="post" id="signup_form" onSubmit={handleSignup}>
          
          <div className="signIn_form-group">
            <div className="signIn_entinty">
              <input
                type="radio"
                id="physical_entinty"
                name="fav_language"
                value="physical_entinty"
                onChange={() => setEntity(false)}
              />
              <label htmlFor="physical_entinty">Physical entity</label>
            </div>

            <div className="signIn_entinty">
              <input
                type="radio"
                id="legal_entinty"
                name="fav_language"
                value="legal_entinty"
                onChange={() => setEntity(true)}
              />
              <label htmlFor="legal_entinty">Legal entity</label>
            </div>
          </div>

          
          <div className="form-group">
            <input
              autoComplete="off"
              id="first-name"
              type="text"
              name="firstName"
              required
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              autoComplete="off"
              id="last-name"
              type="text"
              name="lastName"
              required
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              autoComplete="off"
              id="email"
              type="email"
              name="email"
              required
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select
              name="nationality"
              className="nationality_country"
              onChange={(e) => setNationalityId(e.target.value)}
            >
              <option value="">Nationality</option>
              <option value="1">Azerbaijan</option>
              <option value="2">English</option>
            </select>
          </div>

          {entity && (
            <>
              <div className="form-group">
                <input
                  autoComplete="off"
                  id="company-name"
                  type="text"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company name"
                />
              </div>

              <div className="form-group">
                <select
                  name="country"
                  className="nationality_country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Country of origin</option>
                  <option value="azerbaijan">Azerbaijan</option>
                  <option value="english">English</option>
                </select>
              </div>
            </>
          )}

          <div className="form-group">
            <input
              autoComplete="off"
              id="login-password"
              type="password"
              name="loginPassword"
              required
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              autoComplete="off"
              id="confirm-password"
              type="password"
              name="confirmPassword"
              required
              value={confirmationCode}
              placeholder="Confirm password"
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
          </div>

          <div className="form-button">
            <input
              type="submit"
              id="signUp"
              className="btn signUp_btn"
              value="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
