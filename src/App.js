import "./App.css";
import Login from "./pages/login";
import Quiz from "./pages/quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Result from "./pages/result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
