import React, { useEffect } from "react";
import { patientList } from "../../redux/adminAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function PatientList() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.admin.patientData);
  useEffect(() => {
    dispatch(patientList());
  }, []);

  return (
    <div>
      <div className="col-md-8">
        <form className="form-group">
          <div className="row">
            <div className="col-md-10">
              <input
                // value={contact}
                // onChange={(e) => setContact(e.target.value)}
                type="text"
                placeholder="Enter Contact"
                className="form-control"
              />
            </div>
            <div className="col-md-2">
              <button
                type="search"
                className="btn btn-primary"
                // onClick={getDataByID(contact)}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Patient Table */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Patient ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => {
            return (
              <tr>
                <td>{patient._id}</td>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.gender}</td>
                <td>{patient.emailId}</td>
                <td>{patient.phoneNo}</td>
                <td>{patient.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
export default PatientList;
