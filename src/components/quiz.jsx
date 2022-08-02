import { useRef, useEffect, useState } from "react";
import { BiTimeFive, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";
import { useGlobalContext } from "../context";
import Result from "./result";
import Question from "./question";

const Quiz = () => {
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
    result,
    submitExam,
    time,
    questions,
    index,
    changeSubject,
    eng,
    chm,
    bio,
    phy,
    math,
  } = useGlobalContext();
  const { min, sec } = time;

  const checkTime = (n) => {
    if (n < 10) {
      return `0${n}`;
    } else return n;
  };

  const sub = ["eng", "bio", "chm", "phy", "math"];
  return (
    <main className='quiz'>
      <article className='main_quiz'>
        <div className='quiz_header'>
          <h3 className='exam_progress'>
            {/* {index < questions.indexOf(eng[eng.length - 1]) + 1
              ? "English"
              : index < questions.indexOf(bio[bio.length - 1]) + 1
              ? "Biology"
              : index < questions.indexOf(chm[chm.length - 1]) + 1
              ? "Chemistry"
              : index < questions.indexOf(phy[phy.length - 1]) + 1
              ? "Physics"
              : index < questions.indexOf(math[math.length - 1]) + 1
              ? "Mathematics"
              : ""} */}
            Exam in Progress
          </h3>
          <div className='timer'>
            <i>
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
            onClick={() => {
              submitExam();
            }}
          >
            Submit Exam
          </button>
        </div>
        <div className='subject_header' ref={activeSub}>
          {/* {sub.map((subject, i) => {
            return (
              <h6
                className='sub'
                onClick={() => {
                  setSelectedSubject(subject);
                  changeSubject(subject);
                }}
                key={i}
              >
                {subject}
              </h6>
            );
          })} */}
        </div>
        <div className='question_body'>
          <Question subject={selectedSubject} />
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
        {result && <Result />}
      </article>
      <footer>
        <p>
          Proudly built by{" "}
          <a href='https://simonir.netlify.app/'>Robinson Simon I.</a> for
          students.
        </p>
      </footer>
    </main>
  );
};
export default Quiz;
