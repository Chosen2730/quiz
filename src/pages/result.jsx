import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SummaryChart from "../components/summaryChart";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { correct, questions, logout, results } = useGlobalContext();
  const wrongAnswers = results.filter((res) => res.crr !== res.option);
  const score = ((correct / (questions.length - 1)) * 100).toFixed(0);
  const navigate = useNavigate();
  return (
    <main className='bg-white max-w-6xl mx-auto p-3'>
      <div className='px-8 py-4 shadow-md my-6 bg-gray-50'>
        <div className='flex items-center gap-2 justify-end'>
          <h2 className='font-medium text-sm'>Robinson Simon</h2>
          <img
            src='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
            alt='profile-img'
            className='w-8 h-8 rounded-full object-cover border-2'
          />

          <i
            className='p-3 rounded-md bg-pink-600 text-white ml-5'
            onClick={() => navigate("/")}
          >
            <AiOutlineLogout />
          </i>
        </div>
      </div>
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='border-r-2 border-r-gray-300'>
            <h2 className='font-medium text-lg text-center md:text-left'>
              Result Summary
            </h2>
            <div className='my-10 w-[75%] mx-auto'>
              <CircularProgressbar
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "1rem",
                  pathTransitionDuration: 0.5,
                  pathColor: "#d61c4e",
                  textColor: "#d61c4e",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#00000",
                })}
                value={score}
                text={`${score}%`}
              />
              ;
            </div>
          </div>
          <div className=''>
            <h2 className='font-medium text-lg text-center md:text-left'>
              Performance by Subject
            </h2>
            <div className='my-10 w-[75%] mx-auto '>
              <SummaryChart />
            </div>
          </div>
        </div>
        {/*        
        <div className='disp_result'>
          <h5>Incorrect Answers:</h5> <span>{questions.length - correct}</span>
        </div> */}
        {/* <p>
          Would you like to have access to more questions like this in order to
          prepare well for your exam?{" "}
          <a href='https://api.whatsapp.com/send?phone=2348132157321&text=Hi%20Chosen,%20I%20would%20like%20to%20subscribe%20to%20your%20quiz%20app%20so%20I%20can%20have%20access%20to%20more%20questions'>
            Click here to subscribe
          </a>{" "}
        </p> */}
        <h2 style={{ fontSize: "0.9rem" }}>Wrong Answers & Corrections</h2>
        {wrongAnswers.map((r) => {
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
        <Link to='/result'>
          <button className='end_exam' onClick={logout}>
            End Exam
          </button>
        </Link>
      </div>
    </main>
  );
};
export default Result;
