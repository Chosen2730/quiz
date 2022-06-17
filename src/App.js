import "./App.css";
import Login from "./components/login";
import Quiz from "./components/quiz";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useGlobalContext } from "./context";

function App() {
  const { access, quiz } = useGlobalContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Quiz />} />
        <Route path='quiz' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
