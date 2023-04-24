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
  FormControl,
} from "@mui/material";
import { useState } from "react";

const Security = () => {
  const [license, setLicense] = useState("");
  const [firstName, setFirstName] = useState("");
  const [car, setCar] = useState(null);
  const [user, setUser] = useState(null);

  const searchLicense = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getCarByLicensePlate`, {
        params: {
          licensePlate: license,
        },
      });
      setCar(response.data);
      alert("Car with the license plate: " + license + " was found");
    } catch (error) {
      alert("Failed to get Car with the license plate: " + license + "");
    }
  };

  const searchUserByFirstName = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserByFirstName`, {
        params: {
          firstName: firstName,
        },
      });
      setUser(response.data[0]);
      alert("user with the first name: " + firstName + " was found");
    } catch (error) {
      alert("failed to get user with the first name: " + firstName + "");
    }
  };

  const CarTable = () => {
    if (car) {
      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Car ID</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Make</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>License Plate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{car.carID}</TableCell>
                <TableCell>{car.userID}</TableCell>
                <TableCell>{car.color}</TableCell>
                <TableCell>{car.make}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.licensePlate}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );
    } else {
      return null;
    }
  };

  const UserTable = () => {
    if (user) {
      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );
    } else {
      return null;
    }
  };
  
  return (
    <Container maxWidth="sm">
      <Box sx={{ mb: 2, mt: 2 }}>
        <Typography variant="h4">
          Search by License Plate or First Name
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <TextField
            label="Search by License Plate"
            variant="outlined"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />
        </FormControl>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" onClick={searchLicense}>
          Search License Plate
        </Button>
      </Box>
      {CarTable()}
      <Box sx={{ mb: 2, mt: 2 }}>
        <FormControl fullWidth>
          <TextField
            label="Search by First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" onClick={searchUserByFirstName}>
          Search First Name
        </Button>
      </Box>
      {UserTable()}
    </Container>
  );
};

export default Security;