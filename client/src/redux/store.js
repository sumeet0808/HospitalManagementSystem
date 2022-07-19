import doctorSlice from './doctorAction';
import authSlice from './authAction';
import patientSlice from './patientAction';
import adminSlice from './adminAction';
import { configureStore } from "@reduxjs/toolkit";
//creating store
const store = configureStore({
  reducer: { doctor: doctorSlice.reducer, auth: authSlice.reducer, patient: patientSlice.reducer, admin: adminSlice.reducer },
});
export default store;
