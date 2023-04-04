import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const PersonalInformation = () => {
    const user = useSelector((state) => state.user);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [password, setPassword] = useState(user.password);
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [userName, setUserName] = useState(user.username);

    const updateUser = async () => {
        if (password == password2) {
            try {
                const response = await axios.patch('http://localhost:8080/updateUser', {
                    username: userName,
                    userID: user.userID,
                    password: password,
                    phoneNumber: phoneNumber,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    userType: user.userType
                }
                )
                alert("update successful")
            } catch (error) {
                alert(error.message)
            }

        } else {
            alert("passwords must match")
        }
    }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" mb={4}>
          Personal Information
        </Typography>

        <TextField
          fullWidth
          label="User Name"
          color='warning'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Typography variant="h6" mb={2}>
          User ID: {user.firstName}
        </Typography>

        <Typography variant="h6" mb={2}>
          User Type: {user.userType}
        </Typography>

        <TextField
          fullWidth
          label="First Name"
          color='warning'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Last Name"
          color='warning'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          color='warning'
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Phone Number"
          color='warning'
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          color='warning'
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          color='warning'
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={updateUser}
          sx={{ mb: 2 }}
        >
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default PersonalInformation;


{/* <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Personal Information</h1>

        <h2>User Name</h2>
        <input
          type="text"
          className="input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <h2>User ID</h2>
        <h2>{user.firstName}</h2>

        <h2>User Type</h2>
        <h2>{userType}</h2>

        <h2> First Name</h2>
        <input
          type="text"
          className="input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <h2> Last Name</h2>
        <input
          type="text"
          className="input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <h2> Email</h2>
        <input
          type="text"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <h2> Phone Number</h2>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>

        <h2>Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <h2>Confirm Password</h2>
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        ></input>
        <br />
        <button onClick={updateUser}>Update</button>
      </div>
    </div> */}