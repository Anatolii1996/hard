/* eslint-disable */
import React from "react";
import {  db, auth } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import UserResult from "./UserResult";
import { useNavigate } from "react-router";

const Results = () => {
  const q = query(collection(db, "results"));
  const [results] = useCollectionData(q);
  const navigate = useNavigate();

  const deleteDocument=async ()=>{
    const { uid } = auth.currentUser;
    await deleteDoc(doc(db, "results", uid));
    await deleteDoc(doc(db, "userReadiness", uid));
  }

  return (
    <div className="result_page">
      <div className="result_table">
        <table>
          <thead>
            <tr>
              <th>user</th>
              <th>scores</th>
            </tr>
          </thead>
          <tbody>
            {results &&
              results.map((user) => (
                <UserResult key={user.uid} results={user}/>
               
              ))}
          </tbody>
        </table>
      </div>
      <div className="result_button">
        <button onClick={()=>{
          deleteDocument();
          navigate("/chat/main")
        }} className="func_button">OK</button>
      </div>
    </div>
  );
};
export default Results;
