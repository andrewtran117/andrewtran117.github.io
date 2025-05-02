import React from 'react';

interface ProfileGridProps {
  showBioInRightColumn?: boolean;
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ showBioInRightColumn = false }) => {
  return (
    <div className="text-[#f9f9f9] font-sans">
      {/* Profile Photo and Info */}
      <div className="flex flex-col space-y-4">
        <div className="w-56 h-56 mx-auto sm:mx-0 overflow-hidden">
          <img 
            src="/headshot_andrew.png"
            alt="Andrew Tran"
            className="w-56 h-56 rounded-xl object-cover shadow-lg"
          />
        </div>
        <div>
          <div className="text-2xl font-bold">Andrew Tran</div>
          <div className="text-lg">Software Development Engineer</div>
          <div className="text-lg">New York, NY</div>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-col space-y-2 mt-4">
          <a href="mailto:andrew.tran117@outlook.com" className="text-[#C1E1C1] underline hover:text-[#A0D0A0]">
            Contact
          </a>
          <a href="https://drive.google.com/file/d/1imDv7-Oz0AB6ISDQGXQdzRUD2LvwHUW2/view?usp=sharing" 
             className="text-[#C1E1C1] underline hover:text-[#A0D0A0]" 
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
