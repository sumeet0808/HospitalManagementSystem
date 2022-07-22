import React from "react";
const Dashboard = () => {
  return (
    <div>
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
                  <h4 className="StepTitle" style={{ marginTop: "5%" }}>
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
                  <h4 className="StepTitle" style={{ marginTop: "5%" }}>
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
                  <h4 className="StepTitle" style={{ marginTop: "5%" }}>
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
            <div className="col-sm-4" style={{ left: " 13%", marginTop: "5%" }}>
              <div className="panel panel-white no-radius text-center">
                <div className="panel-body">
                  <span className="fa-stack fa-2x">
                    <i className="fa fa-square fa-stack-2x text-primary"></i>
                    <i className="fa fa-list-ul fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="StepTitle" style={{ marginTop: "5%" }}>
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

            <div className="col-sm-4" style={{ left: "18%", marginTop: "5%" }}>
              <div className="panel panel-white no-radius text-center">
                <div className="panel-body">
                  <span className="fa-stack fa-2x">
                    <i className="fa fa-square fa-stack-2x text-primary"></i>
                    <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="StepTitle" style={{ marginTop: "5%" }}>
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
    </div>
  );
};
export default Dashboard;
