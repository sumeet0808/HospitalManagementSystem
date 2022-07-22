import React from "react";
import { Link } from "react-router-dom";
// import Header from "./header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config";
// import { setSessionCookie } from "./session";
// import Cookie from "js-cookie"

function Login() {
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const data = {};

  const handlePatientLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${config.BASE_URL}auth/patientLogin`, {
        emailId,
        password,
      })
      .then((res) => {
        localStorage["token"] = res.data.token;
        localStorage["user"] = JSON.stringify(res.data.patient);
        alert("Patient Login Sucessfully!!!!!");
        navigate("/Patient");
        setLoading(false);
      })
      .catch((error) => {
        alert("Invalid Credentials");
      });
  };

  if (loading) {
    return <h4>Logging in...</h4>;
  }

  const handleDoctorLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${config.BASE_URL}auth/doctorLogin`, {
        emailId,
        password,
      })
      .then((res) => {
        localStorage["token"] = res.data.token;
        console.log("************", res.data);
        alert("Doctor Login Sucessfully!!!!!");
        navigate("/Doctor");
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
        navigate("/adminPanel");
        window.localStorage.setItem("userId", emailId);
        window.localStorage.setItem("password", password);
      })
      .catch((error) => {
        alert("Invalid Credentials");
      });
  };

  return (
    <div class="p-3 mb-8 bg-light text-dark">
      {/* > */}
      <div>{/* <Header /> */}</div>
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

              <div
                class="tab-pane fade show"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h3 class="register-heading">Login as Doctor</h3>
                <form>
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
