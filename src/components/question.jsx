import { useGlobalContext } from "../context";
import { useRef, useState } from "react";

const Question = ({subject}) => {
  const OPT = useRef(null);
  const { index, checkAnswer, checkP, alert, value, questions, anwser } =
    useGlobalContext();
  const [select, setSelect] = useState(false);
  const [opt, setOption] = useState("");
  const { inst, q, opt, ans } = questions[index];

  const options = ["A", "B", "C", "D", "E"];

  return (
    <main className='question'>
      {inst && <p className='instruction'>INSTRUCTION: {inst}</p>}
      <div className='question_container' onClick={checkP}>
        <h5>{index + 1}. </h5>
        <div className='main_question'>
          <h5 className='que'>{q}</h5>
          <div className='option_div' ref={OPT}>
            {opt.map((option, i) => {
              return (
                <p
                  key={i}
                  className='que_p '
                  style={{ backgroundColor: select ? '#3b44f6' : '#000' }}
                  onClick={() => {
                    setOption(option);
                    se
                    checkAnswer(ans, option, options[i], q, index + 1,subject);
                  }}
                >
                  {options[i]}. {option}
                </p>
              );
            })}
          </div>
          {alert && (
            <h6 className='value'>
              Option selected: "{value}", move to the next question
            </h6>
          )}
        </div>
      </div>
    </main>
  );
};
export default Question;
