import React from "react";
import DoctorList from "./DoctorList";
const Dashboard = () => {
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
              <a class="nav-link" href="logout1.php">
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
                  href="#DoctorList"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
