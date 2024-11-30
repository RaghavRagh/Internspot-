import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./features/userSlice";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const preloadedState = {
  userLogin: {userInfo: userInfoFromStorage}
}

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
  },
  preloadedState,
});

export default store;
