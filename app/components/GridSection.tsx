import React from 'react';

// interface ProfileGridProps {
//   showBioInRightColumn?: boolean;
// }

// interface ProfileGridProps {}


const ProfileGrid: React.FC = () => {
  return (
    <div className="text-[#0f2a3d] w-full" style={{ fontFamily: 'var(--font-ibm-plex-mono), "IBM Plex Mono", monospace' }}>
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
          <div className="text-xl">New York, NY</div>
          {/* Contact Links */}
          <div className="mt-2 flex flex-col gap-1">
            <a
              href="mailto:andrew.tran117@outlook.com"
              className="text-sm text-[#0f2a3d] hover:text-[#1f639e]"
            >
              andrew.tran117@outlook.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;
