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
  user: {
    userID: 27,
    userName: 'm',
    firstName: 'm',
    lastName: 'm',
    phoneNumber: '3',
    email: 'm',
    userType: 's'
  },
  parkedCars: [],
  cars: []
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
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCars: (state, action) => {
      return {...state, cars: action.payload}
    },
    setParked: (state, action) => {
      state.parkedCars = action.payload;
    },
    addParked: (state, action) => {
      return {...state, parkedCars: action.payload}
    },
  }
})

// We export variables and functions to have access to them outside the file
export const { setCars, setParked, addParked, setMode, login, logout, setUser } = globalSlice.actions;

export default globalSlice.reducer;