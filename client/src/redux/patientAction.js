import { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

const initialAuthState = { patientData: [], getUserData: [], doctorData: [] };
// const initialAuthState = { patientData: [], appointmentData: [] };
const patientSlice = createSlice({
  name: "patient",
  initialState: initialAuthState,
  reducers: {
    getPatientData(state, action) {
      // console.log("getPatientData action...", state, action);
      state.patientData = action.payload.patientData;
    },

    getDoctorData(state, action) {
      // console.log("getPatientData action...", state, action);
      state.doctorData = action.payload.doctorData;
    },

    dataNotFound(state, action) {
      state.notification = {
        message: action.payload.message,
      };
    },
  },
});

export const appointmentByPatient = (_id) => {
  console.log("dhvsbjcn");
  return async (dispatch) => {
    const getAppointmentList = async (_id) => {
      await axios
        .get(`${config.BASE_URL}appointment/getAppointmentByPatientId/${_id}`)
        .then((getUser) => {
          console.log("patient=====", getUser.data);
          dispatch(authActions.getPatientData({ patientData: getUser.data }));
        });
    };

    try {
      await getAppointmentList(_id);
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};

// export const getDoctor = () => {
//   return async (dispatch) => {
//     const getDoctorList = async () => {
//       await axios
//         .get(`http://localhost:5000/api/v1/doctors`)
//         .then((getUser) => {
//           console.log("doctors=====", getUser.data.doctor);
//           dispatch(
//             authActions.getDoctorData({ doctorData: getUser.data.doctor })
//           );
//         });
//     };

//     try {
//       await getDoctorList();
//     } catch (error) {
//       dispatch(
//         authActions.dataNotFound({
//           message: "doctor data not found",
//         })
//       );
//     }
//   };
// };

// export const getDoctor = () => {
//   return async (dispatch) => {
//     const getDoctorList = async () => {
//       await axios
//         .get(`http://localhost:5000/api/v1/doctors`)
//         .then((getUser) => {
//           console.log("doctors=====", getUser.data.doctor);
//           dispatch(
//             authActions.getDoctorData({ doctorData: getUser.data.doctor })
//           );
//         });
//     };

//     try {
//       await getDoctorList();
//     } catch (error) {
//       dispatch(
//         authActions.dataNotFound({
//           message: "doctor data not found",
//         })
//       );
//     }
//   };
// };

//  const getDoctor = async () => {
//   const response = await axios.get(`http://localhost:5000/api/v1/appointment/getallappointments`);
//  let doctorData = response.data
// setSome(doctorData)
// //console.log("doctorData", doctorData);
//  doctorData.filter((item) => {
//  return item.doctors === doctors
// }).map(({ time, _id }) => (
//  setFees(time),
//  setGetId(_id)
//  ))
//  }

// const getDoctor = async () => {
//   const response = await axios.get("http://localhost:5000/api/v1/doctors");
//   if (response.status === 200) {
//     setDoctors(response.data.doctor);
//     setDocFees("500");
//   }
// };

// const onSelect = async () => {
//   getDoctor();
// };

export const authActions = patientSlice.actions;

export default patientSlice;
