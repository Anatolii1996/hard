import {
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth } from "./LoginPage";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router";
import ChatMessage from "../components/ChatMessage";
import { useState } from "react";
import StartPage from "../components/StartPage";
import ReadyPage from "../components/ReadyPage";

const MainPage = () => {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await addDoc(messagesRef, {
      text: formValue,
      uid,
      createdAt: Timestamp.fromDate(new Date()),
      photoURL,
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

  const [redy, setReady] = useState(false);

  return (
    <div className="main_page_wrap">
      <div className="header_button">
        <button onClick={handleLogout} className="func_button">
          Log out
        </button>
      </div>
      <div className="main_wrap">
        {!redy ? (
          <StartPage setReady={setReady} redy={redy}/>
        ) : (
          <ReadyPage setReady={setReady} redy={redy}/>
        )}
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
              placeholder="Write some text..."
            />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
