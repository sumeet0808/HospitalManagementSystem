import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAppointment } from "../../redux/doctorAction";
import { getPrescription } from "../../redux/doctorAction";
// import Header from "./Header";
import axios from "axios";

function Doctor() {

  // const [appointments, setAppointment] = useState([]);

  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.doctor.appointmentData);
  const prescriptions = useSelector((state) => state.doctor.prescriptionData);

  // const [pid, setPID] = useState(null);

  useEffect(() => {
    dispatch(getAppointment());
    dispatch(getPrescription());
  }, []);


  const setData = (pId, disease,allergies,prescription) => {
    localStorage.setItem('PId', pId)
    localStorage.setItem('Disease', disease)
    localStorage.setItem('Allergies', allergies)
    localStorage.setItem('Prescription', prescription)
}

const cancelAppointment = (_id) => {
   axios.post(`http://localhost:5000/api/v1/appointment/cancelAppointmentStatusbyDoctor`, {
    "AppointmentId": _id,
    "Status": "2"
})        
.then(() => {
  dispatch(getAppointment());
  })
}

  return (
    <>
      <h3 className="h3">Welcome </h3>
   
        <div class="row">
          <div
            class="col-md-4"
            style={{ maxWidth: "18%", marginTop: "3%" }}
          >
            <div class="list-group" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
                href="#list-dash"
                role="tab"
                aria-controls="home"
                data-toggle="list"
              >
                Dashboard
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="#list-app"
                id="list-app-list"
                role="tab"
                data-toggle="list"
                aria-controls="home"
              >
                Appointments
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
            </div>
            <br />
          </div>

          <div
            class="col-md-8"
            style={{ marginTop: "3%" }}
          >
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
                    <div
                      class="col-sm-4"
                      style={{ left: "10%" }}
                    >
                      <div class="panel panel-white no-radius text-center">
                        <div class="panel-body">
                          <span class="fa-stack fa-2x">
                            {" "}
                            <i class="fa fa-square fa-stack-2x text-primary"></i>{" "}
                            <i class="fa fa-list fa-stack-1x fa-inverse"></i>{" "}
                          </span>
                          <h4
                            class="StepTitle"
                            style={{ marginTop: "5%" }}
                          >
                            {" "}
                            View Appointments
                          </h4>

                          <p class="links cl-effect-1">
                            <a href="#list-app" >
                              Appointment List
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-sm-4"
                      style={{ left: "15%" }}
                    >
                      <div class="panel panel-white no-radius text-center">
                        <div class="panel-body">
                          <span class="fa-stack fa-2x">
                            {" "}
                            <i class="fa fa-square fa-stack-2x text-primary"></i>{" "}
                            <i class="fa fa-list-ul fa-stack-1x fa-inverse"></i>{" "}
                          </span>
                          <h4
                            class="StepTitle"
                            style={{ marginTop: "5%" }}
                          >
                            {" "}
                            Prescriptions
                          </h4>

                          <p class="links cl-effect-1">
                            <a
                              href="#list-pres"
                              onclick="clickDiv('#list-pres-list')"
                            >
                              Prescription List
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
                id="list-app"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Patient ID</th>
                      {/* <th scope="col">Appointment ID</th> */}
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Appointment Date</th>
                      <th scope="col">Appointment Time</th>
                      <th scope="col">Current Status</th>
                      <th scope="col">Action</th>
                      <th scope="col">Prescribe</th>
                    </tr>
                  </thead>

                  <tbody>
                    {appointments.length &&
                      appointments.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th>{item.pId}</th>
                            {/* <th>{item.ID}</th> */}
                            <th>{item.firstName}</th>
                            <th>{item.lastName}</th>
                            <th>{item.gender}</th>
                            <th>{item.email}</th>
                            <th>{item.contact}</th>
                            <th>{item.appDate}</th>
                            <th>{item.appTime}</th>
                            <th>{item.currentStatus}</th>

                            <td>
                              <a
                                // href=" "
                                // onClick="return confirm('Are you sure you want to cancel this appointment ?')"
                                title="Cancel Appointment"
                                tooltip-placement="top"
                                tooltip="Remove"
                                onClick={() => cancelAppointment(item._id)}
                              >
                                <button class="btn btn-danger" >Cancel</button>
                              </a>
                            </td>

                            <td>
                              <a
                                href="/Prescription"
                                tooltip-placement="top"
                                tooltip="Remove"
                                title="prescribe"
                              >
                                <button class="btn btn-success" onClick={() => setData(item.pId, item.disease, item.allergies, item.prescription)}>
                                  Prescibe
                                </button>
                              </a>
                            </td>
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
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Patient ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      {/* <th scope="col">Appointment ID</th> */}
                      <th scope="col">Appointment Date</th>
                      <th scope="col">Appointment Time</th>
                      <th scope="col">Disease</th>
                      <th scope="col">Allergy</th>
                      <th scope="col">Prescribe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prescriptions.length &&
                      prescriptions.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th>{item.pId}</th>
                            {/* <th>{item.ID}</th> */}
                            <th>{item.firstName}</th>
                            <th>{item.lastName}</th>
                            <th>{item.appDate}</th>
                            <th>{item.appTime}</th>
                            <th>{item.Prescription.disease}</th>
                            <th>{item.Prescription.allergies}</th>
                            <th>{item.Prescription.prescription}</th>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
   </>
  );
}

export default Doctor;
