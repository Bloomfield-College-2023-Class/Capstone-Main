import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import { BASE_URL } from "components/url";


const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationText, setNotificationText] = useState("");
  const [notificationDate, setNotificationDate] = useState("");
  const userRole = useSelector((state) => state.user.role);
  const userID = useSelector((state) => state.user.userID);


  const fetchNotifications = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/notifications/${userID}`);
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
          await axios.delete(`${BASE_URL}/deleteNotification/${notificationID}`);
          setNotifications(notifications.filter((n) => n.notificationID !== notificationID));
        } catch (error) {
          console.error('Error deleting notification:', error);
        }
  };


  const handleNotificationTextChange = (event) => {
        setNotificationText(event.target.value);
  };


  const handleNotificationDateChange = (event) => {
        setNotificationDate(event.target.value);
  };


  const handleSubmit = async (event) => {
        event.preventDefault();


        const notificationData = {
          notificationText: notificationText,
          notificationDate: notificationDate,
          userRole: userRole
        };


        try {
          await axios.post(`${BASE_URL}/addNotification`, notificationData);
          setNotificationText("");
          setNotificationDate("");
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
          {userRole === "Admin" || userRole === "Security" ? (
            <form onSubmit={handleSubmit}>
              <TextField label="Notification Text" value={notificationText} onChange={handleNotificationTextChange} />
              <TextField label="Notification Date" value={notificationDate} onChange={handleNotificationDateChange} />
              <Button type="submit" variant="submit" />
            </form>
          ) : null}
        </Container>
  );
};

export default Notifications;