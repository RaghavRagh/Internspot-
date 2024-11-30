import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asynchronous thunk action for updating profile
export const updateProfile = createAsyncThunk(
  "user/profile",
  async (formData, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      rejectWithValue("No token found");
    }
    try {
      const response = await axios.put(
        "http://localhost:8000/user/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  loading: false,
  error: null,
  profileUpdateSuccess: false,
};

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.userInfo = action.payload;
    },
    loginFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.profileUpdateSuccess = false;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.profileUpdateSuccess = true;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.profileUpdateSuccess = false;
      });
  },
});

export const { loginRequest, loginSuccess, loginFail, logout } =
  userLoginSlice.actions;

export const selectUserInfo = (state) => state.userLogin.userInfo;
export const selectUserLoading = (state) => state.userLogin.loading;
export const selectUserError = (state) => state.userLogin.error;
export const selectProfileUpdateSuccess = (state) => state.userLogin.profileUpdateSuccess;

export default userLoginSlice.reducer;
