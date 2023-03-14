import { useState } from "react";
import { auth } from "../pages/LoginPage";
import { useDispatch } from 'react-redux';
import { getReadyUser } from "../redux/actionCreator";

const StartPage = ({ setReady, redy }) => {
  const dispatch = useDispatch();
  const [readyUser, setReadyUser] = useState([]);

  return (
    <div className="main main_page">
      <p>START if you are ready to start Quiz</p>
      <button
        onClick={() => {
          setReady(!redy);
         dispatch(getReadyUser({email: auth.currentUser.email, displayName: auth.currentUser.displayName, photoURL: auth.currentUser.photoURL, uid: auth.currentUser.uid }))
        }}
        className="func_button "
      >
        START
      </button>
      {console.log(auth.currentUser)}
    </div>
  );
};
export default StartPage;
