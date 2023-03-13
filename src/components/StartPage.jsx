const StartPage = ({setReady, redy}) => {
  return (
    <div className="main main_page">
      <p>START if you are ready to start Quiz</p>
      <button onClick={()=>{
        setReady(!redy)
      }} className="func_button ">START</button>
    </div>
  );
};
export default StartPage;
