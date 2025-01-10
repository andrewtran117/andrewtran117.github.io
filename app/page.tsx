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
    // &apos;
    <div>
      {isVisible && (
        <div className="fixed bottom-20 left-5 text-[#9E1D22] font-crimson text-5xl opacity-0 animate-fadeIn">
          <div>
          Hi, I&apos;m Andrew.
          </div>
          <div className="text-xl">
          I&apos;m a Vietnamese Asian American born in the Greater Philadelphia Area.
          </div>
          <div className="text-xl">
          I love to try new food, listen to podcasts, and hike.
          </div>
          <div className="text-xl">
          I graduated from Temple University with a Bachelors in Computer Science.
          </div>
          <div className="text-2xl text-[#134C50] pt-5">
          Currently, I’m a Software Development Engineer for AWS in NYC.
          </div>
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-[#134C50] animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
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
  );
}
