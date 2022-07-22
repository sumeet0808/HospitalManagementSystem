import React, { useEffect } from "react";
import { prescribeList } from "../../redux/adminAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function PrescriptionList() {
  const dispatch = useDispatch();
  const prescribes = useSelector((state) => state.admin.prescribe);

  useEffect(() => {
    dispatch(prescribeList());
  }, []);

  return (
    <div className="col-md-8">
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Doctor</th>
              <th scope="col">Patient ID</th>
              <th scope="col">Appointment ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Appointment Date</th>
              <th scope="col">Appointment Time</th>
              <th scope="col">Disease</th>
              <th scope="col">Allergy</th>
              <th scope="col">Prescription</th>
            </tr>
          </thead>
          <tbody>
            {prescribes.map((prescribe) => {
              return (
                <tr>
                  <td>{prescribe.doctorName}</td>
                  <td>{prescribe.pId}</td>
                  <td>{prescribe._id}</td>
                  <td>{prescribe.firstName}</td>
                  <td>{prescribe.lastName}</td>
                  <td>{prescribe.appDate}</td>
                  <td>{prescribe.appTime}</td>
                  <td>{prescribe.Prescription.disease}</td>
                  <td>{prescribe.Prescription.allergies}</td>
                  <td>{prescribe.Prescription.prescription}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
}
export default PrescriptionList;
