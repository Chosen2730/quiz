import { useState, createContext, useContext, useEffect } from "react";
import { English, physics, chemistry, biology, maths } from "./question";
const AppContext = createContext();

const getRandomQuestions = (sub) => {
  let randomSub = [...sub],
    subject = [],
    i = randomSub.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    subject.push(randomSub[j]);
    randomSub.splice(j, 1);
  }
  return subject;
};
const eng = getRandomQuestions(English).slice(0, 10);
const chm = getRandomQuestions(chemistry).slice(0, 5);
const bio = getRandomQuestions(biology).slice(0, 5);
const phy = getRandomQuestions(physics).slice(0, 5);
const math = getRandomQuestions(maths).slice(0, 5);

// const eng = English.slice(0, 10);
// const chm = chemistry.slice(0, 5);
// const bio = biology.slice(0, 5);
// const phy = physics.slice(0, 5);
// const math = maths.slice(0, 5);

const questions = [...eng, ...bio, ...chm, ...phy, ...math];

const AppProvider = ({ children }) => {
  const [quiz, setQuiz] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [alert, showAlert] = useState(false);
  const [value, setValue] = useState("");
  const [result, showResult] = useState(false);
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [option, setOption] = useState({});
  const [results, setResults] = useState([]);
  const [anwser, setAnwser] = useState({
    eng: {},
    bio: {},
    chm: {},
    phy: {},
    math: {}

  });
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const second = today.getSeconds();
  const minute = today.getMinutes();
  const future = new Date(year, month, date, hour, minute + 18, second);

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

  const changeAccess = (e) => {
    const value = e.target.value.toUpperCase();
    setAccessCode(value);
  };

  const checkIndex = (n) => {
    if (n < 0) {
      return 0;
    } else if (n > questions.length - 1) {
      return +questions.length - 1;
    } else return n;
  };

  const handleIndex = (action) => {
    setValue("");
    if (action === "next") {
      setIndex(checkIndex(index + 1));
      showAlert(false);
      if (value) {
        setResults([...results, option]);
      } else return;
      if (isCorrect) {
        setCorrect(correct + 1);
      }
    } else if (action === "prev") {
      setIndex(checkIndex(index - 1));
      showAlert(false);
    }
  };

  const checkAnswer = (crr, option, value, q, i, subject) => {
    setAnwser((prev) => {
      var obj = {

      };
      obj[subject] = {
        [i]: {
          option,
        }
      }
      return { ...prev, ...obj }
    })
    if (crr.toLowerCase() === option.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setOption({ i, q, crr, option });
    showAlert(true);
    setValue(value);
  };
  const submitExam = () => {
    showResult(true);
    setTime({ min: 0, sec: 0 });
  };

  const changeSubject = (sub) => {
    let firstItem = eng[0];
    if (sub === "eng") {
    } else if (sub === "bio") {
      firstItem = bio[0];
    } else if (sub === "chm") {
      firstItem = chm[0];
    } else if (sub === "phy") {
      firstItem = phy[0];
    } else if (sub === "math") {
      firstItem = math[0];
    }
    const position = questions.indexOf(firstItem);
    setIndex(position);
  };

  const logout = (e) => {
    setQuiz(false);
    showResult(false);
    setIndex(0);
    setCorrect("");
  };

  return (
    <AppContext.Provider
      value={{
        changeSubject,
        accessCode,
        setAccessCode,
        index,
        handleIndex,
        checkAnswer,
        alert,
        value,
        result,
        submitExam,
        correct,
        time,
        eng,
        chm,
        bio,
        phy,
        math,
        questions,
        setIndex,
        changeAccess,
        quiz,
        setQuiz,
        showResult,
        logout,
        results,
        anwser
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
