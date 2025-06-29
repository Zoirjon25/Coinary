import React from 'react'



export default function LoginPage() {
  return (
         <>
          <div className='w[100%] h-[450px] bg-black flex flex-col justify-between items-center text-white pl-40  '>
                     <div className='w-[100%]  flex justify-between  items-center pt-17 gap-40'>
                                        <div className='flex justify-center items-center'>
                                         <img className='' src="https://i.postimg.cc/G2DhPB8F/Design.png" alt="" />
                                        </div>
                                        
                                        {/*next-end*/}
                           <div className='w-[100%]  flex-col justify-center items-center pt-17  '>
                          <h2 className='text-lg '>Start Now</h2>
                          <h1 className='text-3xl py-4 pt-4 font-semibold'>Sign up to learn more</h1>
                          <p className='w-[475px] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.
                          </p>
                             {/*next2*/}
                             <div  className='py-4'>
                                           <input  className='w-[300px] h-[40px] border-1 bg-white border-white text-black rounded-lg pl-4 font-semibold' type="email" placeholder='Enter your email'  />
                                           <button  className='w-[90px] h-[40px] border-1 bg-blue-400 border-blue-400 rounded-lg'>Subscribes</button>
                                         
                                        </div>
                     </div>
                     </div>
                     
             </div>
             
         </>
  )
}
 