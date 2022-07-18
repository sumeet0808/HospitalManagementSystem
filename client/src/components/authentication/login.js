import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config";

function Login() {
  // const [emailId, setemailId] = useState("");
  // const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handlePatientLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${config.BASE_URL}auth/patientLogin`, {
        emailId,
        password,
      })
      .then(() => {
        alert("Patient Login Sucessfully!!!!!");
        // eslint-disable-next-line no-restricted-globals
        navigate("/PatientDashboard");
      })
      .catch((error) => {
        alert("Invalid Credentials");
      });
  };
  // let history = useNavigate();

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

  const handleDoctorLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${config.BASE_URL}auth/doctorLogin`, {
        emailId,
        password,
      })
      .then(() => {
        alert("Doctor Login Sucessfully!!!!!");
        // eslint-disable-next-line no-restricted-globals
        history.push("/Doctor");
      })
      .catch((error) => {
        alert("Invalid Credentials");
      });
  };
  const handleAdminLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${config.BASE_URL}auth/adminLogin`, {
        emailId,
        password,
      })
      .then(() => {
        alert("Admin Login Sucessfully!!!!!");
        // eslint-disable-next-line no-restricted-globals
        history.push("/Adminpanel");
      })
      .catch((error) => {
        alert("Invalid Credentials");
      })
      .then(() => {
        // eslint-disable-next-line no-restricted-globals
      });
  };

  return (
    // <div class="p-3 mb-2 bg-primary text-white"
    // style={{ backgroundColor: '#4F91FF' }}
    <div class="p-3 mb-8 bg-light text-dark">
      {/* > */}
      <div>
        <Header />
      </div>
      <div
        class="container register"
        style={{
          marginTop: "3%",
          marginBottom: "20%",
          fontFamily: "IBM Plex Sans, sans-serif",
        }}
      >
        <div class="row">
          <div
            class="col-md-3 register-left"
            style={{ marginTop: "90px", right: "5%" }}
          >
            {/* <img src="https://wallpapercave.com/wp/wp2610913.jpg" alt="" /> */}

            <h3>Welcome to Global Hospitals</h3>
          </div>
          <div
            class="col-md-9 register-right"
            style={{ marginTop: "80px", left: "80px" }}
          >
            <ul
              class="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
              style={{ width: "40%" }}
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Patient
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Doctor
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#admin"
                  role="tab"
                  aria-controls="admin"
                  aria-selected="false"
                >
                  Admin
                </a>
              </li>
            </ul>
            <br></br>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3>Patient Login</h3>

                <form>
                  {/* <form class="form-group" method="POST" action="func.php"> */}
                  <div class="row register-form">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email *"
                          name="emailId"
                          onChange={(e) => setemailId(e.target.value)}
                          onkeydown="return alphaOnly(event);"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password*"
                          name="password"
                          onChange={(e) => setpassword(e.target.value)}
                          required
                        />
                      </div>

                      <input
                        type="submit"
                        class="btnRegister"
                        name="adsub"
                        value="Login"
                        onClick={handlePatientLogin}
                      />
                    </div>
                    <br></br>
                    <Link to="/">Not have an account?</Link>
                  </div>
                </form>
              </div>
              {/* <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 class="register-heading">Register as Patient</h3>
                <br></br>
                <form>
                  {/* <form method="post" action="func2.php"> */}
              {/* <div class="row register-form">
                    <div class="col-md-6">
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
                      <br></br>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Your Email *"
                          name="emailId"
                          onChange={(e) => setemailId(e.target.value)}
                        />
                      </div>
                      <br></br>
                      <div class="form-group">
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
                      </div>{" "}
                      <br></br>
                      <div class="form-group">
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
                        <Link to="/patientlogin">Already have an account?</Link>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
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
                      <br></br>
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
                      <br></br>
                      <div class="form-group">
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
                      <br></br>
                      <input
                        type="submit"
                        class="btnRegister"
                        value="Register"
                        onClick={handleSubmit}
                      />
                    </div>
                  </div>
                </form> */}
              {/* </div> */}

              <div
                class="tab-pane fade show"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h3 class="register-heading">Login as Doctor</h3>
                <form>
                  {/* <form method="post" action="func1.php"> */}
                  <div class="row register-form">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email *"
                          name="emailId"
                          onChange={(e) => setemailId(e.target.value)}
                          onkeydown="return alphaOnly(event);"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password *"
                          name="password"
                          onChange={(e) => setpassword(e.target.value)}
                          required
                        />
                      </div>
                      <input
                        type="submit"
                        class="btnRegister"
                        name="docsub1"
                        value="Login"
                        onClick={handleDoctorLogin}
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div
                class="tab-pane fade show"
                id="admin"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h3 class="register-heading">Login as Admin</h3>
                <form>
                  {/* <form method="post" action="func3.php"> */}
                  <div class="row register-form">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email *"
                          name="emailId"
                          onChange={(e) => setemailId(e.target.value)}
                          onkeydown="return alphaOnly(event);"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password*"
                          name="password"
                          onChange={(e) => setpassword(e.target.value)}
                          required
                        />
                      </div>

                      <input
                        type="submit"
                        class="btnRegister"
                        name="adsub"
                        value="Login"
                        onClick={handleAdminLogin}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
