import { useState, createContext, useContext, useEffect } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [access, setAccess] = useState(true);
  const [quiz, setQuiz] = useState(false);
  const [accessCode, setAccessCode] = useState("");

  const handleSubmit = (e) => {
    if (accessCode) {
      e.preventDefault();
      console.log(accessCode);
      setAccess(false);
      setQuiz(true);
    }
  };
  return (
    <AppContext.Provider
      value={{ access, quiz, accessCode, setAccessCode, handleSubmit }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
