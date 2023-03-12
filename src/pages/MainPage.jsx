import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const ChatRoom = () => {
  const messagesRef = collection(db, "messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const messages = useCollectionData(query, { idField: "id" });
};

const MainPage = () => {
  return (
    <div className="main_page_wrap">
      <div className="header_button">
        <button className="func_button">Log out</button>
      </div>
      <div className="main_wrap">
        <div className="main main_page">
          <p>START if you are ready to start Quiz</p>
          <button className="func_button">START</button>
        </div>
        <div className="chat_wrap"></div>
      </div>
    </div>
  );
};
export default MainPage;
