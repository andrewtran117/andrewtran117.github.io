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
      {isVisible && (
        <div className="fixed bottom-5 left-5 text-[#8BA888] font-crimson text-6xl opacity-0 animate-fadeIn">
        <div>
          hi, i&apos;m andrew
        </div>
        <div className="text-3xl">
          currently, i&apos;m a software development engineer at amazon web services (aws)
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
