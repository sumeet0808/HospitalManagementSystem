import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";
const initialAuthState = { appointmentData: [], prescriptionData: [] };
const doctorSlice = createSlice({
  name: "doctor",
  initialState: initialAuthState,
  reducers: {
    getAppointmentData(state, action) {
      state.appointmentData = action.payload.appointmentData;
    },
    getPrescriptionData(state, action) {
      state.prescriptionData = action.payload.prescriptionData;
    },
    dataNotFound(state, action) {
      state.notification = {
        message: action.payload.message,
      };
    },
  },
});

export const getAppointment = () => {
  return async (dispatch) => {
    const getAllAppointment = async () => {
      await axios.get(`${config.BASE_URL}getAllAppointment`).then((getUser) => {
        dispatch(
          authActions.getAppointmentData({
            appointmentData: getUser.data.data.appointments,
          })
        );
      });
    };
    try {
      await getAllAppointment();
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

export const getPrescription = () => {
  return async (dispatch) => {
    const getAllPrescription = async () => {
      await axios.get(`${config.BASE_URL}getList`).then((getUser) => {
        dispatch(
          authActions.getPrescriptionData({
            prescriptionData: getUser.data.data,
          })
        );
      });
    };
    try {
      await getAllPrescription();
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

//creating actions

export const authActions = doctorSlice.actions;
export default doctorSlice;
//import these actions in your components where you need,
//  example ===>>>   const exceuteActions = () => { dispatch(authActions.increment(pass the payload if needed))};
