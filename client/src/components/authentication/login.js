import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import InputField from "../common/InputField";

function Login() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({ emailId: "", password: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const navigate = useNavigate();
  const handlePatientLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios

      .post(`${config.BASE_URL}auth/patientLogin`, {
        ...data,
      })
      .then((res) => {
        alert("Patient Login Sucessfully!!!!!");
        // eslint-disable-next-line no-restricted-globals
        navigate("/Patient");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));
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
        ...data,
      })
      .then((res) => {
        alert("Doctor Login Sucessfully!!!!!");
        navigate("/Doctor");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        alert("Invalid Credentials");
      });
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${config.BASE_URL}auth/adminLogin`, {
        ...data,
      })
      .then((res) => {
        alert("Admin Login Sucessfully!!!!!");
        navigate("/adminPanel");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        alert("Invalid Credentials");
      });
  };

  return (
    <div class="p-3 mb-8 bg-light text-dark">
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
                        <InputField
                          id="emailId"
                          type="email"
                          placeholder="Email *"
                          name="emailId"
                          value={data.emailId}
                          onChange={handleOnChange}
                          onkeydown="return alphaOnly(event);"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <InputField
                          id="password"
                          type="password"
                          placeholder="Password*"
                          name="password"
                          value={data.password}
                          onChange={handleOnChange}
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
                        <InputField
                          id="emailId"
                          type="email"
                          placeholder="Email *"
                          name="emailId"
                          value={data.emailId}
                          onChange={handleOnChange}
                          onkeydown="return alphaOnly(event);"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <InputField
                          id="password"
                          type="password"
                          placeholder="Password*"
                          name="password"
                          value={data.password}
                          onChange={handleOnChange}
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
                  <div class="row register-form">
                    <div class="col-md-6">
                      <div class="form-group">
                        <InputField
                          id="emailId"
                          type="email"
                          placeholder="Email *"
                          name="emailId"
                          value={data.emailId}
                          onChange={handleOnChange}
                          onkeydown="return alphaOnly(event);"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <InputField
                          id="password"
                          type="password"
                          placeholder="Password*"
                          name="password"
                          value={data.password}
                          onChange={handleOnChange}
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
