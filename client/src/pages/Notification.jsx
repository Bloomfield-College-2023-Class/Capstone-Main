import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import { BASE_URL } from "components/url";


const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationText, setNotificationText] = useState("");
  const [notificationTitle, setNotificationTitle] = useState("");
  const user = useSelector((state) => state.user);


  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getAllNotifications`)
      setNotifications(response.data);
      console.log(response.data);
  } catch (error) {
      console.log(error.message);
  }
}

  useEffect(() => {
        fetchNotifications();
  }, []);


  const handleDelete = async (notificationID) => {
        try {
          await axios.delete(`${BASE_URL}/deleteNotification`, {data: {id: notificationID}});
          fetchNotifications();
        } catch (error) {
          console.error('Error deleting notification:', error);
        }
  };


  const handleNotificationTextChange = (event) => {
        setNotificationText(event.target.value);
  };


  const handleNotificationTitleChange = (event) => {
        setNotificationTitle(event.target.value);
  };


  const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          await axios.post(`${BASE_URL}/createNotifications`, {
            title: notificationTitle,
            content: notificationText,
            userID: user.userID
          });
          setNotificationText("");
          setNotificationTitle("");
          fetchNotifications();
        } catch (error) {
          console.error('Error adding notification:', error);
        }
  };


  return (
        <Container>
          <Typography sx={{marginTop: "40px"}} variant="h4">Notifications</Typography>
          <List>
            {notifications.map((notification) => (
              <ListItem key={notification.notificationID}>
                <ListItemText primary={notification.title} secondary={notification.content} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(notification.notificationID)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          {user.userType === "admin" || user.userType === "security" ? (
            <form onSubmit={handleSubmit}>
              <TextField label="Notification Title" value={notificationTitle} onChange={handleNotificationTitleChange} />
              <TextField label="Notification Text" value={notificationText} onChange={handleNotificationTextChange} />
              <Button type="submit" variant="submit" >Submit</Button>
            </form>
          ) : null}
        </Container>
  );
};

export default Notifications;
