const AnswerButon = ({ el, selected, setSelected, key }) => {
  return (
    <button
    className={selected ? `answer_may selected` : `answer_may `}
    onClick={(e) =>setSelected(el)}
    >
      {el}
    </button>
  );
};
export default AnswerButon;
