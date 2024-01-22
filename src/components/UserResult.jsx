/* eslint-disable */
import React, { useEffect, useState} from "react";
import {storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

const UserResult = (props) => {
  const { resultCount, uid, displayName } = props.results;
  const [avatarURL, setAvatarUrl] = useState("");

  useEffect(() => {
    // Get the avatar download URL for the current user
    const storageRef = ref(storage, `avatars/${uid}`);
    getDownloadURL(storageRef)
      .then((url) => {
        setAvatarUrl(url);
      })
      
      .catch((error) => {
        console.error("Error getting avatar download URL:", error);
      });
  }, [uid]);

  return (
    <tr>
      <td><img className="user_avatar" src={avatarURL}  /><span className="user_name">{displayName}</span> </td>
      <td className="result_count">{resultCount}</td>
    </tr>
  );
};
export default UserResult;
