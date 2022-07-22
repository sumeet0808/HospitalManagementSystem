import React, { useEffect } from "react";
import { appointmentList } from "../../redux/adminAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function AppointmentList() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.admin.appointment);

  useEffect(() => {
    dispatch(appointmentList());
  }, []);

  return (
    <div>
      <div className="col-md-8">
        <form className="form-group">
          <div className="row">
            <div className="col-md-10">
              <input
                type="text"
                name="app_contact"
                placeholder="Enter Contact"
                className="form-control"
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </form>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Appointment ID</th>
            <th scope="col">Patient ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Consultancy Fees</th>
            <th scope="col">Appointment Date</th>
            <th scope="col">Appointment Time</th>
            <th scope="col">Appointment Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length &&
            appointments.map((appointment) => {
              return (
                <tr>
                  <td>{appointment._id}</td>
                  <td>{appointment.pId}</td>
                  <td>{appointment.firstName}</td>
                  <td>{appointment.lastName}</td>

                  <td>{appointment.gender}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.contact}</td>
                  <td>{appointment.doctorName}</td>

                  <td>{appointment.consultancyFees}</td>
                  <td>{appointment.appDate}</td>
                  <td>{appointment.appTime}</td>
                  <td>{appointment.currentStatus}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
export default AppointmentList;
