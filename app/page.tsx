'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200); // 1.2-second delay
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div>
      {/* Top Container for Logo and Tab Bar */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50">
        {/* Logo */}
        <div className="ml-[10rem] text-[#44624A] font-inter text-lg font-bold">
          andrew tran
        </div>

        {/* Tab Bar */}
        <div className="mr-[10rem]">
          <div className="flex justify-center space-x-4">
            <a
              href="#section1"
              className="px-4 py-2 text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              about me
            </a>
            <a
              href="#section2"
              className="px-4 py-2 text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              work
            </a>
            <a
              href="#section3"
              className="px-4 py-2 text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              resume
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center min-h-screen px-5 relative">
        {isVisible && (
          <div className="space-y-5 ml-[10rem]">
            <div className="text-[#44624A] font-inter text-5xl opacity-0 animate-fadeIn mb-1">
              Hi, I&apos;m Andrew Tran
            </div>
            <div className="text-xl text-[#44624A]">
              NYC based Software Engineer
            </div>
            <div className="text-2xl text-[#44624A] pt-10">
              <div className="text-xl text-[#8F8F8F]">Currently</div>
              <div>I&apos;m a Software Development Engineer for AWS in NYC.</div>
            </div>
          </div>
        )}

        {isVisible && (
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-[#134C50]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        )}

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
}
