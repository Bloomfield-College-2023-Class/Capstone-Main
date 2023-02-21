import { createSlice } from "@reduxjs/toolkit";
import Parse from 'parse/dist/parse.min.js';

//The initial state of the app will be dark mode
const initialState = {
  mode: "dark",
  //The initial user will be null which means not logged in
  //This will change when the user logs in at back4app
  //Added other fields needed to be used in order to fill
  //other fields.  All null initially.
  User: new Parse.User(),
  //Car: new Parse.Car(),
  //ParkedCars: new Parse.ParkedCars(),
  //Tag: new Parse.Tag(),
  //ParkingLot: new Parse.ParkingLot()
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
  }
})

// We export variables and functions to have access to them outside the file
export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;