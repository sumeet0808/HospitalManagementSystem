import React, { useState } from "react";
import axios from "axios";
import config from "../../config";
const Header = () => {
  const [apiData, setApiData] = useState([]);
  const getData = (contact) => {
    axios
      .get(`${config.BASE_URL}getAllAppointment/${contact}`)
      .then((getData) => {
        setApiData(getData.data.data.appointments);
      });

    console.log(".........", apiData);
  };
  return (
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
            <a class="nav-link" href="/"></a>
          </li>
        </ul>
        <form
          class="form-inline my-2 my-lg-0"

          // method="post"
          // action="search.php"
        >
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Enter contact number"
            aria-label="Search"
            // name="contact"
            onChange={apiData}
          />
          <input
            type="submit"
            href="Search"
            class="btn btn-outline-light"
            id="inputbtn"
            // name="search_submit"
            // value="Search"
            onClick={getData}
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
