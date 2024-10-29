import React from 'react'
import { motion } from 'framer-motion'
import { techData } from '@/utils/Data'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index:number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

const TechComp = () => {
  return (
    <div className="flex flex-wrap justify-center mx-5">
      {techData.map((data, index) => (
        <motion.div
          key={data.key}
          className="my-3 mx-2 sm:mx-4 flex flex-col items-center bg-indigo-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg cursor-pointer text-white"
          variants={fadeInAnimationVariants}
          initial="initial"
          custom={index}
          whileInView='animate'
          whileHover={{
            scale: 1.1,
            backgroundColor: '#6D28D9', // Adjust the color as desired
          }}
          transition={{
            type: 'spring',
            stiffness: 300
          }}
          viewport={{
            once: true
          }}
        >
          <div className="text-3xl">{data.icon}</div>
          <p className="mt-2 font-bold">{data.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default TechComp
