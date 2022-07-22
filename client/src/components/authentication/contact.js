import React, { useState } from "react";
import axios from "axios";
// import Header from './header'
import config from "../../config";
function Contact() {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [message, setmessage] = useState("");

  const handleSendMessgae = (e) => {
    e.preventDefault();
    axios
      .post(`${config.BASE_URL}contact/createQueries`, {
        userName,
        email,
        contact,
        message,
      })
      .then(() => {
        alert("Sent message Sucessfully!!!!!");
      });
  };
  return (
    <div>
      <div>
        {/* <Header /> */}
      </div>
      <div
        class="p-3 mb-8 bg-light text-dark"
        style={{ marginTop: "3%", marginBottom: "60px", color: "#34495E" }}
        // style="margin-top:60px;margin-bottom:60px;color:#34495E;"
      >
        <div class="row">
          <div
            class="col-md-7"
            style={{ paddingLeft: "180px" }}
            // style="padding-left: 180px; "
          >
            <div
            // style={{ webKitAnimation: "mover 2s infinite alternate", animation: "mover 1s infinite alternate" }}
            // style="-webkit-animation: mover 2s infinite alternate;
            // animation: mover 1s infinite alternate;"
            >
              <img
                src="images/ambulance1.png"
                alt=""
                style={{
                  width: "20%",
                  paddingLeft: "40px",
                  marginTop: "150px",
                  marginLeft: "45px",
                  marginBottom: "15px",
                }}
                // style="width: 20%;padding-left: 40px;margin-top: 150px;margin-left: 45px;margin-bottom:15px"
              ></img>
            </div>

            <div
              style={{ color: "white" }}
              // style="color: white;"
            >
              <h4
                style={{
                  fontFamily: "IBM Plex Sans', sans-serif",
                  color: "grey",
                }}
                // style="font-family: 'IBM Plex Sans', sans-serif;"
              >
                {" "}
                We are here for you!
              </h4>
            </div>
          </div>

          <div
            class="col-md-4"
            style={{ marginTop: "5%", right: "8%" }}
            // style="margin-top: 5%;right: 8%"
          >
            <div
              class="card"
              style={{ fontFamily: "IBM Plex Sans', sans-serif" }}
              // style="font-family: 'IBM Plex Sans', sans-serif;"
            >
              <div class="card-body">
                <center>
                  <i
                    class="fa fa-hospital-o fa-3x"
                    aria-hidden="true"
                    style={{ color: "#0062cc" }}
                    // style="color:#0062cc"
                  ></i>
                </center>
                <h3
                  style={{ marginTop: "10%" }}
                  // style="margin-top: 10%"
                >
                  Drop Us a Message
                </h3>
                <br></br>
                <form>
                  {/* <form class="form-group" method="POST" action="func.php"> */}
                  <div
                    class="row"
                    style={{ marginTop: "10%" }}
                    // style="margin-top: 10%"
                  >
                    <div class="col-md-4">
                      <label>Name: </label>
                    </div>
                    <div class="col-md-8">
                      <input
                        type="text"
                        name="userName"
                        class="form-control"
                        placeholder="enter name"
                        onChange={(e) => setuserName(e.target.value)}
                        required
                      />
                    </div>
                    <br></br>
                    <div class="col-md-4" style={{ marginTop: "8%" }}>
                      <label>Email-ID: </label>
                    </div>
                    <div class="col-md-8" style={{ marginTop: "8%" }}>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="enter email ID"
                        onChange={(e) => setemail(e.target.value)}
                        required
                      />
                    </div>
                    <br></br>
                    <div class="col-md-4" style={{ marginTop: "8%" }}>
                      <label>Contact: </label>
                    </div>
                    <div class="col-md-8" style={{ marginTop: "8%" }}>
                      <input
                        type="string"
                        class="form-control"
                        name="contact"
                        placeholder="enter contact"
                        onChange={(e) => setcontact(e.target.value)}
                        required
                      />
                    </div>
                    <br></br>
                    <div class="col-md-4" style={{ marginTop: "8%" }}>
                      <label>Message: </label>
                    </div>
                    <div class="col-md-8" style={{ marginTop: "8%" }}>
                      <form border="0">
                        <textArea
                          class="form-control"
                          rows="7"
                          cols="30"
                          name="message"
                          placeholder="enter message"
                          onChange={(e) => setmessage(e.target.value)}
                          required
                        ></textArea>
                      </form>
                    </div>
                    <br></br>
                  </div>
                  <div class="row">
                    <div
                      class="col-md-4"
                      style={{ paddingLeft: "160px", marginTop: "10%" }}
                      // style="padding-left: 160px;margin-top: 10%"
                    >
                      <center>
                        <input
                          type="submit"
                          id="inputbtn"
                          name="patsub"
                          value="Send Message"
                          class="btn btn-primary"
                          onClick={handleSendMessgae}
                        />
                      </center>
                    </div>
                    <div
                      class="col-md-8"
                      style={{ marginTop: "10%" }}
                      // style="margin-top: 10%"
                    ></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    //   </div>
    // </div>
  );
}

export default Contact;
