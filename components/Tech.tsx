'use client'
import React from 'react'
import TechComp from './TechComp';

const Tech = () => {
  return (
    <div className='flex justify-center items-center h-max flex-col text-white md:mb-60 mb-48'>
        <div className='md:text-5xl text-2xl font-bold'>
          My TechStack
        </div>
        <div className='mt-10'>
          <TechComp/>
        </div>
    </div>
  )
}

export default Tech;
