import React from 'react'

export default function AboutPage() {
  return (
    <div className='w-[100%] h-[800px] flex justify-around items-center  bg-[black] text-white px-5 gap-18'>
        <div>
            <img className='w-[1300px] h-[325px] ' src="https://i.postimg.cc/nzCg4vRt/rm373batch4-07-1.png" alt="img" />
        </div>
        <div className='relative'>
            <h2 className='text-blue-400 text-2xl'>About us</h2>
            <h1 className='text-4xl py-3  '>Accelerate the world's transition</h1> 
            <p className='text-sm w-[600px] font-mono  '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est 
            laborum.
            </p>
            <img className='absolute top-[100px] left-[0] pl-[200px] ' src="https://i.postimg.cc/QtQk1PtP/Vector-1.png" alt="" />
            <img className='absolute top-[100px] left-[0] pl-[200px] ' src="https://i.postimg.cc/QtQk1PtP/Vector-1.png" alt="" />
            <button className='w-[170px] h-[50px] bg-blue-400 rounded-xl mt-3'>More abou Us</button>
        </div>
    </div>
  )
}
