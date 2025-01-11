'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1-second delay
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Top Container for Logo and Tab Bar */}
      <div className="fixed top-0 left-0 right-0 p-4 z-50" style={{ backgroundColor: '#F8F5F1' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-[#44624A] font-inter text-lg font-bold cursor-pointer"
            onClick={scrollToTop} // Scroll to top on click
          >
            andrew duy tran
          </div>

          {/* Tab Bar */}
          <div className="hidden sm:flex space-x-4">
            <a
              href="#aboutMe"
              className="px-4 py-2 text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              about me
            </a>
            <a
              href="#work"
              className="px-4 py-2 text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              work
            </a>
            <a
              href="https://drive.google.com/file/d/1imDv7-Oz0AB6ISDQGXQdzRUD2LvwHUW2/view?usp=sharing"
              target="_blank"   // Opens in a new tab
              rel="noopener noreferrer"   // Security measure
              className="px-4 py-2 text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              resume
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center min-h-screen px-5 sm:px-10 md:px-20 lg:px-40 relative"> {/* Adjusted padding for mobile */}
        {isVisible && (
          <div className="flex items-center justify-center w-full max-w-7xl mx-auto opacity-0 animate-fadeIn">
            <div className="space-y-5 pl-10"> {/* Apply left padding to the text */}
              <div className="text-[#44624A] font-inter text-4xl sm:text-3xl md:text-5xl mb-1">
                Hi, I&apos;m Andrew
              </div>
              <div className="text-xl text-[#44624A] sm:text-lg">
                NYC based Software Engineer
              </div>
              <div className="text-2xl text-[#44624A] pt-10">
                <div className="text-xl text-[#8F8F8F]">Currently</div>
                <div>Software Development Engineer for AWS</div>
              </div>
            </div>
            <img src="matcha.png" alt="Matcha" className="w-64 h-64 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 pl-56 sm:pl-4" />
          </div>
        )}

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
      </div>

      {/* About Me Section */}
      <section id="aboutMe" className="min-h-screen py-20 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-5">
          <h2 className="text-4xl sm:text-3xl text-[#44624A] font-inter">About Me</h2>
          <p className="text-xl sm:text-lg text-[#444]">This is a placeholder for the about me section. Add your text here.</p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen py-20 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-5">
          <h2 className="text-4xl sm:text-3xl text-[#44624A] font-inter">Work</h2>
          <p className="text-xl sm:text-lg text-[#444]">This is a placeholder for the work section. Add your text here.</p>
        </div>
      </section>

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
        html {
          scroll-behavior: smooth; /* Smooth scrolling */
        }
      `}</style>
    </div>
  );
}
