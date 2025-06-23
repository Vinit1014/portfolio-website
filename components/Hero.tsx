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
        I am a full-stack developer passionate about building scalable and user-centric web applications using React, Node.js, and MySQL. With solid experience across both frontend and backend development, I have also worked extensively with cloud platforms like AWS (EC2, S3) and containerization tools like Docker. I have contributed to real-time data sync systems, automation workflows, and dynamic dashboards using platforms such as Bitrix24, Google App Script, Grafana.
        <br></br>
        <br></br>
        Currently, I am exploring intelligent automation by building a project using Model Context Protocol (MCP) and Langchain, focused on enabling secure and contextual LLM-powered tools for finance workflows. I thrive in fast-paced, collaborative environments and enjoy pushing ideas from concept to production-ready product.
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
