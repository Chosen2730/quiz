import "./App.css";
import Login from "./pages/login";
import Quiz from "./components/quiz";
import Choices from "./components/choices";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='choices' element={<Choices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
