import { useDispatch } from 'react-redux';
import { cancelReadyUser } from "../redux/actionCreator";

const ReadyPage = ({setReady, redy}) => {
  const dispatch = useDispatch();

    return (
      <div className="main main_page">
        <p>Ready to start the Quiz</p>
        <button  onClick={()=>{
        setReady(!redy)
        dispatch(cancelReadyUser())
      }} className="func_button cancel">CANCEL</button>
      </div>
    );
  };
  export default ReadyPage;