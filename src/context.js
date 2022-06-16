import { useState, createContext, useContext, useEffect } from "react";
import { English, physics, chemistry, biology, maths } from "./question";
const AppContext = createContext();
const questions = [
  ...English.slice(0, 10),
  ...biology.slice(0, 10),
  ...chemistry.slice(0, 10),
  ...physics.slice(0, 10),
  ...maths.slice(0, 10),
];

const ACCESS_CODE = "CJ22001";
const AppProvider = ({ children }) => {
  const [access, setAccess] = useState(true);
  const [quiz, setQuiz] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [alert, showAlert] = useState(false);
  const [value, setValue] = useState("A");
  const [result, showResult] = useState(false);
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [isPermit, setIsPermit] = useState(false);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const second = today.getSeconds();
  const minute = today.getMinutes();
  const future = new Date(year, month, date, hour, minute + 30, second);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const endpoint = future.getTime();
      const duration = endpoint - now;
      if (duration < 0) {
        setTime({ min: 0, sec: 0 });
        showResult(true);
      } else {
        const oneMin = 1000 * 60;
        const min = Math.floor(duration / oneMin);
        const sec = Math.floor((duration % oneMin) / 1000);
        setTime({ min, sec });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [quiz]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accessCode) {
      if (accessCode === ACCESS_CODE) {
        setAccess(false);
        setQuiz(true);
        setIsPermit(false);
      } else {
        setIsPermit(true);
      }
    }
  };

  const checkIndex = (n) => {
    if (n < 0) {
      return 0;
    } else if (n > questions.length - 1) {
      return +questions.length - 1;
    } else return n;
  };

  const handleIndex = (action) => {
    if (action === "next") {
      setIndex(checkIndex(index + 1));
      showAlert(false);
      if (isCorrect) {
        setCorrect(correct + 1);
      }
    } else if (action === "prev") {
      setIndex(checkIndex(index - 1));
      showAlert(false);
    }
  };

  const checkAnswer = (crr, option, value) => {
    if (crr.toLowerCase() === option.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    showAlert(true);
    setValue(value);
  };

  const submitExam = () => {
    showResult(true);
    setTime({ min: 0, sec: 0 });
  };

  const changeSubject = (sub) => {
    let firstItem = English[0];
    if (sub === "eng") {
      firstItem = firstItem;
    } else if (sub === "bio") {
      firstItem = biology[0];
    } else if (sub === "chm") {
      firstItem = chemistry[0];
    } else if (sub === "phy") {
      firstItem = physics[0];
    } else if (sub === "math") {
      firstItem = maths[0];
    }
    const position = questions.indexOf(firstItem);
    setIndex(position);
  };

  return (
    <AppContext.Provider
      value={{
        access,
        changeSubject,
        quiz,
        accessCode,
        setAccessCode,
        handleSubmit,
        index,
        handleIndex,
        checkAnswer,
        alert,
        value,
        result,
        submitExam,
        correct,
        time,
        English,
        biology,
        chemistry,
        physics,
        maths,
        questions,
        setIndex,
        isPermit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
