import { useState, createContext, useContext, useEffect } from "react";
import { English, physics, chemistry, biology, maths } from "./question";
import { db } from "./firebaseConfig";
import Swal from "sweetalert2";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

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
// console.log(English.length);
// console.log(maths.length);
// console.log(chemistry.length);
// console.log(biology.length);
// console.log(physics.length);
const eng = getRandomQuestions(English).slice(0, 10);
const chm = getRandomQuestions(chemistry).slice(0, 7);
const bio = getRandomQuestions(biology).slice(0, 7);
const phy = getRandomQuestions(physics).slice(0, 7);
const math = getRandomQuestions(maths).slice(0, 9);
const allQuestions = [...eng, ...chm, ...bio, ...phy, ...math];
const allQue = getRandomQuestions(allQuestions);

const questions = [...allQue];

const AppProvider = ({ children }) => {
  const [quiz, setQuiz] = useState(false);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [alert, showAlert] = useState(false);
  const [value, setValue] = useState("");
  const [result, showResult] = useState(false);
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [option, setOption] = useState({});
  const [results, setResults] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [conFirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  }, [errorMsg]);
  const [anwser, setAnwser] = useState({
    eng: {},
    bio: {},
    chm: {},
    phy: {},
    math: {},
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(0);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = async (navigate) => {
    console.log(loading);
    setLoading(true);
    showResult(false);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
      setLoading(false);
    } catch (err) {
      setErrorMsg(err.code);
      setLoading(false);
    }
  };

  const handleSignIn = async (navigate) => {
    setLoading(true);
    showResult(false);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const newToken = user.user.stsTokenManager.accessToken;
      if (newToken) {
        setToken(newToken);
        navigate("/quiz");
      }
      setLoading(false);
    } catch (err) {
      setErrorMsg(err.code);
      setLoading(false);
    }
  };

  const signUpWithGoogle = async (navigate) => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const newToken = res.user.stsTokenManager.accessToken;
      if (newToken) {
        setToken(newToken);
        navigate("/quiz");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const loginWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res.user);
    } catch (error) {
      console.log(error.message);
    }
  };

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
    // eslint-disable-next-line
  }, [quiz]);

  const changeAccess = (e) => {
    const value = e.target.value.toUpperCase();
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
      var obj = {};
      obj[subject] = {
        [i]: {
          option,
        },
      };
      return { ...prev, ...obj };
    });
    if (crr.toLowerCase() === option.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setOption({ i, q, crr, option });
    showAlert(true);
    setValue(value);
  };
  const submitExam = (navigate) => {
    Swal.fire({
      title: "Are you sure you want to submit?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Submitted Succesfully!",
          "Your Exam has been submitted.",
          "success"
        );
        setTimeout(() => {
          navigate("/result");
        }, 1000);
      }
    });

    // showResult(true);
    // setTime({ min: 0, sec: 0 });
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
    setCorrect(0);
    setResults([]);
  };

  return (
    <AppContext.Provider
      value={{
        changeSubject,
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
        anwser,
        isPasswordVisible,
        setIsPasswordVisible,
        handleSignUp,
        handleSignIn,
        setName,
        setEmail,
        setPassword,
        setConfirmPassword,
        signUpWithGoogle,
        loading,
        errorMsg,
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
