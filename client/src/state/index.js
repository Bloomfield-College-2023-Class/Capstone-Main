import { createSlice } from "@reduxjs/toolkit";

//The initial state of the app will be dark mode
const initialState = {
  //Default mode is dark mode
  mode: "dark",
  //The initial user will be an empty login screen
  currentUser: {
    username: ''
  },
  //Keeps track of logged in user
  isLoggedIn: false,
};

export const globalSlice =  createSlice({
  name: "global",
  initialState,
  // A reducer is just a function
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  }
})

// We export variables and functions to have access to them outside the file
export const { setMode, login, logout } = globalSlice.actions;

export default globalSlice.reducer;