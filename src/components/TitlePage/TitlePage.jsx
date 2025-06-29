import React from 'react'
import { IoWallet } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { SlBasket } from "react-icons/sl";

export default function TitlePage() {
  return (
    <>
     <div className='w[100%] h-[750px] bg-black flex flex-col justify-center items-center text-white pt-[85px] '>
            <div className='text-center'>
                <h2 className='text-blue-400'>Step by step guide</h2>
                <h2 className='text-5xl py-5 font-bold '>Easy Steps to Success</h2>
                <p className='w-[770px] font-serif text-sm text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. 
                                                   Duis aute  mollit anim id est laborum.
                </p>
            </div>
            <div className='w-[100%] flex justify-center items-center gap-4 pt-15'>
                <div  className='w-[300px] h-[380px] border-1 rounded-xl border-gray-600  pt-8 text-center'>
                    <div className='ml-23'>
                <IoWallet  className='text-blue-400 text-8xl '/>
                    </div>
                <h1 className='py-3 text-3xl '>Create Wallet</h1>
                <p className='w-[700px]text-sm font-light text-gray-400'>
                Lorem ullamco laboris nisi ex ea 
                commodo consequat. Duis aute  mollit 
                anim id est laborum sad to veniam
                 nostrud quis exercition laboris.
                </p>
                <button className='w-[160px] h-[55px] border-1 rounded-xl border-blue-400 bg-blue-400 font-bold mt-6' >
                        <div className='w-[100%] flex items-center justify-center gap-2  '>
                        Learn More 
                        <FaAngleRight className='text-white pt-1 text-2xl '/>
                        </div>
                </button>
                </div>
                   {/*next2*/ }
                   <div   className='w-[300px] h-[380px] border-1 rounded-xl border-gray-600  pt-8 text-center'>
                    <div className='ml-23'>
                   <MdOutlinePayments  className='text-blue-400 text-8xl'/>
                    </div>
                <h1 className='py-3 text-3xl '>Make Payment</h1>
                <p className='w-[700px]text-sm font-light text-gray-400'>
                Lorem ullamco laboris nisi ex ea 
                commodo consequat. Duis aute  mollit 
                anim id est laborum sad to veniam
                 nostrud quis exercition laboris.
                </p>
                <button className='w-[160px] h-[55px] border-1 rounded-xl border-blue-400 bg-blue-400 font-bold mt-6' >
                        <div className='w-[100%] flex items-center justify-center gap-2 '>
                        Learn More 
                        <FaAngleRight className='text-white pt-1 text-2xl '/>
                        </div>
                </button>
                </div>
                {/*next3*/ }
                <div  className='w-[300px] h-[380px] border-1 rounded-xl border-gray-600  pt-8 text-center' >
                <div className='ml-23'>
                <SlBasket  className='text-blue-400 text-8xl'/>
                </div>
                <h1 className='py-3 text-3xl '>Buy and or sell</h1>
                <p className='w-[300px] text-cm  font-light  text-gray-400'>
                Lorem ullamco laboris nisi ex ea 
                commodo consequat. Duis aute  mollit 
                anim id est laborum sad to veniam
                 nostrud quis exercition laboris.
                </p>
                <button className='w-[160px] h-[55px] border-1 rounded-xl border-blue-400 bg-blue-400 font-bold mt-6' >
                        <div className='w-[100%] flex items-center justify-center gap-2 '>
                        Learn More 
                        <FaAngleRight className='text-white pt-1 text-2xl'/>
                        </div>
                </button>
                </div>
            </div>
        </div>
    </>
  )
}
