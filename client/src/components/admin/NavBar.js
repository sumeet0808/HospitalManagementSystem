import Wrapper from "../../assets/navbar.js";
import { makeStyles } from "@material-ui/core";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import DoctorList from "./DoctorList.js";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#0d8ebd",
    border: 0,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  Border: {
    border: " 1px ridge ",
  }, // or borderTop: '1px solid red'
  container: {
    minHeight: "100vh",
    display: "flex",
  },
  faUser: {
    marginTop: "2%",
    width: "40px",
    height: "25px",
  },
  label: { marginTop: "-1%" },
  hover: {
    color: "white",
    flex: "flex-end",
    background: "#0d8ebd",
    borderColor: "#0d8ebd",
    marginLeft: "5px",
    "&:hover": {
      background: "#0c9bcf",
    },
  },
  nav: {
    paddingTop: "8px",
    paddingBottom: "9px",
    paddingLeft: "2px",
    paddingRight: "83px",
  },
  Button: {
    backgroundColor: theme.palette.primary.dark,
    marginLeft: theme.spacing(2),
    color: "white",
  },
}));

const NavBar = () => {
  const links = [
    { id: 1, text: "Dashboard", path: "/", icon: <Dashboard /> },
    { id: 2, text: "Doctor List", path: "/Doctorlist", icon: <DoctorList /> },
    { id: 3, text: "Patient List", path: "/Doctorlist", icon: <DoctorList /> },
    {
      id: 4,
      text: "Appointment List",
      path: "/Doctorlist",
      icon: <DoctorList />,
    },
    {
      id: 2,
      text: "Prescription List",
      path: "/Doctorlist",
      icon: <DoctorList />,
    },
    { id: 3, text: "Add Doctor ", path: "/Doctorlist", icon: <DoctorList /> },
    { id: 4, text: "Delete Doctor", path: "/Doctorlist", icon: <DoctorList /> },
    { id: 2, text: "Doctor List", path: "/Doctorlist", icon: <DoctorList /> },
    { id: 3, text: "Queries ", path: "/Doctorlist", icon: <DoctorList /> },
  ];
  const classes = useStyles();
  const [isDashBoard, setIsDashboard] = useState(false);
  return (
    <div>
      <Grid item sm={12} className={classes.navbar}>
        <Grid item sm={3}>
          <BsFillPersonPlusFill className={classes.faUser} />
          <span className={classes.label}> Global Hospital</span>

          <button className={classes.hover}>
            <FiLogOut />
            Logout
          </button>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        style={{
          marginTop: "1%",
        }}
      >
        <h2>Welcome Perceptionist</h2>
      </Grid>
      <Grid item sm={12} xs={12} style={{ display: "flex" }}>
        <Grid item sm={2} xs={4}>
          <BrowserRouter>
            <div>
              <a href="/Dashboard.js">Dashboard</a>
            </div>

            {/* <Table style={{ marginLeft: "25px" }}>
              <TableBody>
                <TableRow>
                  <TableCell
                  // style={{
                  //   alignContent: "start",
                  //   padding: "6px 2px 7px 1px",
                  // }}
                  >
                  </TableCell>
                </TableRow>
              </TableBody>

              {/* <TableBody>
                <TableRow>
                  <TableCell
                    style={{
                      alignContent: "start",
                      padding: "6px 2px 7px 1px",
                    }}
                  >
                    <NavLink
                      to="/"
                      className={classes.nav}
                      style={({ isActive }) => ({
                        background: isActive ? "blue" : "white",
                        color: isActive ? "white" : "black",
                      })}
                    >
                      Dashboard
                    </NavLink>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{
                      alignContent: "start",
                      padding: "6px 2px 7px 1px",
                    }}
                  >
                    <NavLink
                      to="/Doctorlist"
                      className={classes.nav}
                      style={({ isActive }) => ({
                        background: isActive ? "blue" : "white",
                        color: isActive ? "white" : "black",
                      })}
                    >
                      Doctor List
                    </NavLink>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ padding: "6px 0px 6px 1px" }}
                    className={classes.Border}
                  >
                    <NavLink
                      to="/"
                      className={classes.nav}
                      style={({ isActive }) => ({
                        background: isActive ? "blue" : "white",
                        color: isActive ? "white" : "black",
                      })}
                    >
                      Patient List
                    </NavLink>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ margin: "6px 2px 7px 1px" }}
                    className={classes.Border}
                  >
                    <NavLink
                      to="/Doctorlist"
                      className={classes.nav}
                      style={({ isActive }) => ({
                        background: isActive ? "blue" : "white",
                        color: isActive ? "white" : "black",
                      })}
                    >
                      AppointmentDetails
                    </NavLink>
                  </TableCell>
                </TableRow>{" "}
                <TableRow>
                  <TableCell
                    style={{ padding: "6px 2px 7px 1px" }}
                    className={classes.Border}
                  >
                    <NavLink
                      to="/"
                      className={classes.nav}
                      style={({ isActive }) => ({
                        background: isActive ? "blue" : "white",
                        color: isActive ? "white" : "black",
                      })}
                    >
                      Perception List
                    </NavLink>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ padding: "6px 2px 7px 1px" }}
                    className={classes.Border}
                  >
                    <NavLink
                      to="/"
                      className={classes.nav}
                      style={({ isActive }) => ({
                        background: isActive ? "blue" : "white",
                        color: isActive ? "white" : "black",
                      })}
                    >
                      Add Doctor
                    </NavLink>
                  </TableCell>
                </TableRow>{" "}
                <TableRow>
                  <TableCell
                    style={{ padding: "6px 2px 7px 1px" }}
                    className={classes.Border}
                  >
                    <NavLink
                      to="/"
                      className={classes.nav}
                      style={({ isActive }) => ({
                        background: isActive ? "blue" : "white",
                        color: isActive ? "white" : "black",
                      })}
                    >
                      Delete Doctor
                    </NavLink>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ padding: "6px 2px 7px 1px" }}
                    className={classes.Border}
                  >
                    <NavLink
                      to="/"
                      className={classes.nav}
                      style={({ isActive }) => ({
                        background: isActive ? "blue" : "white",
                        color: isActive ? "white" : "black",
                      })}
                    >
                      Queries
                    </NavLink>
                  </TableCell>
                </TableRow>
              </TableBody> */}
            {/* </Table>  */}

            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/DoctorList" element={<DoctorList />} />
            </Routes>
          </BrowserRouter>
        </Grid>
        <Grid item sm={7} style={{ marginLeft: "20px" }}>
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  );
};
export default NavBar;
