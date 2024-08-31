// "use client";
// import React, { useState } from "react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems = ["Projects", "Tech", "Contact"];

//   return (
//     <nav className="bg-neutral-900 text-neutral-200 w-full px-4 py-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Brand Name */}
//         <div className="text-xl font-bold ml-2">
//           Vinit | Developer
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
//               href="#"
//               className="text-neutral-200 hover:text-white text-xl"
//             >
//               {item}
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
//               href="#"
//               className="text-neutral-200 hover:text-white text-lg"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// //NextUI
// // "use client";
// // import React from "react";
// // import {
// //   Navbar,
// //   NavbarBrand,
// //   NavbarContent,
// //   NavbarItem,
// //   NavbarMenuToggle,
// //   NavbarMenu,
// //   NavbarMenuItem,
// //   Link,
// //   Button,
// // } from "@nextui-org/react";
// // import { Github } from 'lucide-react';

// // export default function NavbarComp() {
// //   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

// //   const menuItems = [
// //     "Projects",
// //     "Tech",
// //     "Contact"
// //   ];

// //   return (
// //     <Navbar
// //       onMenuOpenChange={setIsMenuOpen}
// //       className="bg-neutral-900 text-neutral-200 w-full"
// //     >
// //       <NavbarContent className="w-full">
// //         <NavbarMenuToggle
// //           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
// //           className="sm:hidden text-neutral-200"
// //         />
// //         <NavbarBrand className="text-xl">
// //           <span className="text-neutral-200 font-bold ml-2">Vinit | Developer</span>
// //         </NavbarBrand>
// //       </NavbarContent>
      
// //       <NavbarContent className="hidden sm:flex gap-4" justify="center">
// //         {/* {menuItems.map((item, index) => (
// //           <NavbarItem key={index}>
// //             <Link color="foreground" href="#" className="text-neutral-200">
// //               {item}
// //             </Link>
// //           </NavbarItem>
// //         ))} */}
// //       </NavbarContent>

// //       <NavbarContent justify="end">
// //         {/* <NavbarItem className="hidden lg:flex">
// //           <Link target="_blank" href="https://github.com/Vinit1014" className="text-neutral-200">
// //             <Github />
// //           </Link>
// //         </NavbarItem> */}
// //         {menuItems.map((item, index) => (
// //           <NavbarItem key={index}>
// //             <Link color="foreground" href="#" className="text-neutral-200 text-xl">
// //               {item}
// //             </Link>
// //           </NavbarItem>
// //         ))}
// //       </NavbarContent>
      
// //       <NavbarMenu className="bg-neutral-900 text-neutral-200">
// //         {menuItems.map((item, index) => (
// //           <NavbarMenuItem key={`${item}-${index}`}>
// //             <Link
// //               color={
// //                 index === 2
// //                   ? "primary"
// //                   : index === menuItems.length - 1
// //                   ? "danger"
// //                   : "foreground"
// //               }
// //               className="w-full text-neutral-200"
// //               href="#"
// //               size="lg"
// //             >
// //               {item}
// //             </Link>
// //           </NavbarMenuItem>
// //         ))}
// //       </NavbarMenu>
// //     </Navbar>
// //   );
// // }

"use client";
import React, { useState } from "react";

export default function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array of menu items with label and href (link)
  const menuItems = [
    { label: "Projects", href: "#projects" },
    { label: "Tech", href: "#tech" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-neutral-900 text-neutral-200 w-full px-4 py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        
        <div className="text-xl font-bold ml-2">
          <a href="#">

          Vinit | Developer
          </a>
        </div>

        {/* Menu Toggle Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-neutral-200 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        {/* Desktop Menu Items */}
        <div className="hidden sm:flex gap-6 items-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-neutral-200 hover:text-white text-xl"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-2 flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-neutral-200 hover:text-white text-lg"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
