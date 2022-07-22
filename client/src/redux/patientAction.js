import { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const patientList = () => {
  return async (dispatch) => {
    const getPatientList = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/appointment/getAppointmentByPatientId`)
        .then((getUser) => {
          // console.log("patient=====", getUser.data);
          dispatch(
            patientActions.getPatientData({ patientData: getUser.data })
          );
        });
    };

    try {
      await getPatientList();
    } catch (error) {
      dispatch(
        patientActions.dataNotFound({
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

export const patientActions = patientSlice.actions;

export default patientSlice;
