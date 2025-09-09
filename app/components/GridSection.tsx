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
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;
