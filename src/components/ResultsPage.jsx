import React, { useEffect, useState } from "react";
import { auth, storage, db } from "../firebase";

const Results = () => {
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
          <tbody></tbody>
        </table>
      </div>
      <div className="result_button">
        <button className="func_button">OK</button>
      </div>
    </div>
  );
};
export default Results;
