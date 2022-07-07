import authSlice from "./action";
import { configureStore } from "@reduxjs/toolkit";
//creating store
const store = configureStore({
  reducer: { auth: authSlice.reducer },
});
export default store;
