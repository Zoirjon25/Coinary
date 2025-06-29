import React from 'react'

export default function ServicesPage() {
  return (
    <>
     <div className="w-[100%] h-[500px]  bg-black gap-16 flex  justify-evenly items-center text-white">
      <div className="flex flex-col justify-evenly items-start pl-10">
        <p className="text-blue-700  text-lg ">Our vision</p> 
        <h3 className=" text-3xl ">Users from all over the world</h3>
        <p className="w-[500px] text-gray-400 text-sm pt-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</p>
        <div className="flex  gap-20 pt-8 font-bold ">
            <div className='flex flex-col'>
           <h2 className="text-5xl ">32K+</h2>
           <p>People Joined</p>
            </div>
            <div className='flex flex-col'>
           <h2 className="text-5xl ">250+</h2>
           <p>Vip Users</p>
            </div>
            <div className='flex flex-col'>
           <h2 className="text-5xl ">87+</h2>
           <p>Company</p>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
          <img src="https://i.postimg.cc/SsvTJTqg/v875-katie-35-Converted-1.png" alt="" />
      </div>
   </div>
    </>
  )
}
