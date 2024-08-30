'use client'

import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-center bg-black text-white">
        <div className="flex-1 p-4">
            {/* Form Section */}
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <form>
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Your Name</label>
                <input
                type="text"
                placeholder="What's your good name?"
                className="w-full p-3 rounded bg-[#1c1a3f] text-white"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Your Email</label>
                <input
                type="email"
                placeholder="What's your web address?"
                className="w-full p-3 rounded bg-[#1c1a3f] text-white"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Your Message</label>
                <textarea
                placeholder="What you want to say?"
                className="w-full p-3 rounded bg-[#1c1a3f] text-white h-32"
                />
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded">
                Send Message
            </button>
            </form>
        </div>
        
        {/* XYZ Section */}
        <div className="flex-1 p-4">
            XYZ
        </div>
    </div>

  )
}

export default Contact
