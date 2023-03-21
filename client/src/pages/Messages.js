import React from "react";
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@mui/material';

const mockMessages = [
  {
    id: 1,
    sender: 'John Doe',
    text: 'Hello, how are you?',
  },
  {
    id: 2,
    sender: 'Jane Smith',
    text: 'Hi! I am doing well, thank you!',
  },
  {
    id: 3,
    sender: 'John Doe',
    text: 'Great to hear! What have you been up to lately?',
  },
];

const Messages = () => {

    return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      justifyContent="flex-start"
      minHeight="100vh"
      padding="16px"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Chat
      </Typography>
      <List>
        {mockMessages.map((message) => (
          <ListItem key={message.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>{message.sender[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={message.sender}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {message.text}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Messages;


// Path: client\src\pages\Notification.jsx
// const Messages = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   const handleSubmit = (event) => {
//     //  prevents the default behavior of form submission
//     event.preventDefault();
//     // add the new message to the existing messages
//     // by using the spread operator (...) to spread the values of the previous messages
//     setMessages([...messages, newMessage]);
//     // reset the newMessage state to an empty string
//     setNewMessage("");
//   };

//   return (
//     //center this div
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//         marginTop: "16px",
//       }}
//     >
//       <form onSubmit={handleSubmit}>
//         <input
//           value={newMessage}
//           onChange={(event) => setNewMessage(event.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//       <div>
//         {/* the messages are displayed using the map method*/}
//         {messages.map((message, index) => (
//           <div key={index}> {message}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Messages;