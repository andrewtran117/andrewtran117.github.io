import React from 'react';

const ProfileGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] sm:gap-x-16 text-[#f9f9f9] font-sans">
      {/* 1st Row - 1st Column */}
      <div className="flex flex-col">
        <div className="text-2xl font-bold">Andrew Tran</div>
        <div className="text-lg">Software Development Engineer</div>
        <div className="text-lg">New York, NY</div>
      </div>

      {/* 1st Row - 2nd Column */}
      <div>
        <p className="text-base leading-relaxed">
          I am driven by the constant desire to learn, grow, and
          push the boundaries of what’s possible.
          My work has improved customer experiences, enhanced urban safety, and made technology more accessible
          in communities, all while driving innovation in impactful ways.
          I attribute my success to the people around me, mentors, colleagues, and communities, who
          continuously inspire and empower me to elevate my work and make a lasting difference.
        </p>
      </div>

      {/* 2nd Row - 1st Column */}
      <div>
        <a href="mailto:andrew.tran117@outlook.com" className="text-[#f9f9f9] underline">
          Contact
        </a>
      </div>

      {/* 2nd Row - 2nd Column */}
      <div>
        <a href="https://drive.google.com/file/d/1imDv7-Oz0AB6ISDQGXQdzRUD2LvwHUW2/view?usp=sharing" className="text-[#f9f9f9] underline" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </div>
  );
};

export default ProfileGrid;
