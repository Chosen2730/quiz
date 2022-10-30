import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useGlobalContext } from "../context";

const FormInput = ({ password, label, id, type, placeholder, login, func }) => {
  const { isPasswordVisible, setIsPasswordVisible } = useGlobalContext();
  const [focussed, setFocussed] = useState(false);
  return (
    <div className='my-5'>
      <div className='flex justify-between my-2'>
        <label htmlFor={id}>{label}</label>
        {password && login && (
          <h2 className='text-sm italic font-gray-400 text-red-700'>
            Forgot password?
          </h2>
        )}
      </div>
      <div className='relative'>
        <input
          id={id}
          className={`${
            focussed ? "border-gray-400" : "border-gray-50"
          } w-full p-3 rounded-md bg-gray-100 border shadow-sm`}
          type={type}
          placeholder={placeholder}
          required={true}
          onFocus={() => setFocussed(true)}
          onBlur={() => setFocussed(false)}
          onChange={func}
        />
        {password && (
          <i
            className='absolute top-3 right-5 text-2xl text-gray-400 cursor-pointer'
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </i>
        )}
      </div>
    </div>
  );
};

export default FormInput;
