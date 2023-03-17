import React, { useEffect, useState } from "react";
import { auth, storage, db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import UserResult from "./UserResult";

const Results = () => {
  const q = query(collection(db, "results"));
  const [results] = useCollectionData(q);
  useEffect(() => {
    if (results) {
      const [user] = results;
      console.log(user.uid);
    }
  }, [results]);

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
        <button className="func_button">OK</button>
      </div>
      {/* {console.log(results)} */}
    </div>
  );
};
export default Results;
