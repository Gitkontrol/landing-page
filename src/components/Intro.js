import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col flex-wrap justify-around text-white gap-5 p-5 items-center'>
        <div className='lg:flex lg:w-[50%]'>
          <p className='text-2xl font-bold font-raleway text-center leading-9'>
            All your files in one secure location, accessible anywhere.</p>
        </div>
        <div className='lg:w-[40%] font-normal text-sm'>
          <p className='font-sm font-normal font-opensans text-center'>
           Fylo stores all your most important files in one secure location. 
           Access them wherever you need, share and collaborate with friends family, and co-workers.
          </p>
        </div>
        <div className='lg:-mt-3'>
          <button className='text-center rounded-3xl px-20 py-3 mt-5 bg-[#63E1D9] text-sm font-bold font-raleway'>Get Started</button>
        </div>
       
    </div>
  )
}

export default Intro

