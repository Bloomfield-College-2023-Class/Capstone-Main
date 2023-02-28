import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // Signing the user out
  
  

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
        onClick={() => navigate('/')}
      >
        <Typography>Sign Out</Typography>
      </Button>
    </div>
  );
};

export default Home;
