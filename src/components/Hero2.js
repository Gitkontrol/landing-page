import React from 'react'
import { productive, arrow } from '../assets'

const Hero2 = () => {
  return (
    <div className='lg:flex lg:mx-auto lg:mt-7'>
        <div className='mt-24 lg:mx-auto lg:pl-7'>
          <img src={productive} alt='illustration' className='lg:h-80' />
        </div>
          <div className='flex flex-col mx-auto w-fit flex-wrap content-center lg:mx-auto lg:w-[50%] lg:mt-32'>
            <p className='font-raleway text-center font-bold text-lg mt-10 pb-2 lg:w-[70%] lg:pl-3 lg:text-3xl'>Stay productive, wherever you are</p>
            <p className='font-openSans pb-4 text-sm text-normal leading-[21px] px-6'>
            Never let location be an issue when accessing your files. 
            Fylo has you covered for all of your file storage needs.
            </p>
            <p className='font-openSans text-sm text-normal leading-[21px] pb-3 px-6'>
            Securely share files and folders with friends, 
            family and colleagues for live collaboration. No email attachments required.
            </p>
          
            <div className='flex ml-6 gap-2 w-fit font-openSans text-blue text-xs border-b-[1.5px] pb-[1.5px] border-blue'>
              <p>See how Fylo works</p>
              <img src={ arrow } alt='arrow logo' className='align-middle w-4' />
          </div>            
        </div>        
    </div>
  )
}

export default Hero2