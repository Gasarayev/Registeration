import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AccessToken: "",
  PersonID: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.AccessToken = action.payload.AccessToken;
      state.PersonID = action.payload.PersonID;
    },
    logout(state) {
      state.AccessToken = "";
      state.PersonID = "";
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;