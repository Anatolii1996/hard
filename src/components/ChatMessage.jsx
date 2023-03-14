import React, { useEffect, useRef, useState } from "react";
import { auth, storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

const ChatMessage = (props) => {
  const messagesEndRef = useRef(null);
  const { text, uid } = props.message;
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
      .catch((error) => {
        console.error("Error getting avatar download URL:", error);
      });
  }, [uid]);
  useEffect(() => {
    scrollToBottom();
  }, []);


  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div ref={messagesEndRef} className={`message ${messageClass}`}>
      <img src={avatarURL} />
      <p className="chat_msg">{text}</p>
    </div>
  );
};

export default ChatMessage;
