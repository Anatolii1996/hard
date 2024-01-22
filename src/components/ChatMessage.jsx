/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { auth, storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

const ChatMessage = (props) => {
  const messagesEndRef = useRef(null);
  const { text, uid, displayName } = props.message;
  const [avatarURL, setAvatarUrl] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Get the avatar download URL for the current user
    const storageRef = ref(storage, `avatars/${uid}`);
    getDownloadURL(storageRef)
      .then((url) => {
        setAvatarUrl(url);
      })
      .then(() => scrollToBottom())
      .catch((error) => {
        console.error("Error getting avatar download URL:", error);
      });
  }, [uid]);

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message_wrap ${messageClass}`}>
      <div className="user_info">
        <img className="user_avatar" src={avatarURL} />
        <p>{displayName}</p>
      </div>
      
      <div ref={messagesEndRef} className="message" >
        
        <p className="chat_msg">{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
