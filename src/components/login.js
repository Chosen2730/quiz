import logo from "./../images/logo.png";
import { useGlobalContext } from "./../context";
const Login = () => {
  const { name } = useGlobalContext();
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
        <form action=''>
          <input type='text' placeholder='Your name' />
          <input type='text' placeholder='access code' />
          <input className='login_btn' type='button' value='Login' />
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
