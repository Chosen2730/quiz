import { useGlobalContext } from "./../context";
const Result = () => {
  const { correct, questions, time, logout } = useGlobalContext();
  const { min, sec } = time;

  return (
    <main className='result'>
      <div className='result_box'>
        <h2>Here is your Result</h2>
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
        <p>
          Would you like to have access to more questions like this in order to
          prepare well for your exam?{" "}
          <a href='https://api.whatsapp.com/send?phone=8132157321&text=Hi%20Chosen,%20I%20would%20like%20to%20subscribe%20to%20your%20quiz%20app%20so%20I%20can%20have%20access%20to%20more%20questions'>
            Click here to subscribe
          </a>{" "}
        </p>
        <button className='end_exam' onClick={logout}>
          <a href=''>End Exam</a>
        </button>
      </div>
    </main>
  );
};
export default Result;
