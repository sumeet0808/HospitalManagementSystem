import React from "react";
import { useState } from "react";
import axios from "axios";
import config from "../../config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../common/InputField";


function Register() {
 
  const [data, setData] = useState({firstName:"",lastName:"",emailId:"",password:"",confirmPassword:"",phoneNo:"",gender:""})

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setData({...data, [name]:value})
  };
 
  const handleOnSubmit = (e) => {
    e.preventDefault(); 
    // console.log(password, confirmPassword); 
    if (data.password === data.confirmPassword) {
      axios 
        .post(`${config.BASE_URL}auth/register`, { 
          ...data          
        })
        .then(() => {  
          alert("Registered Successfully!!!!!!!!!!!!");  
          // eslint-disable-next-line no-restricted-globals  
          history.push("/patientlogin");  
        }); 
    } else {  
      alert("password and confirm password should be same!!!!!!!"); 
    } 
  }; 
 
  return (
    <div class="p-3 mb-8 bg-light text-dark">
      <div
        class="container register"
        style={{
          marginTop: "5%",
          fontFamily: "IBM Plex Sans, sans-serif",
        }}
      >
        <form style={{ marginTop: "10%" }}
        onSubmit={handleOnSubmit}
        >
          
          <div class="row register-form">
            <div
              class="col-md-3 register-left"
              style={{ marginTop: "8%", right: "5%" }}
            >
              <h3 class="register-heading">Register as Patient</h3>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <InputField
                id="firstName"
                  type="text"
                  placeholder="First Name *"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleOnChange}
                  onkeydown="return alphaOnly(event);"
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <InputField
                id="lastName"
                  type="text"
                  placeholder="Last Name *"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleOnChange}
                  onkeydown="return alphaOnly(event);"
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <InputField
                id="emailId"
                  type="email"
                  placeholder="Your Email *"
                  name="emailId"
                  value={data.emailId}
                  onChange={handleOnChange}
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <div class="maxl">
                  <label class="radio inline">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={data.gender === 'male'}
                      onChange={handleOnChange}
                    />
                    <span> Male </span>
                  </label>
                  <label class="radio inline">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={data.gender==='female'}
                      onChange={handleOnChange}
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
                <InputField
                id="phoneNo"
                  type="tel"
                  minlength="10"
                  maxlength="10"
                  name="phoneNo"
                  value={data.phoneNo}
                  onChange={handleOnChange}
                  placeholder="Your Phone *"
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <InputField
                id="password"
                  type="password"
                  placeholder="Password *"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  onkeyup="check();"
                />
              </div>
              <div style={{ marginTop: "10%" }} class="form-group">
                <InputField
                  id="cpassword"
                  type="password"
                  placeholder="Confirm Password *"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  onkeyup="check();"
                />
                <span id="message"></span>
              </div>
              <input
                style={{ marginTop: "5%" }}
                type="submit"
                class="btnRegister"
                value="Register"
                href="/login"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
