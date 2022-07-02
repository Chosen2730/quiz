import { useGlobalContext } from "../context";
import { useRef, useState } from "react";
import Options from "./Options";

const Question = ({subject}) => {
  const OPT = useRef(null);
  const { index, checkAnswer, checkP, alert, value, questions, anwser } =
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
            {opt.map((option, i) =>  <Options i={i} option={option} ans={ans} options={options} index={index} q={q} subject={subject} checkAnswer={checkAnswer}  />
            )}
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
