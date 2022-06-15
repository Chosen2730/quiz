import "./App.css";
import Login from "./components/login";
import Quiz from "./components/quiz";
import { useGlobalContext } from "./context";

function App() {
  const { access, quiz } = useGlobalContext();
  if (access) {
    return <Login />;
  }
  if (quiz) {
    return <Quiz />;
  }
}

export default App;
