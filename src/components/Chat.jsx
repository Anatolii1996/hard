/* eslint-disable */
import { useNavigate } from "react-router";
import { useState } from "react";
import { db, auth } from "../firebase";
import ChatMessage from "../components/ChatMessage";
import { signOut } from "@firebase/auth";
import {
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Outlet } from "react-router-dom";

const Chat = () => {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    await addDoc(messagesRef, {
      text: formValue,
      uid,
      createdAt: Timestamp.fromDate(new Date()),
      displayName,
    });
    setFormValue("");
  };

  const navigate = useNavigate();
  const logout = () => {
    return signOut(auth);
  };
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="chat_outlet">
      <div className="header_button">
        <button onClick={handleLogout} className="func_button">
          Log out
        </button>
      </div>
      <div className="center_wrap">
        <Outlet />
        <div className="chat">
          <div className="chat_wrap">
            {messages &&
              messages.map((msg) => (
                <ChatMessage key={msg.createdAt} message={msg} />
              ))}
          </div>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Send a message..."
            />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Chat;
