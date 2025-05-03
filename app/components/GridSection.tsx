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
          <div className="text-lg">Software Development Engineer</div>
          <div className="text-lg">New York, NY</div>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-2 mt-2 md:mt-4">
          <a href="mailto:andrew.tran117@outlook.com" className="text-[#d32f2f] underline hover:text-[#b71c1c]">
            Contact
          </a>
          <a href="https://drive.google.com/file/d/1imDv7-Oz0AB6ISDQGXQdzRUD2LvwHUW2/view?usp=sharing" 
             className="text-[#d32f2f] underline hover:text-[#b71c1c]" 
             target="_blank" 
             rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;
