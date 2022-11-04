import { useRef, useEffect, useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";
import { useGlobalContext } from "../context";
import Question from "../components/question";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5";
import Timer from "../components/timer";

const Quiz = () => {
  const navigate = useNavigate();
  const activeSub = useRef(null);
  const [selectedSubject, setSelectedSubject] = useState("");
  useEffect(() => {
    const activeSubject = activeSub.current;
    const subs = activeSubject.children;
    Array.from(subs).forEach((sub) => {
      sub.addEventListener("click", () => {
        activeSubject.addEventListener("click", (e) => {
          const currEvt = e.target;
          if (currEvt === sub) {
            sub.classList.add("active_sub");
          } else {
            sub.classList.remove("active_sub");
          }
        });
      });
    });
  }, []);
  const {
    handleIndex,
    submitExam,
    time,
    questions,
    index,
    isTimeUp,
    setIsTimeUp,
  } = useGlobalContext();
  const { min, sec } = time;
  const checkTime = (n) => {
    if (n < 10) {
      return `0${n}`;
    } else return n;
  };

  return (
    <section className='quiz'>
      <main className='max-w-6xl mx-auto'>
        <article className='main_quiz'>
          <div className='flex justify-between items-center bg-gray-900 p-4 rounded-xl'>
            <h3 className='font-bold text-lg text-gray-300'>
              Exam in Progress
            </h3>

            <div className='flex gap-2 items-center bg-pink-700 p-4 px-8 font-medium text-lg rounded-xl text-pink-200'>
              <i className='text-2xl'>
                <MdAccessTime />
              </i>
              <p>
                00:{checkTime(min)}:{checkTime(sec)}
              </p>
            </div>
          </div>

          <div className='quiz_head'>
            <div className='dash'>
              <div
                style={{
                  backgroundColor: "green",
                  height: "10px",
                  width: `${((index + 1) / questions.length) * 100}%`,
                  borderRadius: "0 100px 100px 0",
                }}
              ></div>
            </div>
            <button
              className='submit_exam'
              onClick={() => submitExam(navigate)}
            >
              Submit Exam
            </button>
          </div>
          <div className='subject_header' ref={activeSub}></div>
          <div className='question_body'>
            <Question subject={selectedSubject} />
          </div>
          <div className='button_container'>
            <button
              className='bg-pink-700 p-4 px-6 rounded-xl'
              onClick={() => handleIndex("prev")}
            >
              <BiSkipPrevious className='nxtprev' />
            </button>
            <p>{`${index + 1} / ${questions.length}`}</p>
            <button
              className='bg-pink-700 p-4 px-6 rounded-xl'
              onClick={() => handleIndex("next")}
            >
              <BiSkipNext className='nxtprev' />
            </button>
          </div>
        </article>
        {/* <footer>
          <p>
            Proudly built by{" "}
            <a href='https://simonir.netlify.app/'>Robinson Simon I.</a> for
            students.
          </p>
        </footer> */}
      </main>
      {isTimeUp && (
        <div className='fixed top-0 flex items-center justify-center min-h-screen left-0 w-full bg-black-rgba'>
          <div className='w-[85%] md:w-[50%] mx-auto bg-white text-black p-8 flex flex-col items-center justify-center rounded-md'>
            <i className='text-8xl text-pink-700 my-4'>
              <IoTimerOutline />
            </i>
            <h2 className='font-bold text-2xl text-center'>
              Oops! Your time is up
            </h2>
            <p className='text-base text-gray-900 text-center my-2'>
              Your answers have been saved, you'll be redirected to the result
              page
            </p>
            <button
              className='bg-pink-700 p-4 w-full text-white rounded-md font-medium'
              onClick={() => {
                navigate("/result");
                setIsTimeUp(false);
              }}
            >
              Check Result
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
export default Quiz;
