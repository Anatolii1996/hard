import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage, auth } from "../firebase";
import StartPage from "../components/StartPage";
import ReadyPage from "../components/ReadyPage";

const MainPage = () => {
  
  const { readyUsers } = useSelector((state) => state);

  const [redy, setReady] = useState(false);

  const writeReadyUsers = async (user) => {
    const { currentUser } = auth;
    if (currentUser) {
      const { uid } = auth.currentUser;
      await setDoc(doc(db, "userReadiness", uid), user);
    }
  };

  const removeReadyUser = async (user) => {
    const { uid } = auth.currentUser;
    await deleteDoc(doc(db, "userReadiness", uid));
  };

  useEffect(() => {
    if (readyUsers ) {
      writeReadyUsers(readyUsers);
    } else {
      removeReadyUser(readyUsers);
    }
  }, [readyUsers]);

  const addUserAvatar = async () => {
    const { currentUser } = auth;
    if (currentUser) {
      const { uid, photoURL } = auth.currentUser;
      const response = await fetch(photoURL);
      const blob = await response.blob();
      const storageRef = ref(storage, `avatars/${uid}`);
      await uploadBytes(storageRef, blob);
    }
  };


  useEffect(() => {
    addUserAvatar();
  }, []);

  return (
    <>
      
        {!redy ? (
          <StartPage setReady={setReady} redy={redy} />
        ) : (
          <ReadyPage setReady={setReady} redy={redy} />
        )}
      
    </>
  );
};
export default MainPage;
