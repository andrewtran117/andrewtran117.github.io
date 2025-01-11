'use client'
import { useEffect, useState } from "react";

export default function Home() {

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
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div
            className="text-[#44624A] font-inter text-lg sm:text-xl font-bold cursor-pointer"
            onClick={scrollToTop}
          >
            andrew duy tran
          </div>

          {/* Tab Bar */}
          <div className="hidden sm:flex space-x-4">
            <a
              href="#aboutMe"
              className="px-3 py-2 text-md sm:text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              about me
            </a>
            <a
              href="#work"
              className="px-3 py-2 text-md sm:text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              work
            </a>
            <a
              href="https://drive.google.com/file/d/1imDv7-Oz0AB6ISDQGXQdzRUD2LvwHUW2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-md sm:text-lg font-bold text-[#44624A] hover:text-black transition"
            >
              resume
            </a>
          </div>
        </div>
      </div>


    <div className="flex items-center justify-center min-h-screen bg-[#FAF9F6] text-[#6B7F5C]">
      {isVisible && (
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl px-4 animate-fadeInSmooth transform" style={{ transform: 'translateX(8%)' }}>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Andrew</h1>
          <p className="text-lg md:text-xl mb-2">NYC based Software Engineer</p>
          <p className="text-base md:text-lg text-gray-600">Currently</p>
          <p className="text-lg md:text-xl font-semibold">Software Development Engineer for AWS</p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/matcha2.png"
            alt="Matcha Glass"
            className="w-32 h-32 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
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
  </div>
  );
}



// 'use client';

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 1000); // 1-second delay
//     return () => clearTimeout(timer); // Cleanup timer on component unmount
//   }, []);

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div>
//       {/* Top Container for Logo and Tab Bar */}
//       <div className="fixed top-0 left-0 right-0 py-4 z-50 bg-[#F8F5F1]">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
//           {/* Logo */}
//           <div
//             className="text-[#44624A] font-inter text-lg sm:text-xl font-bold cursor-pointer"
//             onClick={scrollToTop} // Scroll to top on click
//           >
//             andrew duy tran
//           </div>

//           {/* Tab Bar */}
//           <div className="hidden sm:flex space-x-4">
//             <a
//               href="#aboutMe"
//               className="px-3 py-2 text-md sm:text-lg font-bold text-[#44624A] hover:text-black transition"
//             >
//               about me
//             </a>
//             <a
//               href="#work"
//               className="px-3 py-2 text-md sm:text-lg font-bold text-[#44624A] hover:text-black transition"
//             >
//               work
//             </a>
//             <a
//               href="https://drive.google.com/file/d/1imDv7-Oz0AB6ISDQGXQdzRUD2LvwHUW2/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-3 py-2 text-md sm:text-lg font-bold text-[#44624A] hover:text-black transition"
//             >
//               resume
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 relative">
//         {isVisible && (
//           <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto space-y-6 md:space-y-0 animate-fadeInSmooth">
//             {/* Text Content */}
//             <div className="space-y-4">
//               <h1 className="text-[#44624A] font-inter text-3xl sm:text-4xl md:text-5xl">
//                 Hi, I&apos;m Andrew
//               </h1>
//               <p className="text-lg sm:text-xl text-[#44624A]">NYC based Software Engineer</p>
//               <div className="text-[#44624A]">
//                 <p className="text-base sm:text-lg text-[#8F8F8F]">Currently</p>
//                 <p className="text-lg sm:text-xl">Software Development Engineer for AWS</p>
//               </div>
//             </div>

//             {/* Image */}
//             <img
//               src="matcha.png"
//               alt="Matcha"
//               className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72"
//             />
//           </div>
//         )}

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-pulse">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6 sm:w-5 sm:h-5 text-[#134C50]"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* About Me Section */}
//       <section id="aboutMe" className="min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12">
//         <div className="max-w-7xl mx-auto space-y-5">
//           <h2 className="text-3xl sm:text-4xl text-[#44624A] font-inter">About Me</h2>
//           <p className="text-lg sm:text-xl text-[#444]">
//             This is a placeholder for the about me section. Add your text here.
//           </p>
//         </div>
//       </section>

//       {/* Work Section */}
//       <section id="work" className="min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12">
//         <div className="max-w-7xl mx-auto space-y-5">
//           <h2 className="text-3xl sm:text-4xl text-[#44624A] font-inter">Work</h2>
//           <p className="text-lg sm:text-xl text-[#444]">
//             This is a placeholder for the work section. Add your text here.
//           </p>
//         </div>
//       </section>

//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeInSmooth {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           60% {
//             opacity: 0.5;
//             transform: translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeInSmooth {
//           animation: fadeInSmooth 1.5s ease forwards;
//         }
//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//     </div>
//   );
// }