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

  //Dummy data
  ParkedCars: [{
    carId: "car1",
    parkingLotId: "lot1",
    timeEntered: "11:00:00",
    timeExited: "16:00:00"
  }, 
  {
    carId: "car2",
    parkingLotId: "lot2",
    timeEntered: "16:00:00",
    timeExited: "20:00:00"
  }],
  Tag: {
    tagId: "blah",
    userId: "Jose",
    expiration: "2024-05-29",
    effective: "2020-09-10"
  },
  Car: [{
    carId: "car1",
    userId: "user1",
    license: "apvjnirep",
    make: "toyota",
    model: "carolla",
    color: "gray",
  },
  {
    carId: "car2",
    userId: "user1",
    license: "aprouns",
    make: "Buick",
    model: "Century",
    color: "Black",
  }]
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