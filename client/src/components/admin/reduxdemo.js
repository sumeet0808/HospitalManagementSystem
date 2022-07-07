import { Fragment } from "react";
import { useDispatch } from "react-redux/es/exports";
import { doctorList } from "../../redux/action";
const GetData = () => {
  const dispatch = useDispatch();

  const ButtonClick = () => {
    dispatch(doctorList());
  };
  return (
    <Fragment>
      <button onClick={ButtonClick}>click me</button>
    </Fragment>
  );
};

export default GetData;
