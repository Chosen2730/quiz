import { BiTimeFive, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { useGlobalContext } from "./../context";
import Result from "./result";
import Question from "./question";

const Quiz = () => {
  const {
    handleIndex,
    result,
    submitExam,
    time,
    questions,
    index,
    changeSubject,
    English,
    biology,
    chemistry,
    physics,
    maths,
  } = useGlobalContext();
  const { min, sec } = time;

  const checkTime = (n) => {
    if (n < 10) {
      return `0${n}`;
    } else return n;
  };

  const sub = ["eng", "bio", "chm", "phy", "math"];

  const width = ((index + 1) / questions.length) * 100;

  return (
    <main className='quiz'>
      <article className='main_quiz'>
        <div className='quiz_header'>
          <h3 className='exam_progress'>
            {index < 10
              ? "English"
              : index < 20
              ? "Biology"
              : index < 30
              ? "Chemistry"
              : index < 40
              ? "Physics"
              : index < 50
              ? "Mathematics"
              : ""}
          </h3>
          <div className='timer'>
            <i>
              <BiTimeFive />
            </i>
            <p>
              00:{checkTime(min)}:{checkTime(sec)}
            </p>
          </div>
        </div>
        {/* <p>Progress bar</p> */}
        <div className='quiz_head'>
          <div className='dash'>
            <div
              style={{
                backgroundColor: "green",
                height: "10px",
                width: `${width}%`,
                borderRadius: "0 100px 100px 0",
              }}
            ></div>
          </div>
          <button className='submit_exam' onClick={submitExam}>
            Submit Exam
          </button>
        </div>
        <div className='subject_header'>
          {sub.map((subject, i) => {
            return (
              <h6 onClick={() => changeSubject(subject)} key={i}>
                {subject}
              </h6>
            );
          })}
        </div>
        <div className='question_body'>
          <Question />
        </div>
        <div className='button_container'>
          <button className='prev' onClick={() => handleIndex("prev")}>
            <BiSkipPrevious className='nxtprev' />
          </button>
          <p>{`${index + 1} / ${questions.length}`}</p>
          <button className='next' onClick={() => handleIndex("next")}>
            <BiSkipNext className='nxtprev' />
          </button>
        </div>
        {/* <div className='page_btn_container'>
        {questions.map((q, i) => {
          return (
            <button
              key={i}
              // className='active toggle_btn'
              className={index === i ? "toggle_btn active" : "toggle_btn"}
            ></button>
          );
        })}
      </div> */}

        {result && <Result />}
      </article>
      <footer>
        <p>
          Proudly built by{" "}
          <a href='https://simonir.netlify.app/'>Robinson Simon I.</a>
        </p>
      </footer>
    </main>
  );
};
export default Quiz;
