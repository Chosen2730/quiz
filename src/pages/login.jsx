import { useState } from "react";
import { useGlobalContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/formInput";
import GoogleFb from "../components/googleFb";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";

const Login = () => {
  const {
    isPasswordVisible,
    handleSignIn,
    setEmail,
    setPassword,
    signUpWithGoogle,
    loading,
    errorMsg,
  } = useGlobalContext();
  const [isPermit, setIsPermit] = useState(false);
  const ACCESS_CODE = "02082022";
  const navigate = useNavigate();

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto min-h-screen justify-center p-4'>
      <img src='https://thumbs.dreamstime.com/b/exam-preparing-technology-examination-preparation-better-study-together-students-books-laptop-knowledge-training-vector-193094553.jpg' />
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn(navigate);
        }}
        className='shadow-xl p-4 md:p-8'
      >
        <div className='mb-5'>
          <h2 className='text-4xl font-bold my-3'>Login</h2>
          <p className='text-sm text-gray-500'>Login in with</p>
        </div>
        <GoogleFb func={() => signUpWithGoogle(navigate)} />

        <div className='flex items-center my-10 gap-2'>
          <hr className='w-full border-gray-400 bg-gray-400 h-[1px]' />
          <h2 className='w-full text-center text-gray-500 text-sm'>OR</h2>
          <hr className='w-full border-gray-400 bg-gray-400 h-[1px]' />
        </div>

        <FormInput
          label='Email Adress'
          id='email'
          placeholder='Enter email address'
          type='email'
          func={(e) => setEmail(e.target.value)}
        />
        <FormInput
          password
          login
          type={isPasswordVisible ? "text" : "password"}
          label='Password'
          id='password'
          placeholder='Enter your password'
          func={(e) => setPassword(e.target.value)}
        />
        {isPermit && <p>Invalid Access code</p>}

        <button className='rounded-md shadow-xl p-4 px-8 bg-red-700 text-white w-full hover:scale-95 hover:bg-red-900 transition text-base font-medium cursor-pointer'>
          {loading ? <Dots /> : "Login"}
        </button>
        {errorMsg && (
          <p className='text-center capitalize italic text-sm my-3 text-red-600 font-medium'>
            {errorMsg}
          </p>
        )}
        <p className='text-sm text-gray-500 my-5'>
          Don't have an account yet?{" "}
          <Link to='/signup'>
            <span className='text-red-700 cursor-pointer'>Sign up</span>.{" "}
          </Link>
        </p>
      </form>
    </main>
  );
};
export default Login;
