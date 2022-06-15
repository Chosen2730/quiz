import { BiTimeFive, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { useGlobalContext } from "./../context";
import Result from "./result";
import Question from "./question";

const Quiz = () => {
  const { handleIndex, result, submitExam, time } = useGlobalContext();
  const { min, sec } = time;

  const checkTime = (n) => {
    if (n < 10) {
      return `0${n}`;
    } else return n;
  };

  return (
    <main className='quiz'>
      <div className='quiz_header'>
        <h5 className='exam_progress'>in Progress...</h5>
        <div className='timer'>
          <i>
            <BiTimeFive />
          </i>
          <p>
            00:{checkTime(min)}:{checkTime(sec)}
          </p>
        </div>
      </div>
      <div className='subject_header'>
        <h6>English</h6>
        <h6>Biology</h6>
        <h6>Chemistry</h6>
        <h6>Physics</h6>
        <h6>Mathematics</h6>
      </div>
      <div className='question_body'>
        <Question />
      </div>
      <div className='button_container'>
        <button className='prev' onClick={() => handleIndex("prev")}>
          <BiSkipPrevious className='nxtprev' />
        </button>
        <button className='submit_exam' onClick={submitExam}>
          Submit
        </button>
        <button className='next' onClick={() => handleIndex("next")}>
          <BiSkipNext className='nxtprev' />
        </button>
      </div>
      {/* <div className='page_btn_container'>
        <button className='toggle_btn'>1</button>
        <button className='toggle_btn'>2</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
      </div> */}

      {result && <Result />}
    </main>
  );
};
export default Quiz;
