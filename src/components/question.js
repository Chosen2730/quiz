import { useGlobalContext } from "./../context";

const Question = () => {
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
          {opt.map((option, i) => {
            return (
              <div className='option_div' key={i}>
                <p
                  className='que_p'
                  onClick={() => {
                    checkAnswer(ans, option, options[i]);
                  }}
                >
                  {options[i]}. {option}
                </p>
              </div>
            );
          })}
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
