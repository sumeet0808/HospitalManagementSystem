import React from "react";
import Header from "./header";
import { useState } from "react";
import axios from "axios";
import config from "../../config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlasttName] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [gender, setgender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password, confirmPassword);
    if (password === confirmPassword) {
      axios
        .post(`${config.BASE_URL}auth/register`, {
          firstName,
          lastName,
          emailId,
          password,
          confirmPassword,
          phoneNo,
          gender,
        })
        .then(() => {
          alert("Registered Successfully!!!!!!!!!!!!");
          // eslint-disable-next-line no-restricted-globals
          history.push("/patientlogin");
        });
      // .catch((error) => {
      //   alert("Email already registered");
      //   //alert("Registered Successfully!!!!!!!!!!!!")
      // });
    } else {
      alert("password and confirm password should be same!!!!!!!");
    }
  };

  return (
    <div class="p-3 mb-8 bg-light text-dark">
      <div>
        <Header />
      </div>

      <div
        class="container register"
        style={{
          marginTop: "5%",
          // marginBottom: "12%",
          fontFamily: "IBM Plex Sans, sans-serif",
        }}
      >
        <form style={{ marginTop: "10%" }}>
          {/* <form method="post" action="func2.php"> */}
          <div class="row register-form">
            <div
              class="col-md-3 register-left"
              style={{ marginTop: "8%", right: "5%" }}
            >
              <h3 class="register-heading">Register as Patient</h3>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name *"
                  name="firstName"
                  onChange={(e) => setfirstName(e.target.value)}
                  onkeydown="return alphaOnly(event);"
                  required
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name *"
                  name="lastName"
                  onChange={(e) => setlasttName(e.target.value)}
                  onkeydown="return alphaOnly(event);"
                  required
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email *"
                  name="emailId"
                  onChange={(e) => setemailId(e.target.value)}
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <div class="maxl">
                  <label class="radio inline">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked
                      onChange={(e) => setgender(e.target.value)}
                    />
                    <span> Male </span>
                  </label>
                  <label class="radio inline">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={(e) => setgender(e.target.value)}
                    />
                    <span>Female </span>
                  </label>
                </div>
                <br></br>
                <Link to="/login">Already have an account?</Link>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <input
                  type="tel"
                  minlength="10"
                  maxlength="10"
                  name="phoneNo"
                  class="form-control"
                  onChange={(e) => setphoneNo(e.target.value)}
                  placeholder="Your Phone *"
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password *"
                  id="password"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                  onkeyup="check();"
                  required
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="cpassword"
                  placeholder="Confirm Password *"
                  name="confirmPassword"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  onkeyup="check();"
                  required
                />
                <span id="message"></span>
              </div>
              <input
                style={{ marginTop: "5%" }}
                type="submit"
                class="btnRegister"
                value="Register"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
