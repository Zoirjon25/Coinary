import React from 'react'
import { TbLockSquareRounded } from "react-icons/tb";
import { MdInsertChartOutlined } from "react-icons/md";
import { TbCoinBitcoin } from "react-icons/tb";
import { FaBity } from "react-icons/fa6";

export default function ChosePage() {
  return (
    <div className='w[100%] h-[560px] bg-black flex flex-col justify-center items-center text-white '>
        <div className='text-center'>
            <h2 className='text-blue-400'>Why Choose Us</h2>
            <h2 className='text-5xl py-5 font-bold '>Safe, guaranteed, and easy to use</h2>
            <p className='w-[850px] font-serif text-sm text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
            </p>
        </div>
        <div className='w-[100%] flex justify-around items-center gap-4 pt-15'>
            <div  className='w-[300px] h-[320px] border-1 rounded-xl border-gray-600 pl-10 pt-8'>
            <TbLockSquareRounded className='text-blue-400 text-8xl' />
            <h1 className='py-3 text-3xl '>Safe and secure</h1>
            <p className='text-sm font-light text-gray-400'>
            Lorem ullamco laboris nisi ex ea 
            commodo consequat. Duis aute  mollit 
            anim id est laborum sad to veniam
             nostrud quis exercition laboris.
            </p>
            </div>
               {/*next2*/ }
               <div  className='w-[300px] h-[320px] border-1 rounded-xl border-gray-600 pl-10 pt-8'>
               <MdInsertChartOutlined  className='text-blue-400 text-8xl'/>
            <h1 className='py-3 text-3xl '>Safe and secure</h1>
            <p className='text-sm font-light text-gray-400'>
            Lorem ullamco laboris nisi ex ea 
            commodo consequat. Duis aute  mollit 
            anim id est laborum sad to veniam
             nostrud quis exercition laboris.
            </p>
            </div>
            {/*next3*/ }
            <div  className='w-[300px] h-[320px] border-1 rounded-xl border-gray-600 pl-10 pt-8'>
            <TbCoinBitcoin className='text-blue-400 text-8xl' />
            <h1 className='py-3 text-3xl '>Safe and secure</h1>
            <p className='text-sm font-light text-gray-400'>
            Lorem ullamco laboris nisi ex ea 
            commodo consequat. Duis aute  mollit 
            anim id est laborum sad to veniam
             nostrud quis exercition laboris.
            </p>
            </div>
            {/*next4*/ }
            <div  className='w-[300px] h-[320px] border-1 rounded-xl border-gray-600 pl-10 pt-8'>
            <FaBity className='text-blue-400 text-8xl'/>
            <h1 className='py-3 text-3xl '>Safe and secure</h1>
            <p className='text-sm font-light text-gray-400'>
            Lorem ullamco laboris nisi ex ea 
            commodo consequat. Duis aute  mollit 
            anim id est laborum sad to veniam
             nostrud quis exercition laboris.
            </p>
            </div>
        </div>
    </div>
  ) 
}
