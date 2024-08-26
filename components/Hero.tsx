'use client'
import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='md:mb-80 mb-48 mt-10'>
        <h1 className="relative z-10 text-3xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center font-sans-serif font-bold">
        Vinit Prajapati
        </h1>
        <h2 className="text-neutral-500 max-w-lg mx-auto my-2 text-lg md:text-2xl text-center relative z-10">
        Full-stack Developer | DevOps Enthusiast
        </h2>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg md:text-xl text-center relative z-10">
        Building high-quality, scalable software ensuring high availability through robust DevOps practices.
        Let's create something powerful together.
        </p>
        <div className='flex justify-center gap-8 '>
            <a href="https://github.com/Vinit1014" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 cursor-pointer'>
                <Github />
                <p className='text-center text-lg'>Github</p>
            </a>
            
            <a href="https://x.com/VinitPr32845926" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 cursor-pointer'>
                <Twitter />
                <p className='text-center text-lg'>Twitter</p>
            </a>
            <a href="https://www.linkedin.com/in/vinit-prajapati-644890201/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 cursor-pointer'>
                <Linkedin />
                <p className='mt-1 text-center text-lg'>Linkedin</p>
            </a>
        </div>
    </div>
  )
}

export default Hero