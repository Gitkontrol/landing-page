import React from 'react'

const Features = ({logo, heading, description}) => {
  return (
    <div className='flex flex-col items-center text-center pt-12'>
      <div className='flex flex-col items-center content-between'>
        <img src={logo} alt='PC logo with phone' className='h-14 w-14 mt-16' />
        <p className='font-bold font-raleway text-lg pt-8 pb-2'>{heading}</p>
        <p className='font-normal text-sm font-openSans'>{description}</p>
      </div>      
    </div>
  )
}

export default Features