import React from 'react'
import { logo, location, email, phone } from '../assets'
import {FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa'



const Footer = () => {
  return (
    <div className='flex flex-col relative z-0 w-screen pt-24 pl-7 h-[974px] lg:w-screen lg:h-screen lg:mt-10 bg-[#0B1524]'>
        <img src={logo} alt='logo' className='h-[31px] w-[108px] mt-36' />
        <div className='lg:grid lg:grid-cols-3'>
            <div className='flex flex-col relative mt-14 gap-5 lg:flex-row'>
                <div className='flex gap-7 lg:right-5'>
                    <img src={location} alt='location logo' className='w-4 h-4 relative top-[6px]'/>
                    <p className='lg:w-64'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='flex flex-col gap-5 lg:flex-col lg:w-full lg:ml-10'>        
                    <div className='flex gap-6 lg:w-[110%] lg:pb-3'>
                        <img src={phone} alt='phone logo' className='w-4 h-3 relative top-[6px]' /><p>+1-543-123-4567</p>
                    </div>                        
                    <div className='flex gap-5'> 
                        <img src={email} alt='email logo' className='w-5 h-4 relative top-[6px]' /> <p>example@fylo.com</p>
                    </div>
                </div>             
            </div>

            <div className='flex flex-col font-open-sans relative text-md font-normal mt-14 gap-10 lg:flex-row lg:bottom-2 lg:left-[230px] lg:gap-16'>
                <div className='lg:pt-[7px]'>
                    <p>About us</p>
                    <ul className='list-none pt-2 leading-10'>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div>
                    <ul className='list-none leading-10'>
                        <li>Contact us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-center mx-auto gap-3 mt-24 pr-8 relative bottom-10 lg:max-xl:hover:fill-#62E0D9 lg:flex-row lg:left-20'>
                <FaTwitter className='border w-7 h-7 p-1.5 rounded-full' />
                <FaFacebookF className='border w-7 h-7 p-1.5 rounded-full' />
                <FaInstagram className='border w-7 h-7 p-1.5 rounded-full' />
            </div>
        </div>           
    </div>
  )
}

export default Footer