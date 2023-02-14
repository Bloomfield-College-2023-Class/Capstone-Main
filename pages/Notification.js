import React, { useState } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    //The (...notifications) is used in creating a new array while using anything that was in the old array 
    setNotifications([...notifications, notification]);
  };

  const removeNotification = (id) => {
    //filters through the array checks to see if the notification id matches the acutal id 
    //IF it matches it will be removed
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  //Test array to get random msgs when button is clicked.
  const RandomMsgs = ["This is a test notification", "Bmw with a license plate rtx 328 it being towed!",
   "Your car has been hit!","Snow! do not park in the back"];
  const randomIndex = Math.floor(Math.random() * RandomMsgs.length);
  const randomString = RandomMsgs[randomIndex];

  return (
    <div className="Notification">
      <h1>Notifications</h1>
      <button onClick={() => addNotification({ id: Date.now(), message: randomString })}>
        Add Notification
      </button>
      <ul>
        {/* Using the map function to loop through the notifications array and display each message*/}
        {notifications.map(notification => (
          <li key={notification.id}>
            {notification.message}
            <button onClick={() => removeNotification(notification.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;