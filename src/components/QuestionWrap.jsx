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
        <GoCheck onClick={()=>setCount(count+1)}/>
        <RxCross2 onClick={()=>setCount(count+1)}/>
      </div>
      {questioCard.length > 0 && (
        <QuestionCard
          key={questioCard[count].id}
          question={questioCard[count].question}
          rightAnswer={questioCard[count].rightAnswer}
          mayAnswers={questioCard[count].mayAnswers}
        />
      )}
    </div>
  );
};
export default QuestionWrap;
