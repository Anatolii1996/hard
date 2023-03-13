const ReadyPage = ({setReady, redy}) => {
    return (
      <div className="main main_page">
        <p>Ready to start the Quiz</p>
        <button  onClick={()=>{
        setReady(!redy)
      }} className="func_button cancel">CANCEL</button>
      </div>
    );
  };
  export default ReadyPage;