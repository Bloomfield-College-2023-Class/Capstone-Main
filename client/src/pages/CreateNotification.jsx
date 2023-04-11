import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

const CreateNotification = () => {
  //getter and setter for the notification title
  const [title, setTitle] = useState("");
  //getter and setter for the notification body
  const [content, setContent] = useState("");
  //const for recipient
  const user = useSelector((state) => state.user);
  const recipient = user.userID;

  //function to handle the submit event and send a notification
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("${BASE_URL}/createNotifications", {
        title,
        content,
        userID: recipient, // Replace this with the actual user ID
      });

      if (response.status === 201) {
        setTitle("");
        setContent("");
        alert("Notification created successfully");
      } 
    } catch (error) {
      console.error("Error creating notification:", error);
      alert("An error occurred while creating the notification.");
    }
  };

  return (
    <Container>
      <h1>Create Notification</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          color="warning"
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          multiline
          color="warning"
          rows={4}
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            borderRadius: 1.25,
            backgroundColor: "#ff0000",
            width: "210px",
          }}
        >
          <Typography>Create Notification</Typography>
        </Button>
      </form>
    </Container>
  );
};

export default CreateNotification;
