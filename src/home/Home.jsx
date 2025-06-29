import React from 'react'
import { SiGoogledisplayandvideo360 } from "react-icons/si";


export default function HomePage() {
  return (
    <div className='w-[100%] h-[600px] bg-black flex justify-around items-center py-15 px-10 text-white  '>
        <div className=''>
            <h1 className='text-7xl w-[600px] font-serif relative'>
                Best Place buy and sell
                <span className='text-blue-700'>cryptto currency</span>
                asset
            </h1>
            <p className='w-[600px] font-light py-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            mollit anim id est laborum.
                </p>
                <button className='w-[144px] h-[55px] border-1 rounded-xl border-blue-400 bg-blue-400 font-bold'> Get started </button>
                <button className='w-[170px] h-[55px] border-1 rounded-xl border-blue-400 bg-black text-white  ml-9 font-bold'>
                    <div className='w-[100%] flex items-center justify-center gap-2'>
                    <SiGoogledisplayandvideo360 className='text-blue-400' />
                    Watch tutorials
                    </div>
         </button>
        </div>
        <div>
            <img className='w-[2350px h-[500px] ' src="https://i.postimg.cc/ZnwSVwJw/5ee1cf20060b124e783077f915feefca-removebg-preview.png" alt="img bitcoin" />
        </div>
    </div>
  )
}
