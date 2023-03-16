import { onSnapshot, query, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { GoCheck } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import QuestionCard from "./QuestionCard";

const QuestionWrap = () => {
  const [questioCard, setQuestionCard] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const q = query(collection(db, "questionsForGame"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let questionArr = [];
      querySnapshot.forEach((doc) => {
        questionArr.push({ ...doc.data(), id: doc.id });
      });
      setQuestionCard(questionArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="game_page_wrap">
      <div className="game_buttons">
        <GoCheck />
        <RxCross2 />
      </div>
      <QuestionCard/>
    </div>
  );
};
export default QuestionWrap;
