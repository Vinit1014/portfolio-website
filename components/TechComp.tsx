import React from 'react'
import { techData } from '@/utils/Data'

const TechComp = () => {
  return (
    <div className='flex flex-wrap justify-center mx-5'>
        {techData.map((data)=>{
            return(
              <div key={data.key} className="my-3 mx-2 sm:mx-4 flex flex-col items-center bg-indigo-800  px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-indigo-950 cursor-pointer">
                <div className='text-3xl'>
                  {data.icon}
                </div> 
                <p className='mt-2 font-bold '>{data.desc}</p>
              </div>    
            )
        })}
    </div>
  )
}

export default TechComp
