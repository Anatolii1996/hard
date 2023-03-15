import { GoCheck } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const GamePage = () => {
  return (
    <div className="game_page_wrap">
      <div className="game_buttons">
        <GoCheck />
        <RxCross2 />
      </div>
      <div className="game_area">
        <p className="qustion_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, nam.
        </p>
        <div className="answer_buttons_wrap">
            <button className="answer_may">lorem</button>
        <button className="answer_may">lorem</button>
        <button className="answer_may">lorem</button>
        <button className="answer_may">lorem</button>
        </div>
        
      </div>
    </div>
  );
};
export default GamePage;
