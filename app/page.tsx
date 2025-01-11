'use client';

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
      <div className="fixed top-0 left-0 right-0 p-4 z-50 bg-[#F8F5F1]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-[#44624A] font-inter text-lg font-bold cursor-pointer"
            onClick={scrollToTop}
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
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              resume
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center min-h-screen px-5 sm:px-10 md:px-20 lg:px-40">
        {isVisible && (
          <div className="w-full flex flex-col md:flex-row items-center md:justify-between max-w-7xl mx-auto space-y-8 md:space-y-0">
            {/* Text Container */}
            <div className="flex flex-col space-y-5">
              <h1 className="text-[#44624A] font-inter text-3xl sm:text-4xl md:text-5xl font-bold">
                Hi, I&apos;m Andrew
              </h1>
              <p className="text-lg sm:text-xl text-[#44624A]">
                NYC based Software Engineer
              </p>
              <div className="space-y-2">
                <span className="text-lg text-[#8F8F8F]">Currently</span>
                <p className="text-xl sm:text-2xl text-[#44624A]">
                  Software Development Engineer for AWS
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="matcha.png"
                alt="Matcha"
                className="w-40 sm:w-48 md:w-64 lg:w-80 h-auto"
              />
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-[#134C50]"
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
          <h2 className="text-3xl sm:text-4xl text-[#44624A] font-bold">About Me</h2>
          <p className="text-lg sm:text-xl text-[#444]">
            This is a placeholder for the about me section. Add your text here.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen py-20 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-4xl text-[#44624A] font-bold">Work</h2>
          <p className="text-lg sm:text-xl text-[#444]">
            This is a placeholder for the work section. Add your text here.
          </p>
        </div>
      </section>

      {/* Styles */}
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
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}











// 'use client'

// import Image from 'next/image'

// export default function Home() {
//   return (
//     <div className="container">
//       <div className="content">
//         <div className="text">
//           <h1>Hi, I'm Andrew.</h1>
//           <h2>NYC based Software Engineer</h2>
//           <h3>Currently</h3>
//           <p>Software Development Engineer at Amazon</p>
//         </div>
//         <div className="image">
//           <Image src="matcha.png" alt="Matcha" width={500} height={500} />
//         </div>
//       </div>

//       <style jsx>{`
//         .container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 100vh;
//           text-align: center;
//           padding: 20px;
//         }

//         .content {
//           display: flex;
//           align-items: center;
//           flex-direction: row;
//           justify-content: center;
//           gap: 20px;
//           flex-wrap: wrap;
//         }

//         .text {
//           color: #44624A;
//           text-align: left;
//           max-width: 300px;
//         }

//         .image {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         @media (max-width: 768px) {
//           .content {
//             flex-direction: column;
//             text-align: center;
//           }

//           .image {
//             margin-top: 20px;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }