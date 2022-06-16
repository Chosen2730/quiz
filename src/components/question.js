import { English } from "./../question";
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
              <p
                key={i}
                className='que_p'
                onClick={() => {
                  checkAnswer(ans, option, options[i]);
                }}
              >
                {options[i]}. {option}
              </p>
            );
          })}
          {alert && (
            <h6 className='value'>
              Option {value} selected and saved, move to the next question
            </h6>
          )}
        </div>
      </div>
    </main>
  );
};
export default Question;
