import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  PersonOutlined,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import { useDispatch} from "react-redux";
import axios from "axios";
import { setMode } from "state";

const Register = () => {
  // get theme
  const theme = useTheme();

  // we use this to navigate to screens
  const navigateTo = useNavigate();

  // set up dispatch
  const dispatch = useDispatch();

  // Handles the parse user registration and what not

  const handleOnRegisterClick = async (formValues) => {
    try {
      await axios.post('http://localhost:8080/users', {
        firstName: formValues.firstName,
        lastName: formValues.lastName, 
        email: formValues.email, 
        password: formValues.password, 
        confirmPassword: formValues.confirmPassword, 
        username: formValues.userName, 
        phoneNumber: formValues.phoneNumber
      })
      navigateTo('/login')
    } catch (error) {
      alert(error.message);
    }
  };  

  const initialFormValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const styledPaper = {
    padding: 20,
    height: "800px",
    width: "500px",
    margin: "20px auto",
    borderRadius: "15px",
  };

  return (
    <Grid>
      <Paper style={styledPaper} elevation={10}>
        <IconButton onClick={() => dispatch(setMode())}>
          {/* Ternary operator for theme bellow */}
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
        <Grid align="center">
          <Avatar>
            <PersonOutlined />
          </Avatar>
          <Typography variant="h3" marginTop={"15px"} marginBottom="20px">
            Register
          </Typography>
          <Formik
            onSubmit={handleOnRegisterClick}
            initialValues={initialFormValues}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display={"grid"}
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1ft))"
                  sx={{
                    "& > div": {
                      gridColumn: "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    color="warning"
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    color="warning"
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    color="warning"
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNumber}
                    name="phoneNumber"
                    error={!!touched.phoneNumber && !!errors.phoneNumber}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                    color="warning"
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userName}
                    name="userName"
                    error={!!touched.userName && !!errors.userName}
                    helperText={touched.userName && errors.userName}
                    color="warning"
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="password"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    color="warning"
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="password"
                    label="Confirm Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confirmPassword}
                    name="confirmPassword"
                    error={
                      !!touched.confirmPassword && !!errors.confirmPassword
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    color="warning"
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" marginTop="20px">
                  <Button
                    sx={{
                      borderRadius: 1.25,
                      backgroundColor: "whitesmoke",
                      color: "black",
                      width: "210px",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    <Typography>Register</Typography>
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Register;
