"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import NavbarComp from "./Navbar";

export function BackgroundBeamsDemo({ children }: { children: React.ReactNode }) {
  return (
    <>
    <NavbarComp/>
    <div className="min-h-screen w-full bg-black dark:bg-black bg-grid-white/[0.2] dark:bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
    </>
  );
}

{/* <NavbarComp/>
<div className="min-h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
  <BackgroundBeams />
  {children}
</div> */}