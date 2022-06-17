import { useGlobalContext } from "./../context";
const Result = () => {
  const { index, correct, questions, time } = useGlobalContext();
  const { min, sec } = time;

  return (
    <main className='result'>
      <div className='result_box'>
        <h2>Result</h2>
        <div className='disp_result'>
          <h5>Score:</h5>{" "}
          <span>{((correct / (questions.length - 1)) * 100).toFixed(0)}%</span>{" "}
        </div>
        <div className='disp_result'>
          <h5>Total Questions:</h5> <span>{questions.length}</span>{" "}
        </div>
        <div className='disp_result'>
          <h5>Correct Answers:</h5> <span>{correct}</span>{" "}
        </div>
        <div className='disp_result'>
          <h5>Incorrect Answers:</h5> <span>{questions.length - correct}</span>{" "}
        </div>
        <div className='disp_result'>
          <h5>Time Remaining:</h5> <span>{`${min}:${sec}`}</span>{" "}
        </div>
        <button className='end_exam'>
          <a href=''>End Exam</a>
        </button>
      </div>
    </main>
  );
};
export default Result;
