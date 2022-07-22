import React, { useEffect, useState } from "react";
import axios from "axios";
import { doctorList } from "../../redux/adminAction";
import { useDispatch } from "react-redux";
import config from "../../config";
function AddDoctor() {
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [consultancyFees, setConsultancy] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doctorList());
  }, []);

  const sendDataToAPI = (e) => {
    e.preventDefault();
    axios
      .post(`${config.BASE_URL}doctor/createDoctor`, {
        doctorName,
        specialization,
        emailId,
        password,
        confirmPassword,
        consultancyFees,
      })
      .then(() => {
        alert("Doctor Added...");
        dispatch(doctorList());
      });
  };

  return (
    <div>
      <form className="form-group">
        <div className="row">
          <div className="col-md-4">
            <label>Doctor Name:</label>
          </div>
          <div className="col-md-8">
            <input
              onChange={(e) => setDoctorName(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>
          <br />
          <br />
          <div className="col-md-4">
            <label>Specialization:</label>
          </div>
          <div className="col-md-8">
            <select
              onChange={(e) => setSpecialization(e.target.value)}
              className="form-control"
              id="special"
              required="required"
            >
              <option value="head" disabled selected>
                Select Specialization
              </option>
              <option value="General" name="specialization">
                General
              </option>
              <option value="Cardiologist" name="specialization">
                Cardiologist
              </option>
              <option value="Neurologist" name="specialization">
                Neurologist
              </option>
              <option value="Pediatrician" name="specialization">
                Pediatrician
              </option>
            </select>
          </div>
          <br />
          <br />
          <div className="col-md-4">
            <label>Email ID:</label>
          </div>
          <div className="col-md-8">
            <input
              onChange={(e) => setEmailId(e.target.value)}
              type="email"
              className="form-control"
              required
            />
          </div>
          <br />
          <br />
          <div className="col-md-4">
            <label>Password:</label>
          </div>
          <div className="col-md-8">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="dpassword"
              required
            />
          </div>
          <br />
          <br />
          <div className="col-md-4">
            <label>Confirm Password:</label>
          </div>
          <div className="col-md-8" id="cpass">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="form-control"
              id="cdpassword"
              required
            />
            <span id="message"></span>
          </div>
          <br />
          <br />

          <div className="col-md-4">
            <label>Consultancy Fees:</label>
          </div>
          <div className="col-md-8">
            <input
              onChange={(e) => setConsultancy(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>
          <br />
          <br />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={sendDataToAPI}
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
}
export default AddDoctor;
