import { createSlice } from "@reduxjs/toolkit";
import Parse from 'parse/dist/parse.min.js';

//The initial state of the app will be dark mode
const initialState = {
  mode: "dark",
  //The initial user will be null which means not logged in
  //This will change when the user logs in at back4app
  User: new Parse.User()
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