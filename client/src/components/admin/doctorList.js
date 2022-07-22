import React, { useEffect } from "react";
import { doctorList } from "../../redux/adminAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Doctor() {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.admin.doctorData);

  useEffect(() => {
    dispatch(doctorList());
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
                required
                type="text"
                name="doctor_contact"
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
      <table className="table table-hover">
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
                <td>{doctor.specialization}</td>
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
}
export default Doctor;
