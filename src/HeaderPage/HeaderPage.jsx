import Link from 'next/link'
import React from 'react'

export default function HeaderPage() {
  return (
    <div className='w-[100%] h-[90px] flex justify-between px-10 py-5 bg-black text-white '>
     <div className='flex  gap-5 items-center' >
        <div>
            <img src="https://i.postimg.cc/k5LLgwKZ/Group-816.png" alt="" />
        </div>
        <h1 className='text-3xl font-serif font-bold'>Coinary</h1>
     </div>
     <div className='flex gap-10 text-white items-center'>
        <Link className='text-blue-700' href={'/'}>Home</Link>
        <Link className='hover:text-blue-500' href={'/'}>About</Link>
        <Link className='hover:text-blue-500' href={'/'}>Our App</Link>
        <Link className='hover:text-blue-500' href={'/'}>Pages</Link>
        <Link className='hover:text-blue-500' href={'/'}>Taken sale</Link>
     </div>
     <div>
        <button className='w-[180px] h-[50px] border-1 rounded-lg bg-blue-500 border-blue-500 font-semibold '>Dowload App</button>
     </div>
    </div>
  )
}