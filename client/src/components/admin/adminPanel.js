import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  appointmentList,
  doctorList,
  patientList,
  prescribeList,
  queryList,
} from "../../redux/adminAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import config from "../../config";
function Adminpanel() {
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [consultancyFees, setConsultancy] = useState("");
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.admin.doctorData);
  const patients = useSelector((state) => state.admin.patientData);
  const appointments = useSelector((state) => state.admin.appointment);
  const prescribes = useSelector((state) => state.admin.prescribe);
  const queries = useSelector((state) => state.admin.query);

  useEffect(() => {
    dispatch(doctorList());
    dispatch(patientList());
    dispatch(appointmentList());
    dispatch(prescribeList());
    dispatch(queryList());
  }, []);

  const sendDataToAPI = () => {
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
        dispatch(doctorList());
      });
  };

  const onDelete = (emailId) => {
    axios
      .delete(`${config.BASE_URL}doctor/deleteDoctorByEmail/${emailId}`)
      .then(() => {
        dispatch(doctorList());
      });
    // console.log("Record Deleted Successfully");
    // console.log(err.message);
  };

  return (
    <>
      <h3 className="h3">Welcome </h3>
          <div className="row">
            <div
              className="col-md-4"
              style={{ maxWidth: "25%", marginTop: "3%" }}
            >
              {/* -------------------------------------------List----------------------------------------- */}
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-dash-list"
                  data-toggle="list"
                  href="#list-dash"
                  role="tab"
                  aria-controls="home"
                >
                  Dashboard
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-doc"
                  id="list-doc-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Doctor List
                </a>

                <a
                  className="list-group-item list-group-item-action"
                  href="#list-pat"
                  id="list-pat-list"
                  role="tab"
                  aria-controls="home"
                  data-toggle="list"
                >
                  Patient List
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-app"
                  id="list-app-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Appointment Details
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-pres"
                  id="list-pres-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Prescription List
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-settings"
                  id="list-adoc-list"
                  role="tab"
                  aria-controls="home"
                  data-toggle="list"
                >
                  Add Doctor
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-settings1"
                  id="list-d doc-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Delete Doctor
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-mes"
                  id="list-mes-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Queries
                </a>
              </div>
              <br />
            </div>
            <div className="col-md-8" style={{ marginTop: "3%" }}>
              <div
                className="tab-content"
                id="nav-tabContent"
                style={{ width: "950px" }}
              >
                {/* ----------------------------------------------------------Dashboard---------------------------------------------------------- */}

                <div
                  className="tab-pane fade show active"
                  id="list-dash"
                  role="tabpanel"
                  aria-labelledby="list-dash-list"
                >
                  <div className="container-fluid container-full w bg-white">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="panel panel-white no-radius text-center">
                          <div className="panel-body">
                            <span className="fa-stack fa-2x">
                              <i className="fa fa-square fa-stack-2x text-primary"></i>
                              <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4
                              className="StepTitle"
                              style={{ marginTop: "5%" }}
                            >
                              Doctor List
                            </h4>
                            <p className="links cl-effect-1">
                              <a
                                href="#list-doc"
                                // onclick="clickDiv('#list-doc-list')"
                              >
                                View Doctors
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4" style={{ left: "-3%" }}>
                        <div className="panel panel-white no-radius text-center">
                          <div className="panel-body">
                            <span className="fa-stack fa-2x">
                              <i className="fa fa-square fa-stack-2x text-primary"></i>
                              <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4
                              className="StepTitle"
                              style={{ marginTop: "5%" }}
                            >
                              Patient List
                            </h4>

                            <p className="cl-effect-1">
                              <a
                                href="#app-hist"
                                // onclick="clickDiv('#list-pat-list')"
                              >
                                View Patients
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="panel panel-white no-radius text-center">
                          <div className="panel-body">
                            <span className="fa-stack fa-2x">
                              <i className="fa fa-square fa-stack-2x text-primary"></i>
                              <i className="fa fa-paperclip fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4
                              className="StepTitle"
                              style={{ marginTop: "5%" }}
                            >
                              Appointment Details
                            </h4>

                            <p className="cl-effect-1">
                              <a
                                href="#app-hist"
                                // onclick="clickDiv('#list-app-list')"
                              >
                                View Appointments
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-sm-4"
                        style={{ left: " 13%", marginTop: "5%" }}
                      >
                        <div className="panel panel-white no-radius text-center">
                          <div className="panel-body">
                            <span className="fa-stack fa-2x">
                              <i className="fa fa-square fa-stack-2x text-primary"></i>
                              <i className="fa fa-list-ul fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4
                              className="StepTitle"
                              style={{ marginTop: "5%" }}
                            >
                              Prescription List
                            </h4>

                            <p className="cl-effect-1">
                              <a
                                href="#list-pres"
                                // onclick="clickDiv('#list-pres-list')"
                              >
                                View Prescriptions
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-sm-4"
                        style={{ left: "18%", marginTop: "5%" }}
                      >
                        <div className="panel panel-white no-radius text-center">
                          <div className="panel-body">
                            <span className="fa-stack fa-2x">
                              <i className="fa fa-square fa-stack-2x text-primary"></i>
                              <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4
                              className="StepTitle"
                              style={{ marginTop: "5%" }}
                            >
                              Manage Doctors
                            </h4>

                            <p className="cl-effect-1">
                              <a
                                href=""
                                // onclick="clickDiv('#list-adoc-list')"
                              >
                                Add Doctors
                              </a>
                              <span> </span>
                              <span> | </span>
                              <a
                                href="#app-hist"
                                // onclick="clickDiv('#list-ddoc-list')"
                              >
                                Delete Doctors
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --------------------------------------Doctor List--------------------------------------------- */}

                <div
                  className="tab-pane fade"
                  id="list-doc"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  <div className="col-md-8">
                    <form className="form-group">
                      <div className="row">
                        <div className="col-md-10">
                          <input
                            // value={contact}
                            // onChange={(e) => setContact(e.target.value)}
                            required
                            type="text"
                            name="doctor_contact"
                            placeholder="Enter Contact"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-2">
                          <button
                            type="search"
                            className="btn btn-primary"
                            // onClick={getDataByID(contact)}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Specialization</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Fees</th>
                      </tr>
                    </thead>

                    <tbody>
                      {doctors.map((doctor) => {
                        return (
                          <tr>
                            <td>{doctor.doctorName}</td>
                            <td>{doctor.specialization}</td>
                            <td>{doctor.emailId}</td>
                            <td>{doctor.password}</td>
                            <td>{doctor.consultancyFees}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <br />
                </div>

                {/* --------------------------------------Patient List--------------------------------------------- */}

                <div
                  className="tab-pane fade"
                  id="list-pat"
                  role="tabpanel"
                  aria-labelledby="list-pat-list"
                >
                  <div className="col-md-8">
                    <form className="form-group">
                      <div className="row">
                        <div className="col-md-10">
                          <input
                            // value={contact}
                            // onChange={(e) => setContact(e.target.value)}
                            type="text"
                            placeholder="Enter Contact"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-2">
                          <button
                            type="search"
                            className="btn btn-primary"
                            // onClick={getDataByID(contact)}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Patient Table */}
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Patient ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient) => {
                        return (
                          <tr>
                            <td>{patient._id}</td>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.email}</td>
                            <td>{patient.contact}</td>
                            <td>{patient.password}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <br />
                </div>

                {/* --------------------------------------Appoinment List--------------------------------------------- */}
                <div
                  className="tab-pane fade"
                  id="list-app"
                  role="tabpanel"
                  aria-labelledby="list-pat-list"
                >
                  <div className="col-md-8">
                    <form className="form-group">
                      <div className="row">
                        <div className="col-md-10">
                          <input
                            type="text"
                            name="app_contact"
                            placeholder="Enter Contact"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-2">
                          <button className="btn btn-primary">Search</button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Appointment ID</th>
                        <th scope="col">Patient ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Consultancy Fees</th>
                        <th scope="col">Appointment Date</th>
                        <th scope="col">Appointment Time</th>
                        <th scope="col">Appointment Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.length &&
                        appointments.map((appointment) => {
                          return (
                            <tr>
                              <td>{appointment._id}</td>
                              <td>{appointment.pId}</td>
                              <td>{appointment.firstName}</td>
                              <td>{appointment.lastName}</td>

                              <td>{appointment.gender}</td>
                              <td>{appointment.email}</td>
                              <td>{appointment.contact}</td>
                              <td>{appointment.doctorName}</td>

                              <td>{appointment.consultancyFees}</td>
                              <td>{appointment.appDate}</td>
                              <td>{appointment.appTime}</td>
                              <td>{appointment.currentStatus}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                  <br />
                </div>

                {/* --------------------------------------Prescription List--------------------------------------------- */}

                <div
                  className="tab-pane fade"
                  id="list-pres"
                  role="tabpanel"
                  aria-labelledby="list-pres-list"
                >
                  <div className="col-md-8">
                    <div className="row">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Doctor</th>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Appointment ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Appointment Time</th>
                            {/* <th scope="col">Disease</th>
                            <th scope="col">Allergy</th>
                            <th scope="col">Prescription</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {prescribes.map((prescribe) => {
                            return (
                              <tr>
                                <td>{prescribe.Prescription.doctorName}</td>
                                <td>{prescribe.pId}</td>
                                <td>{prescribe._id}</td>
                                <td>{prescribe.firstName}</td>
                                <td>{prescribe.lastName}</td>
                                <td>{prescribe.appDate}</td>
                                <td>{prescribe.appTime}</td>
                                {/* <td>{prescribe.Prescription.Disease}</td>
                                <td>{prescribe.Prescription.Allergies}</td>
                                <td>{prescribe.Prescription.Prescription}</td> */}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <br />
                    </div>
                  </div>
                </div>

                {/* --------------------------------------Add Doctor--------------------------------------------- */}

                <div
                  className="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                ></div>
                <div
                  className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
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
                {/* --------------------------------------Delete Doctor--------------------------------------------- */}

                <div
                  className="tab-pane fade"
                  id="list-settings1"
                  role="tabpanel"
                  aria-labelledby="list-settings1-list"
                >
                  <form className="form-group">
                    <div className="row">
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
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() => onDelete(emailId)}
                    >
                      Delete Doctor
                    </button>
                  </form>
                </div>

                {/* --------------------------------------Queries--------------------------------------------- */}

                <div
                  className="tab-pane fade"
                  id="list-mes"
                  role="tabpanel"
                  aria-labelledby="list-mes-list"
                >
                  <div className="col-md-8">
                    <form className="form-group">
                      <div className="row">
                        <div className="col-md-10">
                          <input
                            type="text"
                            name="mes_contact"
                            placeholder="Enter Contact"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-2">
                          <button className="btn btn-primary">Search</button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {queries.map((query) => {
                        return (
                          <tr>
                            <td>{query.userName}</td>
                            <td>{query.email}</td>
                            <td>{query.contact}</td>
                            <td>{query.message}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <br />
                </div>
              </div>
            </div>
          </div>
   </>
  );
}
export default Adminpanel;
