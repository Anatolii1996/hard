const AnswerButon = ({ el, selected, setSelected, userRight }) => {
  return (
    <button    
    // className={selected ? `answer_may selected` :  `answer_may`}
    className={`answer_may ${selected ? `selected`:""} ${userRight===true?"no_color":userRight===false?"no_color":""}`}
    onClick={() =>setSelected(el)}
    >
      {el}
    </button>
  );
};
export default AnswerButon;
