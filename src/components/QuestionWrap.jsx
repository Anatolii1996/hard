import { onSnapshot, query, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { GoCheck } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import QuestionCard from "./QuestionCard";
import { useNavigate } from "react-router";

const QuestionWrap = () => {
  const [questioCard, setQuestionCard] = useState([]);
  const [count, setCount] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [resultCount, setResultCount] = useState(0);
  const [userRight, setUserRight] = useState(null);
  const navigate = useNavigate();

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
        <GoCheck
        className="check_button"
          onClick={() => {
            if (count < 9) {
              if (selectAnswer == rightAnswer) {
                setResultCount(resultCount + 1);
                setUserRight(true);
              } else {
                setUserRight(false);
              }
              setTimeout(() => {
                setCount(count + 1);
                setUserRight(null)
              }, 1500);
            } else {
              navigate("/chat/result");
            }
          }}
        />
        <RxCross2
         className="wrong_button"
          onClick={() => {
            if (count < 9) {
              setCount(count + 1);
            } else {
              navigate("/chat/result");
            }
          }}
        />
       {userRight === true ? <GoCheck className="check_button"/> : userRight === false ? <RxCross2 className="wrong_button"/> : null}
      </div>
      {questioCard.length > 0 && (
        <QuestionCard
          count={count}
          key={questioCard[count].id}
          question={questioCard[count].question}
          rightAnswer={questioCard[count].rightAnswer}
          mayAnswers={questioCard[count].mayAnswers}
          setRightAnswer={setRightAnswer}
          setSelectAnswer={setSelectAnswer}
        />
      )}
    </div>
  );
};
export default QuestionWrap;
