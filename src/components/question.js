import { useGlobalContext } from "./../context";
import { useRef, useEffect } from "react";

const Question = () => {
  const OPT = useRef(null);

  const { index, checkAnswer, checkP, alert, value, questions } =
    useGlobalContext();

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
                  onClick={() => {
                    checkAnswer(ans, option, options[i], q, index + 1);
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
