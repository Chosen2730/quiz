import React from "react";
import fb from "../images/facebook.png";
import gg from "../images/google.png";
import { useGlobalContext } from "../context";

const GoogleFb = ({ func }) => {
  return (
    <div className='flex justify-between gap-8'>
      <div
        className='p-4 w-full rounded-md border-gray-200 flex gap-2 items-center border-2 justify-center hover:scale-95 cursor-pointer'
        onClick={func}
      >
        <img src={gg} className='w-5 h-5' alt='google' />
        <h2 className='text-sm'>Google</h2>
      </div>
      {/* <div className='p-4 w-full rounded-md border-gray-200 flex gap-2 items-center border-2 justify-center hover:scale-95 cursor-pointer'>
        <img src={fb} className='w-5 h-5' alt='facebook' />
        <h2 className='text-sm'>Facebook</h2>
      </div> */}
    </div>
  );
};

export default GoogleFb;
