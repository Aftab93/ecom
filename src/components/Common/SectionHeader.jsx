// components/Common/SectionHeader.js
import React from 'react'

const SectionHeader = ({ smallText, heading, subText }) => {
  return (
    <div className='text-center mb-10 max-w-[600px] mx-auto'>
      <p className='text-sm text-primary'>{smallText}</p>
      <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>{heading}</h1>
      <p data-aos="fade-up" className='text-xs text-gray-400'>{subText}</p>
    </div>
  )
}

export default SectionHeader
