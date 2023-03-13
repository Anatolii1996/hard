import { collection, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth } from "./LoginPage";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router";
import ChatMessage from "../components/ChatMessage";

const MainPage = () => {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q, { idField: "id" });

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
    <div className="main_page_wrap">
      <div className="header_button">
        <button onClick={handleLogout} className="func_button">
          Log out
        </button>
      </div>
      <div className="main_wrap">
        <div className="main main_page">
          <p>START if you are ready to start Quiz</p>
          <button className="func_button">START</button>
        </div>
        <div className="chat_wrap">
          {
          messages &&messages.map((msg) =>
           <ChatMessage key={msg.id} message={msg} />
           )
            // console.log(messages)
            }
        </div>
      </div>
    </div>
  );
};
export default MainPage;
