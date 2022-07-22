import React from 'react'
import { useState } from "react";
import axios from "axios";


const ContactSearch = () => {
  const [apiData, setApiData] = useState([]);
  const getData = (contact) => {
    axios
      .get(`http://localhost:20000/getAllAppointment/${contact}`)
      .then((getData) => {
        setApiData(getData.data.data.appointments);
      });

    console.log(".........", apiData);
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="mainNav"
      >
        <div class="container">
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
    </div>
  );
};

export default ContactSearch;
