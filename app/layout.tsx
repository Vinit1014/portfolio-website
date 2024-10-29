import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeamsDemo } from "@/components/Background";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "@/components/Navbar";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinit Prajapati",
  description: "Hi, I am Vinit Prajapati | Full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <BackgroundBeamsDemo>
            <NextUIProvider>
              <NavbarComp/>
                <div className="relative z-20">
                  {children} 
                </div>
            </NextUIProvider>
          </BackgroundBeamsDemo>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
