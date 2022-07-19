import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";
const initialAuthState = { userData: "" };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    getUserData(state, action) {
      state.userData = action.payload.userData;
    },
    dataNotFound(state, action) {
      state.notification = {
        message: action.payload.message,
      };
    },
  },
});

export const login = () => {
  return async (dispatch) => {
    const getUser = async () => {
      await axios.get(`${config.BASE_URL}Crud/`).then((getUser) => {
        dispatch(authActions.getUserData({ userData: getUser.data }));
      });
    };
    try {
      await getUser();
      dispatch(authActions.getData);
    } catch (error) {
      dispatch(
        authActions.dataNotFound({
          message: "user data not found",
        })
      );
    }
  };
};
export const register = () => {
  return async (dispatch) => {
    const getUser = async () => {
      await axios.get(`${config.BASE_URL}Crud/`).then((getUser) => {
        dispatch(authActions.getUserData({ userData: getUser.data }));
      });
    };
    try {
      await getUser();
      dispatch(authActions.getData);
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

export const authActions = authSlice.actions;
export default authSlice;

//import these actions in your components where you need,
//  example ===>>>   const exceuteActions = () => { dispatch(authActions.increment(pass the payload if needed))};
