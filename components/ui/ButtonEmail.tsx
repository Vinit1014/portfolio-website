import React from 'react'
import { CiMail } from "react-icons/ci";
const ButtonEmail = () => {
  return (
    <div className="md:mt-6 mt-2">
            <div className="py-4 px-4 rounded-full border-2 bg-indigo-900/30 border-white shadow-white/50 shadow-lg relative w-max mt-5 md:mt-0 md:text-2xl text-lg">
                <a href="mailto:vinit10dev@gmail.com">
                    <button
                        className="flex items-center animate-slow-blink hover:animate-none"
                        onClick={() => {
                            console.log("Hey! got clicked");
                        }}
                    >
                        <CiMail className="mr-3" />
                        Click here
                    </button>
                </a>
            </div>
        </div>
  )
}

export default ButtonEmail