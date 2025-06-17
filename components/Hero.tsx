'use client'
import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import Button from './ui/Button'
import AnimationSkills from './ui/AnimationSkills'
import { useSectionInView } from '@/lib/hooks'

const Hero = () => {

  const { ref } = useSectionInView('Home');

  return (
    <div ref={ref} id='Home' className='md:mb-60 mb-48 mt-12 font-sans-serif '>
        <h1 className="relative z-10 text-3xl md:text-8xl bg-clip-text bg-gradient-to-b from neutral-200 to-neutral-500 text-center font-bold font-sans-serif">
        Vinit Prajapati
        </h1>
        {/* <h1 className="relative z-10 text-3xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center font-sans-serif font-bold">
        Vinit Prajapati
        </h1> */}
        <div className='text-white md:text-4xl text-center text-lg md:mt-5 mt-2'>
            I build <AnimationSkills/>
        </div>
        <p className="text-neutral-400 max-w-5xl text-center mx-auto my-4 text-md md:text-lg  relative z-10">
        I am a full-stack developer currently working at Almashines Technologies, where I build scalable and user-centric solution to existing web application product using Angular, PHP, and MySQL. With a strong foundation in both frontend and backend development, I have also worked extensively with cloud technologies like AWS (EC2, S3) and containerization tools like Docker. I have contributed to building real-time data sync systems, automation workflows, and dynamic dashboards using platforms like Bitrix24, Google Apps Script, and Grafana. I thrive in collaborative, fast-paced environments and continuously explore new technologies to deliver impactful, production-ready solutions.
        Recently, I have also begun exploring AI/ML technologies and their real-world applications, with a focus on integrating intelligent automation into web systems.
        </p>
        <div className='flex justify-center flex-wrap gap-4 md:gap-8 my-4'>
            <a href="https://github.com/Vinit1014" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 md:gap-2 cursor-pointer hover:text-white hover:scale-105'>
                <Github className="w-5 h-5 md:w-6 md:h-6" />
                <p className='text-center text-sm md:text-lg'>Github</p>
            </a>
    
            <a href="https://x.com/VinitPr32845926" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 md:gap-2 cursor-pointer hover:text-white hover:scale-105'>
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                <p className='text-center text-sm md:text-lg'>Twitter</p>
            </a>
            
            <a href="https://www.linkedin.com/in/vinit-prajapati-644890201/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 md:gap-2 cursor-pointer hover:text-white hover:scale-105'>
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
