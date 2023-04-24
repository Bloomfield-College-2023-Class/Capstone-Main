import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" component="h1" gutterBottom my={3}>
          Settings
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/profile")}
          style={{ marginBottom: "16px" }}
          fullWidth
        >
          Profile
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/notifications")}
          style={{ marginBottom: "16px" }}
          fullWidth
        >
          Notifications
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/history")}
          style={{ marginBottom: "16px" }}
          fullWidth
        >
          History
        </Button>
      </Box>
    </Container>
  );
};

export default Settings;

// return (
//   <div>
//       <h1>SETTINGS</h1><br/>
//       <button onClick={() => navigate("/profile")}>Profile</button><br/>
//       <button onClick={() => navigate("/notifications")}>Notifications</button><br/>
//       <button onClick={() => navigate("/history")}>History</button><br/>
//   </div>
// )
