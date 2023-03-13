import { auth } from "../pages/LoginPage";

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
        <img src={photoURL}  />
      <p className="chat_msg">{text}</p>
    </div>
  );
};

export default ChatMessage;
