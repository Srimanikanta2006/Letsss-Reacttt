import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  //we create slice bcoz helps to keep state management logic in one place and also helps to create actions and reducers together, so its easier to manage and scale.
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData; //action is the data we pass while dispatching the action, and payload is the property of action which contains the data we want to pass
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});
export default authSlice.reducer;
export const { login, logout } = authSlice.actions; //we export the actions to use it in the components, so we can dispatch the actions to update the state.
