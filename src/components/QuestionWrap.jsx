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

//   useEffect(() => {
//     if (count > 9) {
//       navigate("/chat/result");
//     }
//   }, [count]);

  

  return (
    <div className="game_page_wrap">
      <div className="game_buttons">
        <GoCheck onClick={() =>{
            if(count<9){
                setCount(count + 1)
            }else{
                navigate("/chat/result"); 
            }
           } 
        }  />
        <RxCross2 onClick={() =>{
            if(count<9){
                setCount(count + 1)
            }else{
                navigate("/chat/result"); 
            }
           } 
        } />
      </div>
      {questioCard.length > 0 && (
        <QuestionCard
        count={count}
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
