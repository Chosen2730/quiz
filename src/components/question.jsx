import { useGlobalContext } from "../context";
import { useRef, useState } from "react";

const Question = ({ subject }) => {
  const OPT = useRef(null);
  const { index, checkAnswer, checkP, alert, value, questions } =
    useGlobalContext();
  const [select, setSelect] = useState(false);
  const [op, setOption] = useState("");
  const [log, setLog] = useState({ [index]: { option: "", selected: false } });
  const { inst, q, opt, ans } = questions[index];
  const options = ["A", "B", "C", "D", "E"];

  return (
    <main className='question'>
      {inst && <p className='instruction'>INSTRUCTION: {inst}</p>}
      <div className='question_container' onClick={checkP}>
        <h5>{index + 1}. </h5>
        <div className='main_question'>
          <h5 className='font-bold text-lg text-gray-300'>{q}</h5>
          <div className='option_div text-gray-300' ref={OPT}>
            {opt.map((option, i) => {
              return (
                <p
                  key={i}
                  className='text-lg my-5'
                  style={{
                    backgroundColor:
                      log[index]?.option === option && log[index]?.selected
                        ? "#3b44f6"
                        : "transparent",
                  }}
                  onClick={() => {
                    setOption(option);
                    op === option ? setSelect(!select) : setSelect(true);
                    setLog((prev) => {
                      return { ...prev, [index]: { option, selected: select } };
                    });
                    checkAnswer(ans, option, options[i], q, index + 1, subject);
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
