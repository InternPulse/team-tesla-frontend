import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    // New action for business signup
    businessSignupSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    businessSignupFailure(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  businessSignupSuccess,
  businessSignupFailure,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
