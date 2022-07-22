import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import Header from "./Header";
import moment from "moment";
import { patientList } from "../../redux/patientAction";
import "../LayoutStyle.css";

const Patient = () => {
  const data = [
    { name: "General" },
    { name: "Cardiologist" },
    { name: "Pediatrician" },
    { name: "Neurologist" },
  ];

  //////////////////////////SpecializationMockAPI///////////////////////////////

  const [specialization, setSpecialization] = useState([]);
  const [specializationid, setSpecializationid] = useState([]);

  // useEffect(() => {
  //   const getSpecialization = async () => {
  //     const resspecialization = await fetch(
  //       "https://62cfc2761cc14f8c087cb329.mockapi.io/specialization"
  //     );
  //     const resspec = await resspecialization.json();
  //     setSpecialization(await resspec);
  //   };
  //   getSpecialization();
  // }, []);

  // const handlespecialization = (event) => {
  //   const getspecializationid = event.target.value;
  //   setSpecializationid(getspecializationid);
  // };
  //////////////////////////////////////////////////////////////////////

  //...................For Appointment History.............................

  const dispatch = useDispatch();
  const docList = useSelector((state) => state.auth.doctorData);

  const [patients, setPatients] = useState([]);

  //..................For Booking Appointment.....................

  // const [specialization, setSpecialization] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [consultancyFees, setConsultancyFees] = useState("");
  const [appDate, setDate] = useState("");
  const [appTime, setTime] = useState("");
  //const [history, setHistory] = useState("");
  const [some, setSome] = useState("");
  const [getId, setGetId] = useState("");
  const [allData, setallData] = useState([]);

  // const [doctorName, setDoctorName] = useState("");
  // const [currentStatus, setCurrentStatus] = useState("");

  ////////////////////////////////get doctor/////////////////////////////////////////

  const getDoctor = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/doctor/getAllDoctors`
    );
    let doctorData = await response.data.data;
    setSome(doctorData);
    doctorData
      .filter((item) => {
        return item.doctorName === doctorName;
      })
      .map(({ consultancyFees }) => setConsultancyFees(consultancyFees));
  };

  useEffect(() => {
    // dispatch(patientList());
    // dispatch(getDoctor());
    getDoctor();
  }, [doctorName]);

  // const handleRowData = async () => {
  //   console.log("...........", getId);
  //   const rowdata = await axios.get(
  //     `http://localhost:5000/api/v1/appointment/getappointment/${getId}`
  //   );
  //   console.log("rowdata", rowdata);
  //   const rowDataById = await rowdata.data;
  //   console.log("rowDataById", rowDataById);
  //   setHistory(rowDataById);
  // };

  const setAppointmentData = async () => {
    const response = await axios
      .post(`http://localhost:5000/api/v1/appointment/createAppointment`, {
        specialization,
        doctorName,
        consultancyFees,
        appDate,
        appTime,
        currentStatus: "Active",
        doctorStatus: "Active",
        pId: "12345",
        firstName: "jyo",
        lastName: "patil",
        gender: "female",
        email: "jp@gmail.com",
        contact: "1234567890",
      })
      .then((res) => {
        if (res.status === 200) {
          // console.log("created", res.data.appointment);
          alert("Appointment Booked Successfully!!");
        }
        setallData(res.data);
        setSpecialization("");
        setDoctorName("");
        setConsultancyFees("");
        setDate("");
        setTime("");
      });
  };
  const result = Object.keys(allData).map((key) => allData[key]);
  
  // console.log("result", result);
  // const findId = result.map(({ _id }) => setGetId(_id));
  // // console.log("findId", findId);
  // console.log("findId", getId);

  // const getDataById = async () => {
  //   const response = await axios
  //     .get(
  //       `http://localhost:5000/api/v1/appointment/getAppointmentByPatientId/${getId}`
  //     )
  //     .then((res) => setHistory(res.data));
  //   console.log("getId", history);
  // };

  //..........................For Date............................................
  const disablePastDate = () => {
    var today, dd, mm, yyyy;
    today = new Date();
    dd = (today.getDate() + 1).toString().padStart(2, "0");
    mm = (today.getMonth() + 1).toString().padStart(2, "0");
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  ///////////////////cancelAppointmentStatusByPatient///////////////////////

  const setData = (_id) => {
    localStorage.setItem("_id", _id);
  };

  const getData = () => {
    axios
      .get(`http://localhost:5000/api/v1/appointment/getallappointments`)
      .then((getData) => {
        setPatients(getData.data);
      });
  };

  const onCancel = async (_id) => {
    await axios
      .post(
        `http://localhost:5000/api/v1/appointment/cancelAppointmentStatusByPatient`,
        {
          AppointmentId: _id,
          currentStatus: "2",
        }
      )
      .then(() => {
        // console.log("szxdcgbhjm");
        getData();
      });
  };

  return (
    <>
      <h3 className="h3">Welcome </h3>
      {/************************MENU-ITEMS*************************/}
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
              id="list-home-list"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
            >
              Book Appointment
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#app-hist"
              id="list-pat-list"
              role="tab"
              data-toggle="list"
              aria-controls="home"
              // onClick={() => handleRowData()}
            >
              Appointment History
            </a>
          </div>
          <br />
        </div>

        {/************************BOXES*************************/}
        <div class="col-md-8" style={{ marginTop: "3%" }}>
          <div
            class="tab-content"
            id="nav-tabContent"
            style={{ width: "950px" }}
          >
            <div
              class="tab-pane fade  show active"
              id="list-dash"
              role="tabpanel"
              aria-labelledby="list-dash-list"
            >
              <div class="container-fluid container-fullw bg-white">
                <div class="row">
                  <div class="col-sm-4" style={{ left: "5%" }}>
                    <div class="panel panel-white no-radius text-center">
                      <div class="panel-body">
                        <span class="fa-stack fa-2x">
                          {" "}
                          <i class="fa fa-square fa-stack-2x text-primary"></i>{" "}
                          <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>{" "}
                        </span>
                        <h4 class="StepTitle" style={{ marginTop: "5%" }}>
                          {" "}
                          Book My Appointment
                        </h4>

                        <p class="links cl-effect-1">
                          <a
                            href="#list-home"
                            onclick="clickDiv('#list-home-list')"
                          >
                            Book Appointment
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4" style={{ left: "10%" }}>
                    <div class="panel panel-white no-radius text-center">
                      <div class="panel-body">
                        <span class="fa-stack fa-2x">
                          {" "}
                          <i class="fa fa-square fa-stack-2x text-primary"></i>{" "}
                          <i class="fa fa-paperclip fa-stack-1x fa-inverse"></i>{" "}
                        </span>
                        <h4 class="StepTitle" style={{ marginTop: "5%" }}>
                          My Appointments
                        </h4>

                        <p class="cl-effect-1">
                          <a
                            href="#app-hist"
                            onclick="clickDiv('#list-pat-list')"
                          >
                            View Appointment History
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/**********************************BOOKING-PAGE***************************** */}
            <div
              class="tab-pane fade"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <div class="container-fluid">
                <div class="card">
                  <div class="card-body">
                    <center>
                      <h4>Create an appointment</h4>
                    </center>
                    <br />
                    <form class="form-group">
                      <div class="row">
                        <div class="col-md-4">
                          <label for="spec">Specialization:</label>
                        </div>
                        <div class="col-md-8">
                          <select
                            name="spec"
                            class="form-control"
                            id="spec"
                            required="required"
                            value={specialization}
                            onChange={
                              (e) => setSpecialization(e.target.value)
                              // handlespecialization(e)
                            }
                          >
                            <option value="string" selected>
                              Select Specialization
                            </option>

                            {data.map((d) => (
                              <option> {d.name} </option>
                            ))}

                            {/* {specialization.map((getspec, index) => (
                                  <option
                                    key={index}
                                    value={getspec.specialization_id}
                                  >
                                    {getspec.specialization_name}
                                  </option>
                                ))} */}
                          </select>
                        </div>
                        <br />
                        <br />

                        <div class="col-md-4">
                          <label for="doctor">Doctors:</label>
                        </div>
                        <div class="col-md-8">
                          <select
                            class="form-control"
                            id="doctor"
                            required="required"
                            onChange={(e) => setDoctorName(e.target.value)}
                          >
                            <option value="string" selected>
                              Select Doctor
                            </option>

                            {some &&
                              some.map((items, index) => {
                                return (
                                  <option value={items.doctorName} key={index}>
                                    {items.doctorName}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                        <br />
                        <br />

                        <div class="col-md-4">
                          <label for="docFees">Consultancy Fees</label>
                        </div>
                        <div class="col-md-8">
                          <input
                            class="form-control"
                            type="text"
                            name="docFees"
                            id="docFees"
                            readonly="readonly"
                            value={consultancyFees}
                            // required="required"
                            // onChange={(e) => setDocFees(e.target.value)}
                          />
                        </div>
                        <br />
                        <br />
                        <br />

                        <div class="col-md-4">
                          <label>Appointment Date</label>
                        </div>
                        <div class="col-md-8">
                          <input
                            type="date"
                            class="form-control datepicker"
                            name="appdate"
                            required="required"
                            min={disablePastDate()}
                            onChange={(e) => setDate(e.target.value)}
                            value={appDate}
                          />
                        </div>
                        <br />
                        <br />

                        <div class="col-md-4">
                          <label>Appointment Time</label>
                        </div>
                        <div class="col-md-8">
                          <select
                            name="apptime"
                            class="form-control"
                            id="apptime"
                            required="required"
                            value={appTime}
                            onChange={(e) => setTime(e.target.value)}
                          >
                            <option value="" disabled selected>
                              Select Time
                            </option>
                            <option value="08:00:00">8:00 AM</option>
                            <option value="10:00:00">10:00 AM</option>
                            <option value="12:00:00">12:00 PM</option>
                            <option value="14:00:00">2:00 PM</option>
                            <option value="16:00:00">4:00 PM</option>
                          </select>
                        </div>
                        <br />
                        <br />

                        <div class="col-md-4">
                          <button
                            id="button"
                            type="button"
                            class="btn btn-primary"
                            onClick={setAppointmentData}
                          >
                            Create New Entry
                          </button>
                        </div>
                        <div class="col-md-8"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <br />
            </div>

            <div
              class="tab-pane fade"
              id="app-hist"
              role="tabpanel"
              aria-labelledby="list-pat-list"
            >
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Consultancy Fees</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Appointment Time</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {result.length > 0 &&
                    result.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.doctorName}</td>
                          <td>{item.consultancyFees}</td>
                          <td>{moment(item.appDate).format("YYYY-MM-DD")}</td>
                          <td>{item.appTime}</td>
                          <td>{item.currentStatus}</td>
                          <td>
                            <a href=" ">
                              <button
                                // onClick={onCancel}
                                onClick={() => onCancel(item._id)}
                                class="btn btn-danger"
                              >
                                Cancel
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
            {/* Prescription Table------------------------------------------------------------------------------------------- */}
            <div
              class="tab-pane fade"
              id="list-pres"
              role="tabpanel"
              aria-labelledby="list-pres-list"
            >
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Appointment ID</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Appointment Time</th>
                    <th scope="col">Diseases</th>
                    <th scope="col">Allergies</th>
                    <th scope="col">Prescriptions</th>
                    <th scope="col">Bill Payment</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
