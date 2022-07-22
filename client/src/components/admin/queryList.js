import React, { useEffect } from "react";
import { queryList } from "../../redux/adminAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function QueryList() {
  const dispatch = useDispatch();
  const queries = useSelector((state) => state.admin.query);

  useEffect(() => {
    dispatch(queryList());
  }, []);

  return (
    <div>
      {" "}
      <div className="col-md-8">
        <form className="form-group">
          <div className="row">
            <div className="col-md-10">
              <input
                type="text"
                name="mes_contact"
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
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query) => {
            return (
              <tr>
                <td>{query.userName}</td>
                <td>{query.email}</td>
                <td>{query.contact}</td>
                <td>{query.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
export default QueryList;
