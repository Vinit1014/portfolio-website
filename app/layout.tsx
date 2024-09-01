import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeamsDemo } from "@/components/Background";
import { NextUIProvider } from "@nextui-org/react";

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
    <html lang="en">
      {/* <head>
          <link rel='icon' href="/favicon.ico"/>
      </head> */}
      <body className={inter.className}>
          <BackgroundBeamsDemo>
        <NextUIProvider>
            <div className="relative z-20">
              {children} 
            </div>
        </NextUIProvider>
          </BackgroundBeamsDemo>
      </body>
    </html>
  );
}
