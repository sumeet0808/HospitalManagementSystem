import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  addDoctor,
  appointmentList,
  doctorList,
  patientList,
  prescribeList,
  queryList,
} from "./redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Adminpanel = () => {
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [consultancyFees, setConsultancy] = useState("");
  const [posts, setPosts] = useState({});

  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.auth.doctorData);
  const patients = useSelector((state) => state.auth.patientData);
  const appointments = useSelector((state) => state.auth.appointment);
  const prescribes = useSelector((state) => state.auth.prescribe);
  const queries = useSelector((state) => state.auth.query);
  //   const addDoctors = useSelector((state) => state.auth.Doctor);

  console.log("----", prescribes);
  useEffect(() => {
    dispatch(doctorList());
    dispatch(patientList());
    dispatch(appointmentList());
    dispatch(prescribeList());
    dispatch(queryList());
    // dispatch(addDoctor());
  }, []);
  const sendDataToAPI = () => {
    axios.post(`http://localhost:5000/api/v1/doctors`, {
      doctorName,
      specialization,
      emailId,
      password,
      confirmPassword,
      consultancyFees,
    });
  };

  const onDelete = (emailId) => {
    axios
      .delete(`http://localhost:5000/api/v1/doctors/${emailId}`)
      .then((res) => {
        console.log(res);
        console.log("Delete-------", res.data);
        doctors.filter((post) => {
          return post.emailId !== emailId;
        });
      });
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <a class="navbar-brand" href="#">
          <i class="fa fa-user-plus" aria-hidden="true"></i> Global Hospital
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                //   href="logout1.php"
              >
                <i class="fa fa-sign-out" aria-hidden="true"></i>Logout
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ paddingTop: "50px" }}>
        <div class="container-fluid" style={{ marginTop: "50px" }}>
          <h3
            style={{
              marginLeft: "40%",
              paddingBottom: "20px",
              fontFamily: "IBM Plex Sans, sans-serif",
            }}
          >
            WELCOME RECEPTIONIST
          </h3>

          <div class="row">
            <div class="col-md-4" style={{ maxWidth: "25%", marginTop: "3%" }}>
              <div class="list-group" id="list-tab" role="tablist">
                <a
                  class="list-group-item list-group-item-action active"
                  id="list-dash-list"
                  data-toggle="list"
                  href="#list-dash"
                  role="tab"
                  aria-controls="home"
                >
                  Dashboard
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  href="#list-doc"
                  id="list-doc-list"
                  role="tab"
                  aria-controls="home"
                  data-toggle="list"
                >
                  Doctor List
                </a>

                <a
                  class="list-group-item list-group-item-action"
                  href="#list-pat"
                  id="list-pat-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Patient List
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  href="#list-app"
                  id="list-app-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Appointment Details
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  href="#list-pres"
                  id="list-pres-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Prescription List
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  href="#list-settings"
                  id="list-adoc-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Add Doctor
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  href="#list-settings1"
                  id="list-ddoc-list"
                  role="tab"
                  data-toggle="list"
                  aria-controls="home"
                >
                  Delete Doctor
                </a>
                <a
                  class="list-group-item list-group-item-action"
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
            <div class="col-md-8" style={{ marginTop: "3%" }}>
              <div
                class="tab-content"
                id="nav-tabContent"
                style={{ width: "950px" }}
              >
                <div
                  class="tab-pane fade show active"
                  id="list-dash"
                  role="tabpanel"
                  aria-labelledby="list-dash-list"
                >
                  <div class="container-fluid container-fullw bg-white">
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="panel panel-white no-radius text-center">
                          <div class="panel-body">
                            <span class="fa-stack fa-2x">
                              <i class="fa fa-square fa-stack-2x text-primary"></i>
                              <i class="fa fa-users fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="StepTitle" style={{ marginTop: "5%" }}>
                              Doctor List
                            </h4>
                            <p class="links cl-effect-1">
                              <a
                                href="#list-doc"
                                onclick="clickDiv('#list-doc-list')"
                              >
                                View Doctors
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-4" style={{ left: "-3%" }}>
                        <div class="panel panel-white no-radius text-center">
                          <div class="panel-body">
                            <span class="fa-stack fa-2x">
                              <i class="fa fa-square fa-stack-2x text-primary"></i>
                              <i class="fa fa-users fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="StepTitle" style={{ marginTop: "5%" }}>
                              Patient List
                            </h4>

                            <p class="cl-effect-1">
                              <a
                                href="#app-hist"
                                onclick="clickDiv('#list-pat-list')"
                              >
                                View Patients
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-4">
                        <div class="panel panel-white no-radius text-center">
                          <div class="panel-body">
                            <span class="fa-stack fa-2x">
                              {" "}
                              <i class="fa fa-square fa-stack-2x text-primary"></i>{" "}
                              <i class="fa fa-paperclip fa-stack-1x fa-inverse"></i>{" "}
                            </span>
                            <h4 class="StepTitle" style={{ marginTop: "5%" }}>
                              Appointment Details
                            </h4>

                            <p class="cl-effect-1">
                              <a
                                href="#app-hist"
                                onclick="clickDiv('#list-app-list')"
                              >
                                View Appointments
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div
                        class="col-sm-4"
                        style={{ left: " 13%", marginTop: "5%" }}
                      >
                        <div class="panel panel-white no-radius text-center">
                          <div class="panel-body">
                            <span class="fa-stack fa-2x">
                              <i class="fa fa-square fa-stack-2x text-primary"></i>
                              <i class="fa fa-list-ul fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="StepTitle" style={{ marginTop: "5%" }}>
                              Prescription List
                            </h4>

                            <p class="cl-effect-1">
                              <a
                                href="#list-pres"
                                onclick="clickDiv('#list-pres-list')"
                              >
                                View Prescriptions
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="col-sm-4"
                        style={{ left: "18%", marginTop: "5%" }}
                      >
                        <div class="panel panel-white no-radius text-center">
                          <div class="panel-body">
                            <span class="fa-stack fa-2x">
                              <i class="fa fa-square fa-stack-2x text-primary"></i>
                              <i class="fa fa-plus fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="StepTitle" style={{ marginTop: "5%" }}>
                              Manage Doctors
                            </h4>

                            <p class="cl-effect-1">
                              <a
                                href="#app-hist"
                                onclick="clickDiv('#list-adoc-list')"
                              >
                                Add Doctors
                              </a>
                              <span> </span>
                              <span> | </span>
                              <a
                                href="#app-hist"
                                onclick="clickDiv('#list-ddoc-list')"
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

                <div
                  class="tab-pane fade"
                  id="list-doc"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  <div class="col-md-8">
                    <form
                      class="form-group"
                      //   action="doctorsearch.php"
                      method="post"
                    >
                      <div class="row">
                        <div class="col-md-10">
                          <input
                            type="text"
                            name="doctor_contact"
                            placeholder="Enter Email ID"
                            class="form-control"
                          />
                        </div>
                        <div class="col-md-2">
                          <input
                            type="submit"
                            name="doctor_search_submit"
                            class="btn btn-primary"
                            value="Search"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Doctor List */}
                  <table class="table table-hover">
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

                <div
                  class="tab-pane fade"
                  id="list-pat"
                  role="tabpanel"
                  aria-labelledby="list-pat-list"
                >
                  <div class="col-md-8">
                    <form class="form-group" method="post">
                      <div class="row">
                        <div class="col-md-10">
                          <input
                            type="text"
                            name="patient_contact"
                            placeholder="Enter Contact"
                            class="form-control"
                          />
                        </div>
                        <div class="col-md-2">
                          <input
                            type="submit"
                            name="patient_search_submit"
                            class="btn btn-primary"
                            value="Search"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Patient Table */}
                  <table class="table table-hover">
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

                <div
                  class="tab-pane fade"
                  id="list-pres"
                  role="tabpanel"
                  aria-labelledby="list-pres-list"
                >
                  <div class="col-md-8">
                    <div class="row">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Doctor</th>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Appointment ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Appointment Time</th>
                            <th scope="col">Disease</th>
                            <th scope="col">Allergy</th>
                            <th scope="col">Prescription</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prescribes.map((prescribe) => {
                            return (
                              <tr>
                                <td>{prescribe.doctorName}</td>
                                <td>{prescribe.pid}</td>
                                <td>{prescribe.ID}</td>
                                <td>{prescribe.fname}</td>
                                <td>{prescribe.lname}</td>
                                <td>{prescribe.appdate}</td>
                                <td>{prescribe.apptime}</td>
                                <td>{prescribe.Prescription.Disease}</td>
                                <td>{prescribe.Prescription.Allergies}</td>
                                <td>{prescribe.Prescription.Prescription}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <br />
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="list-app"
                  role="tabpanel"
                  aria-labelledby="list-pat-list"
                >
                  <div class="col-md-8">
                    <form class="form-group" method="post">
                      <div class="row">
                        <div class="col-md-10">
                          <input
                            type="text"
                            name="app_contact"
                            placeholder="Enter Contact"
                            class="form-control"
                          />
                        </div>
                        <div class="col-md-2">
                          <input
                            type="submit"
                            name="app_search_submit"
                            class="btn btn-primary"
                            value="Search"
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <table class="table table-hover">
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
                              <td>{appointment.ID}</td>
                              <td>{appointment.pid}</td>
                              <td>{appointment.fname}</td>
                              <td>{appointment.lname}</td>

                              <td>{appointment.gender}</td>
                              <td>{appointment.email}</td>
                              <td>{appointment.contact}</td>
                              <td>{appointment.doctorName}</td>

                              <td>{appointment.docFees}</td>
                              <td>{appointment.appdate}</td>
                              <td>{appointment.apptime}</td>
                              <td>{appointment.currentStatus}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                  <br />
                </div>

                <div
                  class="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                ></div>

                <div
                  class="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  <form class="form-group" method="post">
                    <div class="row">
                      <div class="col-md-4">
                        <label>Doctor Name:</label>
                      </div>
                      <div class="col-md-8">
                        <input
                          onChange={(e) => setDoctorName(e.target.value)}
                          type="text"
                          class="form-control"
                          name="doctorName"
                          onkeydown="return alphaOnly(event);"
                          required
                        />
                      </div>
                      <br />
                      <br />
                      <div class="col-md-4">
                        <label>Specialization:</label>
                      </div>
                      <div class="col-md-8">
                        <select
                          onChange={(e) => setSpecialization(e.target.value)}
                          name="specialization"
                          class="form-control"
                          id="special"
                          required="required"
                        >
                          <option
                            value="head"
                            name="specialization"
                            disabled
                            selected
                          >
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
                      <div class="col-md-4">
                        <label>Email ID:</label>
                      </div>
                      <div class="col-md-8">
                        <input
                          onChange={(e) => setEmailId(e.target.value)}
                          type="email"
                          class="form-control"
                          name="emailId"
                          required
                        />
                      </div>
                      <br />
                      <br />
                      <div class="col-md-4">
                        <label>Password:</label>
                      </div>
                      <div class="col-md-8">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          class="form-control"
                          name="password"
                          id="dpassword"
                          required
                        />
                      </div>
                      <br />
                      <br />
                      <div class="col-md-4">
                        <label>Confirm Password:</label>
                      </div>
                      <div class="col-md-8" id="cpass">
                        <input
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          type="password"
                          class="form-control"
                          onkeyup="check();"
                          name="confirmPassword"
                          id="cdpassword"
                          required
                        />
                        <span id="message"></span>{" "}
                      </div>
                      <br />
                      <br />

                      <div class="col-md-4">
                        <label>Consultancy Fees:</label>
                      </div>
                      <div class="col-md-8">
                        <input
                          onChange={(e) => setConsultancy(e.target.value)}
                          type="text"
                          class="form-control"
                          name="consultancyFees"
                          required
                        />
                      </div>
                      <br />
                      <br />
                    </div>
                    <input
                      type="submit"
                      name="docsub"
                      value="Add Doctor"
                      class="btn btn-primary"
                      onClick={sendDataToAPI}
                    />
                  </form>
                </div>

                <div
                  class="tab-pane fade"
                  id="list-settings1"
                  role="tabpanel"
                  aria-labelledby="list-settings1-list"
                >
                  <form class="form-group" method="post">
                    {/* {doctors.length &&
                      doctors.map((doctor) => {
                        return (
                          <> */}
                    <div class="row">
                      <div class="col-md-4">
                        <label>Email ID:</label>
                      </div>
                      <div class="col-md-8">
                        <input
                          type="email"
                          class="form-control"
                          name="emailId"
                          required
                        />
                      </div>
                      <br />
                      <br />
                    </div>
                    <input
                      type="submit"
                      name="docsub1"
                      value="Delete Doctor"
                      class="btn btn-primary"
                      onClick={onDelete(emailId)}
                    />
                    {/* </> */}
                    {/* // ); // })} */}
                  </form>
                </div>

                <div
                  class="tab-pane fade"
                  id="list-attend"
                  role="tabpanel"
                  aria-labelledby="list-attend-list"
                >
                  ...
                </div>

                <div
                  class="tab-pane fade"
                  id="list-mes"
                  role="tabpanel"
                  aria-labelledby="list-mes-list"
                >
                  <div class="col-md-8">
                    <form
                      class="form-group"
                      //   action="messearch.php"
                      method="post"
                    >
                      <div class="row">
                        <div class="col-md-10">
                          <input
                            type="text"
                            name="mes_contact"
                            placeholder="Enter Contact"
                            class="form-control"
                          />
                        </div>
                        <div class="col-md-2">
                          <input
                            type="submit"
                            name="mes_search_submit"
                            class="btn btn-primary"
                            value="Search"
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <table class="table table-hover">
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
        </div>
      </div>
    </div>
  );
};
export default Adminpanel;
