import { useState, useEffect } from "react";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router";

import {
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  doc,
  setDoc,
  Timestamp,
  deleteDoc,
} from "firebase/firestore";
import {  ref, uploadBytes  } from "firebase/storage";

import { db, storage, auth } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { signOut } from "@firebase/auth";

import ChatMessage from "../components/ChatMessage";
import StartPage from "../components/StartPage";
import ReadyPage from "../components/ReadyPage";


const MainPage = () => {
  const navigate = useNavigate();
  
  const { readyUsers  } = useSelector((state) => state);  

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
     
    });
    setFormValue("");
  };

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

  const writeReadyUsers = async (user) => {
    const { uid } = auth.currentUser;
    await setDoc(doc(db, "userReadiness", uid), user);
  };

  const removeReadyUser = async (user) => {
    const { uid } = auth.currentUser;
    await deleteDoc(doc(db, "userReadiness", uid));
  };

  useEffect(() => {
    if (readyUsers) {
      writeReadyUsers(readyUsers);
    } else {
      removeReadyUser(readyUsers);
    }
  }, [readyUsers]);

  const addUserAvatar= async ()=>{
    const { uid, photoURL } = auth.currentUser;
    const response = await fetch(photoURL);
    const blob = await response.blob();
    const storageRef = ref(storage, `avatars/${uid}`);
    const snapshot = await uploadBytes(storageRef, blob);
  }

 

  useEffect(()=>{
    addUserAvatar()
  }, [])



  return (
    <div className="main_page_wrap">
      <div className="header_button">
        <button onClick={handleLogout} className="func_button">
          Log out
        </button>
      </div>
      <div className="main_wrap">
        {!redy ? (
          <StartPage setReady={setReady} redy={redy} />
        ) : (
          <ReadyPage setReady={setReady} redy={redy} />
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
