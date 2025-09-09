'use client'
import { useEffect, useState } from "react";

export default function Homee() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // 1-second delay
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Top Container for Logo and Tab Bar */}
      <div className="fixed top-0 left-0 right-0 py-4 z-50 bg-[#F8F5F1]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 w-full">
          {/* Logo */}
          <div
            className="text-[#44624A] font-inter text-lg sm:text-xl font-bold cursor-pointer"
            onClick={scrollToTop}
            style={{ whiteSpace: 'nowrap', overflowWrap: 'break-word', wordBreak: 'break-word' }}
          >
            andrew duy tran
          </div>

          {/* Tab Bar */}
          <div className="flex space-x-2 w-full justify-end">
            <a
              href="#aboutMe"
              className="px-3 py-2 text-sm sm:text-md md:text-lg lg:text-xl font-inter font-bold text-[#44624A] hover:text-black transition"
              style={{ whiteSpace: 'nowrap', overflowWrap: 'break-word', wordBreak: 'break-word' }}
            >
              about me
            </a>
            <a
              href="#work"
              className="px-3 py-2 text-sm sm:text-md md:text-lg lg:text-xl font-inter font-bold text-[#44624A] hover:text-black transition"
            >
              work
            </a>
            <a
              href="https://drive.google.com/file/d/1xBCICLQabAc0rc6W8qDyRcZ0eJo2ekN2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm sm:text-md md:text-lg lg:text-xl font-inter font-bold text-[#44624A] hover:text-black transition"
            >
              CV
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-[#F8F5F1] text-[#6B7F5C]">
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl px-4 animate-fadeInSmooth transform" style={{ transform: 'translateX(8%)' }}>
            <div className="flex flex-col justify-center font-inter font-bold pb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-[#44624A]">Hi, I&apos;m Andrew</h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-2 text-[#44624A]">NYC based Software Engineer</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 pt-12">Currently</p>
              <p className="text-lg sm:text-xl md:text-2xl text-[#44624A]">Software Development Engineer for AWS</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/matcha2.png"
                alt="Matcha Glass"
                className="w-32 h-32 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              />
            </div>
          </div>
        )}

        <style jsx global>{`
          @keyframes fadeInSmooth {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          .animate-fadeInSmooth {
            animation: fadeInSmooth 1.5s ease forwards;
          }
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </div>

      {/* About Me Section */}
      <div id="aboutMe" className="min-h-screen bg-[#F8F5F1] px-8 py-12 pt-24 font-inter">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#44624A] mb-4">About Me</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
            I am a passionate software engineer based in NYC, currently working at AWS as a Software Development Engineer. With a strong background in problem-solving and a commitment to innovation, I focus on building scalable and efficient solutions that drive business success.
          </p>
        </div>
      </div>

      {/* Work Section */}
      <div id="work" className="min-h-screen bg-[#F8F5F1] px-8 py-12 pt-24 font-inter">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#44624A] mb-4">My Work</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
            I have worked on a variety of exciting projects, from cloud computing solutions at AWS to designing intuitive user interfaces. Below are a few highlights of my work:
          </p>
        </div>
      </div>
    </div>
  );
}
