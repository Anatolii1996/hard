import React, { useEffect, useState } from "react";
import { auth, storage, db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";

const Results = () => {
  const q = query(collection(db, "results"));
  const [results] = useCollectionData(q);

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
            {results&&results.map((user)=>{
                return(
                    <tr>
                    <td>{user.displayName}</td>
                    <td>{user.resultCount}</td>
                </tr>
                )
                
            })}
          </tbody>
        </table>
      </div>
      <div className="result_button">
        <button className="func_button">OK</button>
      </div>
      {console.log(results)}
    </div>
  );
};
export default Results;
