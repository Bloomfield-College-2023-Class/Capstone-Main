import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Parse from 'parse/dist/parse.min.js'

const Home = () => {
  const navigate = useNavigate();
  // Signing the user out
  const signOut = async function () {
    try {
      // Log out user
      await Parse.User.logOut();
      // Verify that user is logged out
      
      if (Parse.User.current() === null) {
        alert('User has been logged out.')
        navigate("/");
      } else {
        alert('user could not be logged out.')
      }
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`)
      return false;
    }
  }

  return (
    <div>
      <Typography>Successful Login</Typography>
      <Button
        sx={{
          borderRadius: 1.25,
          backgroundColor: "whitesmoke",
          color: "black",
          width: "210px",
        }}
        variant="contained"
        type="submit"
        onClick={signOut}
      >
        <Typography>Sign Out</Typography>
      </Button>
    </div>
  );
};

export default Home;
