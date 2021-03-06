import React from "react";
import Dashboard from "./dashboard";
import GetDoctor from "./doctorList";
import PatientList from "./patientList";
import AppoinmentList from "./appointmentList";
import PrescriptionList from "./prescriptionList";
import AddDoctor from "./addDoctor";
import DeleteDoctor from "./deleteDoctor";
import QueryList from "./queryList";
function Adminpanel() {
  return (
    <div style={{ marginTop: "5%" }}>
      <h3
        className="h3"
        style={{
          marginLeft: "40%",
          paddingBottom: "20px",
          fontFamily: "IBM Plex Sans, sans-serif",
        }}
      >
        Welcome{" "}
      </h3>
      <div className="row">
        <div className="col-md-4" style={{ maxWidth: "25%", marginTop: "3%" }}>
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
            style={{ width: "980px" }}
          >
            {/* ----------------------------------------------------------Dashboard---------------------------------------------------------- */}

            <div
              className="tab-pane fade show active"
              id="list-dash"
              role="tabpanel"
              aria-labelledby="list-dash-list"
            >
              <Dashboard />
            </div>

            {/* --------------------------------------Doctor List--------------------------------------------- */}

            <div
              className="tab-pane fade"
              id="list-doc"
              role="tabpanel"
              aria-labelledby="list-home-list"
              href="/adminPanel/doctorList"
            >
              <GetDoctor />
            </div>

            {/* --------------------------------------Patient List--------------------------------------------- */}

            <div
              className="tab-pane fade"
              id="list-pat"
              role="tabpanel"
              aria-labelledby="list-pat-list"
            >
              {/* <PatientList /> */}
            </div>

            {/* --------------------------------------Appoinment List--------------------------------------------- */}
            <div
              className="tab-pane fade"
              id="list-app"
              role="tabpanel"
              aria-labelledby="list-pat-list"
            >
              {/* <AppoinmentList /> */}
            </div>

            {/* --------------------------------------Prescription List--------------------------------------------- */}

            <div
              className="tab-pane fade"
              id="list-pres"
              role="tabpanel"
              aria-labelledby="list-pres-list"
            >
              {/* <PrescriptionList /> */}
            </div>

            {/* --------------------------------------Add Doctor--------------------------------------------- */}

            <div
              className="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              {/* <AddDoctor /> */}
            </div>
            {/* --------------------------------------Delete Doctor--------------------------------------------- */}

            <div
              className="tab-pane fade"
              id="list-settings1"
              role="tabpanel"
              aria-labelledby="list-settings1-list"
            >
              {/* <DeleteDoctor /> */}
            </div>

            {/* --------------------------------------Queries--------------------------------------------- */}

            <div
              className="tab-pane fade"
              id="list-mes"
              role="tabpanel"
              aria-labelledby="list-mes-list"
            >
              {/* <QueryList /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Adminpanel;
