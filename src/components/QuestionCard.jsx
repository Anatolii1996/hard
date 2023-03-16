


const QuestionCard=({question, rightAnswer, mayAnswers, count})=>{
    

   

return(
    <div className="game_area">
        <p className="qustion_text">
          {question}
        </p>
        <div className="answer_buttons_wrap">
            {mayAnswers.map((el)=>{
                return(
                    <button className="answer_may">{el}</button>
                )
            })}
          
         
        </div>
      </div>
)
};
export default QuestionCard;