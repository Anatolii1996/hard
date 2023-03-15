import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import { db, storage, auth } from "../firebase";
import { signOut } from "@firebase/auth";

import StartPage from "../components/StartPage";
import ReadyPage from "../components/ReadyPage";
import Chat from "../components/Chat";

const MainPage = () => {
  const navigate = useNavigate();

  const { readyUsers } = useSelector((state) => state);

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

  // useEffect(() => {
  //   const deleteUserReadiness = async () => {
  //     const q = query(collection(db, "userReadiness"));
  //     const querySnapshot = await getDocs(q);
  //     // console.log(querySnapshot);
  //     querySnapshot.forEach(async (doc) => {
  //       // console.log(doc);
  //       if (!doc.data) {

  //         await deleteDoc(doc.ref);
  //       }
  //     });
  //   };
  //   deleteUserReadiness();
  // }, []);

  useEffect(() => {
    addUserAvatar();
  }, []);

  return (
    <div className="main_page_wrap">
      <div className="header_button">
        <button onClick={handleLogout} className="func_button">
          Log out
        </button>
      </div>
        {!redy ? (
          <StartPage setReady={setReady} redy={redy} />
        ) : (
          <ReadyPage setReady={setReady} redy={redy} />
        )}
      
    </div>
  );
};
export default MainPage;
