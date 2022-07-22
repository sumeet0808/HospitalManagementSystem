import React, { useState } from "react";
import axios from "axios";
import { doctorList } from "../../redux/adminAction";
import { useDispatch } from "react-redux";
import config from "../../config";
function DeleteDoctor() {
  const [emailId, setEmailId] = useState("");
  const dispatch = useDispatch();

  const onDelete = (emailId) => {
    axios
      .delete(`${config.BASE_URL}doctor/deleteDoctorByEmail/${emailId}`)
      .then(() => {
        dispatch(doctorList());
      });
    // console.log("Record Deleted Successfully");
    // console.log(err.message);
  };

  return (
    <div>
      <form className="form-group">
        <div className="row">
          <div className="col-md-4">
            <label>Email ID:</label>
          </div>
          <div className="col-md-8">
            <input
              onChange={(e) => setEmailId(e.target.value)}
              type="email"
              className="form-control"
              required
            />
          </div>
          <br />
          <br />
        </div>
        <button className="btn btn-primary" onClick={() => onDelete(emailId)}>
          Delete Doctor
        </button>
      </form>
    </div>
  );
}
export default DeleteDoctor;
