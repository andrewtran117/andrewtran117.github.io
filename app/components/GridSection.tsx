import React from 'react';

// interface ProfileGridProps {
//   showBioInRightColumn?: boolean;
// }

// interface ProfileGridProps {}


const ProfileGrid: React.FC = () => {
  return (
    <div className="text-[#333333] font-sans w-full">
      {/* Profile Photo and Info */}
      <div className="flex flex-col md:flex-col items-center md:items-start space-y-4">
        <div className="w-40 h-40 md:w-56 md:h-56 overflow-hidden">
          <img 
            src="/headshot_andrew.png"
            alt="Andrew Tran"
            className="w-40 h-40 md:w-56 md:h-56 rounded-xl object-cover shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold">Andrew Tran</div>
          <div className="text-xl">Software Engineer</div>
          <div className="text-xl">New York, NY</div>
          {/* Contact Links */}
          <div className="mt-2 flex flex-col gap-1">
            <a
              href="mailto:andrew.tran117@outlook.com"
              className="text-sm text-[#d32f2f] hover:text-[#b71c1c]"
            >
              andrew.tran117@outlook.com
            </a>
            <a
              href="https://drive.google.com/file/d/1xBCICLQabAc0rc6W8qDyRcZ0eJo2ekN2/view?usp=sharing"
              className="text-sm text-[#d32f2f] hover:text-[#b71c1c]"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;
