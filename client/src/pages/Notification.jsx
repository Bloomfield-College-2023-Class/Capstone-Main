import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const userID = useSelector((state) => state.user.userID);
  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/notifications/${userID}`);
      setNotifications(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleDelete = async (notificationID) => {
    try {
      await axios.delete(`http://localhost:8080/deleteNotification/${notificationID}`);
      setNotifications(notifications.filter((n) => n.notificationID !== notificationID));
    } catch (error) {
      console.error('Error deleting notification:', error);
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
    </Container>
  );
};

export default NotificationsPage;



