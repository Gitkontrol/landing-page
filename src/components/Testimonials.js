import React from 'react'
import { profile1, profile2, profile3, quotes } from '../assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col gap-6 pt-4 lg:flex-row lg:justify-center lg:gap-6 font-openSans items-center text-xs mt-28'>
        <img src={quotes} alt='quotation marks' className='w-6 h-5 z-0 font-normal relative top-7 right-32 lg:absolute lg:top-[255%] lg:right-[91.5%] lg:h-7 lg:w-9' />
      
        <div className='flex flex-col justify-center gap-4 border rounded-sm border-slate h-40 w-72 bg-[#202A3C] z-10 px-4'> 
          <div className='leading-4'>
           Fylo has improved our team productive by an order
           of magnitude. Since making the switch our team has become 
           a well-oiled collaboration machine.
          </div>   
          <div className='flex gap-2'>
            <img src={profile1} alt='profile pic' className='w-7 h-7 align-middle rounded-xl' />  
            <div className='-leading-1'>Satish Patel<p className='text-[10px]'>Founder & CEO, Huddle</p></div>
          </div>              
        </div>          

        <div className='flex flex-col justify-center gap-4 border rounded-sm border-slate h-40 w-72 bg-[#202A3C] z-10 px-4'> 
          <div className='leading-4'>
           Fylo has improved our team productive by an order
           of magnitude. Since making the switch our team has become 
           a well-oiled collaboration machine.
          </div>   
          <div className='flex gap-2'>
            <img src={profile2} alt='profile pic' className='w-7 h-7 align-middle rounded-xl' />  
            <div className='-leading-1'>Bruce Mckenzie<p className='text-[10px]'>Founder & CEO, Huddle</p></div>
          </div>              
        </div>          

        <div className='flex flex-col justify-center gap-4 border rounded-sm border-slate h-40 w-72 bg-[#202A3C] z-10 px-4'> 
          <div className='leading-4'>
           Fylo has improved our team productive by an order
           of magnitude. Since making the switch our team has become 
           a well-oiled collaboration machine.
          </div>   
          <div className='flex gap-2'>
            <img src={profile3} alt='profile pic' className='w-7 h-7 align-middle rounded-xl' />  
            <div className='-leading-1'>Iva Boyd<p className='text-[10px]'>Founder & CEO, Huddle</p></div>
          </div>              
        </div>
               
    </div>
  )
}

export default Testimonials