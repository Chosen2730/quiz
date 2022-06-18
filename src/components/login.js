import logo from "./../images/logo.png";
import { useState } from "react";
import { useGlobalContext } from "./../context";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { accessCode, setAccessCode, changeAccess, setQuiz, showResult } =
    useGlobalContext();
  const [isPermit, setIsPermit] = useState(false);
  const ACCESS_CODE = "CJ22002";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(accessCode, ACCESS_CODE);
    e.preventDefault();
    showResult(false);
    if (accessCode) {
      if (accessCode === ACCESS_CODE) {
        console.log(accessCode, ACCESS_CODE);
        setIsPermit(false);
        setQuiz(true);
        navigate("/quiz");
        setAccessCode("");
      } else {
        setIsPermit(true);
        return;
      }
    }
  };
  return (
    <main className='login'>
      <div className='header_cont'>
        <img className='logo' src={logo} alt='' />
        <h2>Welcome to this Quiz.</h2>
        <p>
          Find out how prepared you are to take your exams by answering the
          questions in this mock. Goodluck!!!
        </p>
      </div>
      <div className='form'>
        <form action='' onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='Your name' />
          <input
            value={accessCode}
            onChange={changeAccess}
            type='text'
            placeholder='access code'
          />
          {isPermit && <p>Invalid Access code</p>}
          <input
            onClick={handleSubmit}
            className='login_btn'
            type='button'
            value='Start Quiz'
          />
          <p>
            Don't have an access code?{" "}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://wa.me/2348132157321'
            >
              Request here
            </a>{" "}
          </p>
        </form>
      </div>
    </main>
  );
};
export default Login;
