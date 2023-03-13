import React, { useEffect, useRef } from 'react';
import { auth } from "../pages/LoginPage";

const ChatMessage = (props) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div ref={messagesEndRef} className={`message ${messageClass}`}>
        <img src={photoURL}  />
      <p className="chat_msg">{text}</p>
    </div>
  );
};

export default ChatMessage;
