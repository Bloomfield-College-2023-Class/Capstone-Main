import { createSlice } from "@reduxjs/toolkit";

//The initial state of the app will be dark mode
const initialState = {
  mode: "dark",
  //The initial user will be an empty login screen
  currentUser: {
    username: ''
  }
  //Added other fields needed to be used in order to fill
  //other fields.  All null initially.
  
};

export const globalSlice =  createSlice({
  name: "global",
  initialState,
  // A reducer is just a function
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  }
})

// We export variables and functions to have access to them outside the file
export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;