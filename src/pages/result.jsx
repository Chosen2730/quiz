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
  const rightAnswers = results.filter((res) => res.crr === res.option);
  const unAnswered =
    questions.length - (wrongAnswers.length + rightAnswers.length);

  const score = ((correct / (questions.length - 1)) * 100).toFixed(0);
  const navigate = useNavigate();
  return (
    <main className='bg-white max-w-6xl mx-auto p-3'>
      <div className='px-8 py-4 shadow-md my-2 bg-gray-50'>
        <div className='flex items-center gap-2 justify-end'>
          <h2 className='font-medium text-sm'>Robinson Simon</h2>
          <img
            src='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
            alt='profile-img'
            className='w-8 h-8 rounded-full object-cover border-2'
          />
          <a
            href='/'
            className='p-3 w-10 h-10 rounded-md bg-pink-600 text-white ml-5 block'
          >
            <i>
              <AiOutlineLogout />
            </i>
          </a>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='border-r-2 border-r-gray-300'>
            <h2 className='text-lg text-center md:text-left font-bold'>
              Result Summary
            </h2>
            <div className='my-10 w-[75%] mx-auto'>
              <CircularProgressbar
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "1rem",
                  pathTransitionDuration: 0.5,
                  pathColor: "#1D1CE5",
                  textColor: "#1D1CE5",
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
            <h2 className='text-lg text-center md:text-left font-bold'>
              Performance Questions Attempted
            </h2>
            <div className='my-10 md:w-[75%] mx-auto '>
              <SummaryChart
                right={rightAnswers.length}
                wrong={wrongAnswers.length}
                notAns={unAnswered}
              />
            </div>
          </div>
        </div>

        <h2 className='text-lg font-bold mt-10 my-4'>
          Wrong Answers & Corrections
        </h2>
        {wrongAnswers.map((r) => {
          const { q, crr, option, i } = r;
          return (
            <div key={i} className='p-8 my-4 rounded-md shadow-md'>
              <p className='font-medium text-base'>
                {i}. {q}
              </p>
              <p className='text-pink-700 text-sm my-4'>
                Your option: {option}
              </p>
              <p className='text-sm text-green-600'>Correct Ans: {crr}</p>
            </div>
          );
        })}
        <a href='/'>
          <button
            className='w-full md:w-fit md:px-8 text-white font-medium rounded-md bg-pink-700 p-4 my-10'
            onClick={logout}
          >
            Logout
          </button>
        </a>
      </div>
    </main>
  );
};
export default Result;
