import { makeStyles } from "@material-ui/styles";
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
  Button: {
    backgroundColor: theme.palette.primary.dark,
    marginLeft: theme.spacing(2),
    color: "white",
  },
}));
