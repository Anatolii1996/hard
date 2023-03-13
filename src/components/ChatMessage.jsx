const ChatMessage = (props) => {
  const { text, id } = props.message;
  return <p className="chat_msg">{text}</p>;
};

export default ChatMessage;
