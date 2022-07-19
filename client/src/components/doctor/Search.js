import React from "react";

const Search = () => {
  return (
    <div>
      <body 
      style={{backgroundColor:'#342ac1',color:'white',textAlign:'center',paddingTop:'50px'}}
      >
        <div class="container" 
        style={{textAlign:'left'}}
        >
          <center>
            <h3>Search Results</h3>
          </center>
          <br />
          <table class="table table-hover">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>'.$fname.'</td>
                <td>'.$lname.'</td>
                <td>'.$email.'</td>
                <td>'.$contact.'</td>
                <td>'.$appdate.'</td>
                <td>'.$apptime.'</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <a href="/" class="btn btn-light">
            Go Back
          </a>
        </div>
      </body>
    </div>
  );
};

export default Search;
