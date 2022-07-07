import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialAuthState = {
  doctorData: [],
  patientData: [],
  appointment: [],
  prescribe: [],
  query: [],
  Doctor: [],
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    getDoctorData(state, action) {
      // console.log("getDoctorData action...", state, action);
      state.doctorData = action.payload.doctorData;
    },
    getPatientData(state, action) {
      // console.log("getPatientData action...", state, action);
      state.patientData = action.payload.patientData;
    },
    getAppointmentData(state, action) {
      // console.log("getPatientData action...", state, action);
      state.appointment = action.payload.appointment;
    },
    getPrescribeData(state, action) {
      // console.log("getPatientData action...", state, action);
      state.prescribe = action.payload.prescribe;
    },
    getQueryData(state, action) {
      // console.log("getPatientData action...", state, action);
      state.query = action.payload.query;
    },
    addDoctorDetails(state, action) {
      state.Doctor = state.Doctor.push(action.payload);
    },
    dataNotFound(state, action) {
      state.notification = {
        message: action.payload.message,
      };
    },
  },
});

export const doctorList = () => {
  return async (dispatch) => {
    const getDoctorList = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/doctors`)
        .then((getUser) => {
          // console.log("dat=====", authActions, getUser.data.doctor);
          dispatch(
            authActions.getDoctorData({ doctorData: getUser.data.doctor })
          );
        });
    };
    try {
      await getDoctorList();
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

export const patientList = () => {
  return async (dispatch) => {
    const getPatientList = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/patient`)
        .then((getUser) => {
          // console.log("patient=====", authActions, getUser.data.patient);
          dispatch(
            authActions.getPatientData({ patientData: getUser.data.patient })
          );
        });
    };
    try {
      await getPatientList();
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

export const appointmentList = () => {
  return async (dispatch) => {
    const getAppointmentList = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/appointment`)
        .then((getUser) => {
          // console.log("appointmnet=====", getUser.data.data.appointment);
          dispatch(
            authActions.getAppointmentData({
              appointment: getUser.data.data.appointment,
            })
          );
        });
    };
    try {
      await getAppointmentList();
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

export const prescribeList = () => {
  return async (dispatch) => {
    const getPrescribeList = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/prescribe`)
        .then((getUser) => {
          // console.log("appointmnet=====", getUser.data.data.appointment);
          dispatch(
            authActions.getPrescribeData({
              prescribe: getUser.data.prescribe,
            })
          );
        });
    };
    try {
      await getPrescribeList();
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

export const queryList = () => {
  return async (dispatch) => {
    const getQueryList = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/contact`)
        .then((getUser) => {
          // console.log("appointmnet=====", getUser.data.data.appointment);
          dispatch(
            authActions.getQueryData({
              query: getUser.data.contacts,
            })
          );
        });
    };
    try {
      await getQueryList();
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

export const addDoctor = (data) => {
  return async (dispatch) => {
    const postDoctor = async () => {
      const response = await axios
        .post("http://localhost:5000/api/v1/doctors", data)
        .then(() => {
          console.log("appointmnet=====", response.data);
          dispatch(authActions.addDoctorDetails({ Doctor: response }));
        });
    };
    try {
      await postDoctor();
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};
export const authActions = authSlice.actions;
export default authSlice;
//import these actions in your components where you need,
//  example ===>>>   const exceuteActions = () => { dispatch(authActions.increment(pass the payload if needed))};
