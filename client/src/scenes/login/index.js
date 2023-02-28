import React, { useState } from "react";
import { setMode } from "state";
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Avatar,
  Button,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  LockOutlined,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import SpaceBetween from "components/SpaceBetween";
import { useDispatch } from "react-redux";
import axios from "axios";

const Login = () => {
  //Here we grab the null (empty user) from the redux store and we log the user in/or register the user

  const theme = useTheme();

  const dispatch = useDispatch();

  // Username
  const [userName, setUserName] = useState('');
  // Password
  const [password, setPassword] = useState('');

  // This is a hook that react provides so that we can use the history instance on react router and allow us to redirect users to pages.
  const navigateTo = useNavigate();
  // Get the user stored in the redux store which is null by default, this also allows us to get the user info anywhere in our website once it is logged in

  const handleLogin = async () => {
    // Set the username and password for the user.
    try {
      await axios.post('http://localhost:8000/login', {
        username: userName,
        password: password,
      });
      navigateTo('/home')
    } catch ( error ) {
      alert(error.message)
    }
  };

  // Style of key value pairs
  const styledPaper = {
    padding: 20,
    height: "500px",
    width: "380px",
    margin: "20px auto",
    borderRadius: "15px",
  };
  return (
    // Create a elevation so it looks nice
    <Grid>
      <Paper elevation={10} style={styledPaper} spacing={8}>
        <IconButton onClick={() => dispatch(setMode())}>
          {/* Ternary operator for theme bellow */}
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
        <Grid align={"center"} m="2.25rem 0 1rem 3 rem" gridRow={1}>
          <Avatar backgroundColor="#fff000">
            <LockOutlined />
          </Avatar>
          <Typography variant="h3" marginTop={"15px"} mb="20px">
            Sign In
          </Typography>

          {/* Username field */}
          <TextField
            variant="filled"
            id="filled-basic"
            type="text"
            label="Username"
            color="warning"
            style={{ width: 230 }}
            onChange={(e) => setUserName(e.target.value)}
          />

          <SpaceBetween />

          {/* Password field  */}
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="filled"
            autoComplete="current-password"
            color="warning"
            style={{ width: 230 }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <SpaceBetween />
        <Box textAlign={"center"}>
          <Button
            sx={{
              borderRadius: 1.25,
              backgroundColor: "#ff0000",
              width: "210px",
            }}
            variant="contained"
            onClick={handleLogin}
          >
            <Typography>Sign In</Typography>
          </Button>
        </Box>
        <SpaceBetween />
        <Box textAlign={"center"}>
          <Button
            sx={{
              borderRadius: 1.25,
              backgroundColor: "whitesmoke",
              color: "black",
              width: "210px",
            }}
            variant="contained"
            onClick={() => navigateTo("/register")}
          >
            <Typography>Register</Typography>
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
