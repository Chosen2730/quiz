import { useGlobalContext } from "./../context";
const Result = () => {
  const { logout, index, correct } = useGlobalContext();

  return (
    <main className='result'>
      <div className='result_box'>
        <h2>Result</h2>
        <div className='disp_result'>
          <h5>Score:</h5>{" "}
          <span>{((correct / (index + 1)) * 100).toFixed(0)}%</span>{" "}
        </div>
        <div className='disp_result'>
          <h5>Correct Answers:</h5> <span>{correct}</span>{" "}
        </div>
        <div className='disp_result'>
          <h5>Incorrect Answers:</h5> <span>{index - correct + 1}</span>{" "}
        </div>

        <button className='end_exam' onClick={logout}>
          End Exam
        </button>
      </div>
    </main>
  );
};
export default Result;
