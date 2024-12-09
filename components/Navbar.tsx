
// "use client";
// import React, { useState } from "react";

// export default function NavbarComp() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Array of menu items with label and href (link)
//   const menuItems = [
//     { label: "Projects", href: "#projects" },
//     { label: "Tech", href: "#tech" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="bg-neutral-900 text-neutral-200 w-full px-4 py-4 shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Brand Name */}
        
//         <div className="text-xl font-bold ml-2">
//           <a href="#">

//           Vinit | Developer
//           </a>
//         </div>

//         {/* Menu Toggle Button for Mobile */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="sm:hidden text-neutral-200 focus:outline-none"
//         >
//           {isMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           )}
//         </button>

//         {/* Desktop Menu Items */}
//         <div className="hidden sm:flex gap-6 items-center">
//           {menuItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.href}
//               className="text-neutral-200 hover:text-white text-xl"
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="sm:hidden mt-2 flex flex-col gap-4">
//           {menuItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.href}
//               className="text-neutral-200 hover:text-white text-lg"
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/utils/Data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

const NavbarComp = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-1 left-1/2 -translate-x-1/2 h-[3.25rem] w-80 rounded-full border border-gray-700 border-opacity-60 bg-gray-800 bg-opacity-90 shadow-lg shadow-black/[0.2] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  'relative flex w-full items-center justify-center px-3 py-3 hover:text-gray-200 transition',
                  activeSection === link.name
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 bg-gray-700 mt-1 sm:mt-0 rounded-full text-gray-950"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComp;
