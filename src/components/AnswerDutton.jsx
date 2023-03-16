const AnswerButon = ({ el, selected, setSelected }) => {
  return (
    <button
    className={selected ? `answer_may selected` : `answer_may `}
    onClick={() =>setSelected(el)}
    >
      {el}
    </button>
  );
};
export default AnswerButon;
