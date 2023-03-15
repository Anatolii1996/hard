import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cancelReadyUser } from "../redux/actionCreator";
import { useNavigate } from "react-router";
import { db } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

const ReadyPage = ({ setReady, redy }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [usersForRedy, setUsersForRedy] = useState([]);
  const uniqueUids = new Set();

  const getReadyUsers = async () => {
    const q = query(collection(db, "userReadiness"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const uid = doc.data().uid;
      if (!uniqueUids.has(uid)) {
        uniqueUids.add(uid);
        setUsersForRedy((prev) => [...prev, uid]);
      }
    });
  };

  useEffect(() => {
    getReadyUsers();
  }, []);

  useEffect(() => {
    if (usersForRedy.length > 0) {
      navigate("/chat/game");
    }
  }, [usersForRedy]);

  return (
    <div className="main main_page">
      <p>Ready to start the Quiz</p>
      <button
        onClick={() => {
          setReady(!redy);
          dispatch(cancelReadyUser());
        }}
        className="func_button cancel"
      >
        CANCEL
      </button>
    </div>
  );
};
export default ReadyPage;
