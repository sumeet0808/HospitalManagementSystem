import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

function Prescription() {
  const [Disease, setDisease] = useState("");
  const [Allergies, setAllergies] = useState("");
  const [Prescription, setPrescription] = useState("");

  const [pid, setPID] = useState(null);
  const sendDataToAPI = () => {
    axios
      .post(`${config.BASE_URL}prescribe/createPrescription/${pid}`, {
        Disease,
        Allergies,
        Prescription,
      })
      .then(() => {
        // eslint-disable-next-line no-restricted-globals
        history.push("/");
      });
  };

  useEffect(() => {
    setDisease(localStorage.getItem("disease"));
    setAllergies(localStorage.getItem("allergies"));
    setPrescription(localStorage.getItem("prescription"));

    setPID(localStorage.getItem("PID"));
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <a class="navbar-brand" href="/">
          <i class="fa fa-user-plus" aria-hidden="true"></i> Global Hospital{" "}
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
              <a class="nav-link" href="/">
                <i class="fa fa-sign-out" aria-hidden="true"></i>Logout
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                <i class="fa fa-sign-out" aria-hidden="true"></i>Back
              </a>
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
              fontFamily: "'IBM Plex Sans' sans-serif",
            }}
          >
            {" "}
            Welcome
          </h3>

          <div
            class="tab-pane"
            id="list-pres"
            role="tabpanel"
            aria-labelledby="list-pres-list"
          >
            <form
              class="form-group"
              name="prescribeform"
              href="/"
              // method="post"
              // action="Doctor"
            >
              <div class="row">
                <div class="col-md-4">
                  <label>Disease:</label>
                </div>
                <div class="col-md-8">
                  <textarea
                    id="disease"
                    cols="86"
                    rows="5"
                    name="disease"
                    required
                    value={Disease}
                    onChange={(e) => setDisease(e.target.value)}
                  ></textarea>
                </div>
                <br />
                <br />
                <br />

                <div class="col-md-4">
                  <label>Allergies:</label>
                </div>
                <div class="col-md-8">
                  <textarea
                    id="allergy"
                    cols="86"
                    rows="5"
                    name="allergy"
                    required
                    value={Allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                  ></textarea>
                </div>
                <br />
                <br />
                <br />
                <div class="col-md-4">
                  <label>Prescription:</label>
                </div>
                <div class="col-md-8">
                  <textarea
                    id="prescription"
                    cols="86"
                    rows="10"
                    name="prescription"
                    required
                    value={Prescription}
                    onChange={(e) => setPrescription(e.target.value)}
                  ></textarea>
                </div>
                <br />
                <br />
                <br />
                <input
                  type="hidden"
                  name="fname"
                  value="<?php echo $fname ?>"
                />
                <input
                  type="hidden"
                  name="lname"
                  value="<?php echo $lname ?>"
                />
                <input
                  type="hidden"
                  name="appdate"
                  value="<?php echo $appdate ?>"
                />
                <input
                  type="hidden"
                  name="apptime"
                  value="<?php echo $apptime ?>"
                />
                <input type="hidden" name="pid" value="<?php echo $pid ?>" />
                <input type="hidden" name="ID" value="<?php echo $ID ?>" />
                <br />
                <br />
                <br />
                <br />
                <input
                  type="submit"
                  name="prescribe"
                  value="Prescribe"
                  class="btn btn-primary"
                  style={{ marginLeft: "40px" }}
                  onClick={sendDataToAPI}
                />
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prescription;
