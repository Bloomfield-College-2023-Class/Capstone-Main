import React, { useState } from 'react';

const Messages= () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (event) => {

    //  prevents the default behavior of form submission
    event.preventDefault();
    // add the new message to the existing messages
    // by using the spread operator (...) to spread the values of the previous messages
    setMessages([...messages, newMessage]);
    // reset the newMessage state to an empty string
    setNewMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newMessage} onChange={(event) => setNewMessage(event.target.value)} />
        <button type="submit">Send</button>
      </form>
      <div>
        {/* the messages are displayed using the map method*/}
        {messages.map((message, index) => (
          <div key={index}> {message}</div>
        ))}
      </div>
    </div>
  );
};

export default Messages;



