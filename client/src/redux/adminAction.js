import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";
const initialAuthState = {
  doctorData: [],
  patientData: [],
  patientByContact: [],
  appointment: [],
  prescribe: [],
  query: [],
  Doctor: [],
};
const adminSlice = createSlice({
  name: "admin",
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
    getPatientByContact(state, action) {
      // console.log("getPatientData action...", state, action);
      state.patientByContact = action.payload.patientByContact;
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
      state.Doctor = {
        doctorName: action.payload.doctorName,
        specialization: action.payload.specialization,
        emailId: action.payload.emailId,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
        consultancyFees: action.payload.consultancyFees,
      };
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
        .get(`${config.BASE_URL}doctor/getAllDoctors`)
        .then((getUser) => {
          // console.log("dat=====", adminActions, getUser.data.doctor);
          dispatch(
            adminActions.getDoctorData({ doctorData: getUser.data.doctor })
          );
        });
    };
    try {
      await getDoctorList();
    } catch (error) {
      dispatch(
        adminActions.dataNotFound({
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
        .get(`${config.BASE_URL}patient/getAllPatients`)
        .then((getUser) => {
          // console.log("patient=====", adminActions, getUser.data.patient);
          dispatch(
            adminActions.getPatientData({ patientData: getUser.data.patient })
          );
        });
    };
    try {
      await getPatientList();
    } catch (error) {
      dispatch(
        adminActions.dataNotFound({
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
        .get(`${config.BASE_URL}appointment/getAllAppointmentsForAdmin`)
        .then((getUser) => {
          // console.log("appointmnet=====", getUser.data);
          dispatch(
            adminActions.getAppointmentData({
              appointment: getUser.data.appointment,
            })
          );
        });
    };
    try {
      await getAppointmentList();
    } catch (error) {
      dispatch(
        adminActions.dataNotFound({
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
        .get(`${config.BASE_URL}prescribe/getAllPatientPrescriptionForAdmin`)
        .then((getUser) => {
          console.log("appointmnet=====", getUser.data.data.appointment);
          dispatch(
            adminActions.getPrescribeData({
              prescribe: getUser.data.prescribe,
            })
          );
        });
    };
    try {
      await getPrescribeList();
    } catch (error) {
      dispatch(
        adminActions.dataNotFound({
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
        .get(`${config.BASE_URL}contact/getAllQueries`)
        .then((getUser) => {
          // console.log("appointmnet=====", getUser.data.data.appointment);
          dispatch(
            adminActions.getQueryData({
              query: getUser.data.contacts,
            })
          );
        });
    };
    try {
      await getQueryList();
    } catch (error) {
      dispatch(
        adminActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

export const deleteDoctor = () => {
  return async (dispatch) => {
    const getPatientList = async (emailId) => {
      await axios
        .delete(`${config.BASE_URL}doctor/deleteDoctorByEmail/${emailId}`)
        .then((getUser) => {
          // console.log("dat=====", adminActions, getUser.data.doctor);
          dispatch(
            adminActions.getDoctorData({ doctorData: getUser.data.doctor })
          );
        });
    };
    try {
      await getPatientList();
    } catch (error) {
      dispatch(
        adminActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

export const addDoctor = (data) => {
  return async (dispatch) => {
    const postDoctor = async (data) => {
      await axios
        .post(`${config.BASE_URL}doctor/createDoctor`, data)
        .then(() => {
          dispatch(adminActions.addDoctorDetails({ Doctor: data }));
        });
    };
    try {
      await postDoctor(data);
    } catch (error) {
      dispatch(
        adminActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};
export const adminActions = adminSlice.actions;
export default adminSlice;
//import these actions in your components where you need,
//  example ===>>>   const exceuteActions = () => { dispatch(adminActions.increment(pass the payload if needed))};
