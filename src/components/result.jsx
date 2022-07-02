import { useGlobalContext } from "../context";
import { useNavigate, Link } from "react-router-dom";
const Result = () => {
  const { correct, questions, logout, results } = useGlobalContext();

  return (
    <main className='result'>
      <div className='result_box'>
        <h2>your Result</h2>
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
        {/* <div className='disp_result'>
          <h5>Time Remaining:</h5> <span>{`${min}:${sec}`}</span>{" "}
        </div> */}
        <p>
          Would you like to have access to more questions like this in order to
          prepare well for your exam?{" "}
          <a href='https://api.whatsapp.com/send?phone=2348132157321&text=Hi%20Chosen,%20I%20would%20like%20to%20subscribe%20to%20your%20quiz%20app%20so%20I%20can%20have%20access%20to%20more%20questions'>
            Click here to subscribe
          </a>{" "}
        </p>

        <h2>Overview</h2>
        {results.map((r) => {
          const { q, crr, option, i } = r;
          return (
            <div key={i} className='result_cont'>
              <p>
                {i}. {q}
              </p>
              <p className='opt'>Your option: {option}</p>
              <p className='crr'>Correct Ans: {crr}</p>
            </div>
          );
        })}

        <Link to='/'>
          <button className='end_exam' onClick={logout}>
            End Exam
          </button>
        </Link>
      </div>
    </main>
  );
};
export default Result;
