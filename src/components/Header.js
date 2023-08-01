import React from 'react'
import { logo } from '../assets'

export const Header = () => {
  return (
    <div className='flex justify-between items-center px-4 py-5 lg:pt-14 lg:pl-14 lg:pr-14'>
        <div>
        <img src={logo} alt='Logo' className='h-6 lg:h-9' />
        </div>
        
        <div>
            <ul className='flex gap-6 font-raleway text-normal list-none text-xs cursor-pointer'>
                <li className='hover:underline'>Features</li>
                <li className='hover:underline'>Team</li>
                <li className='hover:underline'>Sign in</li>
            </ul>
        </div>
    </div>
  )
}
