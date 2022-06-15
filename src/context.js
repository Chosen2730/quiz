import { useState, createContext, useContext, useEffect } from "react";
import { English } from "./question";
const AppContext = createContext();
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

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const second = today.getSeconds();
  const minute = today.getMinutes();
  const future = new Date(year, month, date, hour, minute + 4, second);

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
  }, []);

  const handleSubmit = (e) => {
    if (accessCode) {
      e.preventDefault();
      setAccess(false);
      setQuiz(true);
    }
  };

  const checkIndex = (n) => {
    if (n < 0) {
      return 0;
    } else if (n > English.length - 1) {
      showResult(true);
      return +English.length - 1;
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
    if (crr === option) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    showAlert(true);
    setValue(value);
  };

  const checkP = (e) => {
    // e.target.classList.remove("active");
    // const target = e.target.classList.contains("que_p");
    // if (target) {
    //   if (e.target.classList.contains("active")) {
    //     e.target.classList.toggle("active");
    //   }
    // }
  };

  const submitExam = () => {
    showResult(true);
  };

  const logout = () => {
    showResult(false);
    setCorrect(0);
    setIndex(0);
    setAccess(true);
  };
  return (
    <AppContext.Provider
      value={{
        access,
        quiz,
        accessCode,
        setAccessCode,
        handleSubmit,
        index,
        handleIndex,
        checkAnswer,
        checkP,
        alert,
        value,
        result,
        submitExam,
        logout,
        correct,
        time,
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
