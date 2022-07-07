import React, { useEffect } from "react";
import { doctorList } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const DoctorList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.auth.doctorData);
  console.log("----", doctors);
  useEffect(() => {
    dispatch(doctorList());
  }, []);

  return (
    <div
      class="tab-pane fade"
      id="list-doc"
      role="tabpanel"
      aria-labelledby="list-home-list"
    >
      <div class="col-md-8">
        <form class="form-group" action="doctorsearch.php" method="post">
          <div class="row">
            <div class="col-md-10">
              <input
                type="text"
                name="doctor_contact"
                placeholder="Enter Email ID"
                class="form-control"
              />
            </div>
            <div class="col-md-2">
              <input
                type="submit"
                name="doctor_search_submit"
                class="btn btn-primary"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Doctor Name</th>
            <th scope="col">Specialization</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Fees</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => {
            return (
              <tr>
                <td>{doctor.doctorName}</td>
                <td>{doctor.emailId}</td>
                <td>{doctor.emailId}</td>
                <td>{doctor.password}</td>
                <td>{doctor.consultancyFees}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default DoctorList;
