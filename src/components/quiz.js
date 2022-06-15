import { BiTimeFive, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import Question from "./question";
const Quiz = () => {
  return (
    <main className='quiz'>
      <div className='quiz_header'>
        <h5 className='exam_progress'>Exam is now in Progress...</h5>
        <div className='timer'>
          <i>
            <BiTimeFive />
          </i>
          <p>00:00:00</p>
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
        <button className='prev'>
          <BiSkipPrevious className='nxtprev' />
          Previous{" "}
        </button>
        <button className='next'>
          Next <BiSkipNext className='nxtprev' />
        </button>
      </div>
      <div className='page_btn_container'>
        <button className='toggle_btn'>1</button>
        <button className='toggle_btn'>2</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
        <button className='toggle_btn'>3</button>
      </div>
      <button className='submit_exam prev'>Submit Exam</button>
    </main>
  );
};
export default Quiz;
