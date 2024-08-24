"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import NavbarComp from "./Navbar";

export function BackgroundBeamsDemo({ children }: { children: React.ReactNode }) {
  return (
    <>
    <NavbarComp/>
    <div className="min-h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  text-center font-sans font-bold">
          Vinit Prajapati
        </h1>
        <h1 className="text-neutral-500 max-w-lg mx-auto my-2 text-2xl text-center relative z-10">Full-stack developer | DevOps Enthusiast</h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2  text-md text-center relative z-10">
          Building high-quality, scalable softwares ensuring high availability through robust DevOps practices.
          Let's create something powerful together. 
        </p>
      </div>
      <BackgroundBeams />
      {children}
    </div>
    </>
  );
}
