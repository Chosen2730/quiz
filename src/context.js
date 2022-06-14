import { useState, createContext, useContext, useEffect } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [name, setName] = useState("Simon");
  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
