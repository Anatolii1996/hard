import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AnswerButon from "./AnswerDutton";

const QuestionCard = ({
  question,
  rightAnswer,
  mayAnswers,
  setRightAnswer,
  setSelectAnswer,
  
}) => {
  const [selectedEl, setSelectedEl] = useState(null);

  useEffect(() => {
    setRightAnswer(rightAnswer);
  }, []);

  useEffect(()=>{
    setSelectAnswer(selectedEl)
   
  }, [selectedEl])

  return (
    <div className="game_area" data-testid="question_card_test">
      <p className="qustion_text">{question}</p>
      <div className="answer_buttons_wrap">
        {mayAnswers.map((el) => {
          return (
            <AnswerButon
              selected={el === selectedEl}
              key={uuidv4()}
              setSelected={setSelectedEl}
              el={el}
            />
          );
        })}
      </div>
    </div>
  );
};
export default QuestionCard;
