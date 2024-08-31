'use client'
import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import Button from './ui/Button'
import AnimationSkills from './ui/AnimationSkills'

const Hero = () => {
  return (
    <div className='md:mb-60 mb-48 mt-10 font-sans-serif '>
        <h1 className="relative z-10 text-3xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center font-sans-serif font-bold">
        Vinit Prajapati
        </h1>
        <div className='text-white md:text-4xl text-center text-lg md:mt-5 mt-2'>
            I build <AnimationSkills/>
        </div>
        <p className="text-neutral-400 max-w-5xl text-center mx-auto my-4 text-md md:text-lg  relative z-10">
        I am a final-year undergraduate and a passionate full-stack developer with a strong enthusiasm for creating impactful web applications. Proficient in range of technologies and have hands-on experience with AWS, particularly in managing EC2 instances, S3, and deploying websites. I am also proficient in Docker, with experience in building dockerized applications. I thrive in collaborative team environments and am always eager to learn new technologies to create efficient and scalable web solutions. With a solid foundation in full-stack development and cloud computing, I am ready to contribute to dynamic, live projects and make impacts.
        </p>
        <div className='flex justify-center flex-wrap gap-4 md:gap-8 my-4'>
            <a href="https://github.com/Vinit1014" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 md:gap-2 cursor-pointer hover:text-white'>
                <Github className="w-5 h-5 md:w-6 md:h-6" />
                <p className='text-center text-sm md:text-lg'>Github</p>
            </a>
            
            <a href="https://x.com/VinitPr32845926" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 md:gap-2 cursor-pointer hover:text-white'>
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                <p className='text-center text-sm md:text-lg'>Twitter</p>
            </a>
            
            <a href="https://www.linkedin.com/in/vinit-prajapati-644890201/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 md:gap-2 cursor-pointer hover:text-white'>
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                <p className='mt-1 text-center text-sm md:text-lg'>Linkedin</p>
            </a>
        </div>

        <div className='flex justify-center text-white'>
            <Button/>
        </div>
    </div>
  )
}

export default Hero
