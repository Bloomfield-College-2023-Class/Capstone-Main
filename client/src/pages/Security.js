import axios from "axios";
import { BASE_URL } from "components/url";
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  FormControl } from "@mui/material";
import { useState } from "react";

const Security = () => {

  const [license, setLicense ] = useState("");
  const [firstName, setFirstName] = useState("");

  //Make a call to the back end to perform a get request on a license plate on the cars table
  const searchLicense = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getCarByLicensePlate`, {
        licensePlate: license,
      });
      alert("Car with the license plate: " + license + " was found")
    } catch (error) {
      alert("Failed to get Car with the license plate: " + license + "")
    } 
  };


  const searchUserByFirstName = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserByFirstName`, {
        firstName: firstName,
      });
      alert("user with the first name: " + firstName + " was found")
    } catch (error) {
      alert("failed to get user with the first name: " + firstName + "")
    }
  }



};