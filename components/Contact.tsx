'use client'

import React from 'react'

import ButtonEmail from './ui/ButtonEmail'

const Contact = () => {
    return (
        <div id='contact' className="flex flex-col w-full items-center justify-center bg-black text-white">
            <div className='md:text-5xl text-2xl font-bold mb-2 md:mb-6'>
            Reach out to me
            </div>
            {/* XYZ Section */}
            <ButtonEmail/>
            <div className="">
                
            </div>
            <div className='mt-4 text-neutral-400'>&quot;Let's create something better together.&quot;</div>
        </div>
    )
}

export default Contact
