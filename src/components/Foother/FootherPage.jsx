
import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { BsHeadphones } from "react-icons/bs";


export default function FootherPage() {
  return (
    <>
    <div className='w[100%] h-[1000px] bg-black flex flex-col justify-evenly items-center text-white  '>
      <div className='text-center'>
                <h2 className='text-blue-400'>Our Features</h2>
                <h2 className='text-5xl py-5 font-bold '>All you need is here</h2>
                <p className='w-[690px] font-serif text-sm text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. 
                                                   Duis aute  mollit anim id est laborum.
                </p>
            </div>
            <div className='flex '>
            <div className='w-[100%]  fle-col justify-start  items-start pt-17  '>
                 <div  className='w-[300px] h-[345px] flex-col border-4 rounded-xl border-blue-400  pt-8 text-center'>
                                   <div className='ml-23'>
                                   <BsPersonFill  className='text-blue-400 text-8xl'/>
                                   </div>
                               <h1 className='py-3 text-3xl '>Free trial Account</h1>
                               <p className='w-[700px]text-sm font-light text-gray-400'>
                               Lorem ullamco laboris nisi ex ea 
                               commodo consequat. Duis aute  mollit 
                               anim id est laborum sad to veniam
                                nostrud quis exercition laboris.
                               </p>
                               </div>
                    {/*next2*/}
                    <div  className='w-[300px] h-[345px] flex-col border-4 rounded-xl border-blue-700  pt-8 text-center mt-15'>
                                   <div className='ml-23'>
                                   <AiFillLike  className='text-blue-400 text-8xl'/>

                                   </div>
                               <h1 className='py-3 text-3xl '>Affordable</h1>
                               <p className='w-[700px]text-sm font-light text-gray-400'>
                               Lorem ullamco laboris nisi ex ea 
                               commodo consequat. Duis aute  mollit 
                               anim id est laborum sad to veniam
                                nostrud quis exercition laboris.
                               </p>
                               </div>

            </div>
                               <div className='flex justify-center items-center'>
                                <img className='w-[1300px] h-[500px]' src="https://i.postimg.cc/Y25RpTzj/bitcoin-3d-illustration-transformed-1.png" alt="" />
                               </div>
                               
                               {/*next-end*/}
                  <div className='w-[100%]  fle-col justify-end items-end-safe pt-17  pl-40'>
                 <div  className='w-[300px] h-[345px] flex-col justify-end it border-4 rounded-xl border-blue-400  pt-8 text-center '>
                                   <div className='ml-23'>
                                   <CiStar  className='text-blue-400 text-8xl'/>
                                   </div>
                               <h1 className='py-3 text-3xl '>Free trial Account</h1>
                               <p className='w-[700px]text-sm font-light text-gray-400'>
                               Lorem ullamco laboris nisi ex ea 
                               commodo consequat. Duis aute  mollit 
                               anim id est laborum sad to veniam
                                nostrud quis exercition laboris.
                               </p>
                               </div>
                    {/*next2*/}
                    <div  className='w-[300px] h-[345px] flex-col border-4 rounded-xl border-blue-700  pt-8 text-center mt-15'>
                                   <div className='ml-23'>
                                   
                                   <BsHeadphones  className='text-blue-400 text-8xl'/>
                                   </div>
                               <h1 className='py-3 text-3xl '>Affordable</h1>
                               <p className='w-[700px]text-sm font-light text-gray-400'>
                               Lorem ullamco laboris nisi ex ea 
                               commodo consequat. Duis aute  mollit 
                               anim id est laborum sad to veniam
                                nostrud quis exercition laboris.
                               </p>
                               </div>
            </div>
            </div>
    </div>
    </>
  )
}
