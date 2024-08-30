'use client'
import { FaDownload } from "react-icons/fa";
import React from 'react'

const Button = () => {
    return (
        <div className="md:mt-6 mt-6">
            <div className="py-4 px-4 rounded-full border-2 bg-indigo-900/30 border-white shadow-white/50 shadow-lg relative w-max mt-5 md:mt-0">
                <a href="https://drive.google.com/file/d/1U7x11fDLXnCbHFOe10M0BZZewRypjmYu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <button
                        className="flex items-center"
                        onClick={() => {
                            console.log("Button clicked");
                        }}
                    >
                        <FaDownload className="mr-3" />
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Button;
