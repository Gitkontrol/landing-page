import React from 'react'
import { email } from '../assets'

const Registration = () => {
  return (
    <div className=' flex flex-col mx-auto relative top-40 z-10 px-6 mt-8 justify-center items-center text-center text-white gap-6 w-[336px] h-[353px] lg:w-[700px] lg:h-[235px] bg-[#202A3C] rounded-md'>
        <div className='font-semibold font-raleway text-md lg:text-[32px]'>Get early access today</div>
        <div className='text-sm font-openSans font-light'>
        It only takes a minute to sign up and our free starter tier 
        is extremely generous. If you have any questions, our support team would be happy to help you.
        </div>
        <div className='flex flex-col lg:flex-row gap-5'>
         <input className='w-[280px] lg:w-96 h-12 rounded-3xl placeholder:text-xs pl-5' type='email' placeholder='email@example.com' />
         <button className='w-[280px] lg:w-44 h-12 rounded-3xl font-raleway text-sm font-semibold bg-[#62E0D9] px-3.5 py-2.5'>Get started for free</button>
        </div>
    </div>
  )
}

export default Registration