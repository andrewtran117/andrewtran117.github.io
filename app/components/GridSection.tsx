import React from 'react';

const ProfileGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-8 sm:gap-x-16 p-[1in] text-[#4B7F52] font-sans">
      {/* 1st Row - 1st Column */}
      <div className="flex flex-col">
        <div className="text-2xl font-bold">Andrew Tran</div>
        <div className="text-lg">Software Development Engineer</div>
        <div className="text-lg">New York, NY</div>
      </div>

      {/* 1st Row - 2nd Column */}
      <div>
        <p className="text-base leading-relaxed">
          I am a passionate software engineer with a deep interest in AI, cloud computing, and customer-centric
          solutions. I enjoy working on projects that enhance user experiences and aim to make impactful contributions to
          the tech industry.
        </p>
      </div>

      {/* 2nd Row - 1st Column */}
      <div>
        <a href="mailto:andrew.tran117@outlook.com" className="text-[#4B7F52] hover:text-[#3A5A3F] underline">
          Contact
        </a>
      </div>

      {/* 2nd Row - 2nd Column */}
      <div>
        <a href="https://drive.google.com/file/d/1imDv7-Oz0AB6ISDQGXQdzRUD2LvwHUW2/view?usp=sharing" className="text-[#4B7F52] hover:text-[#3A5A3F] underline" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </div>
  );
};

export default ProfileGrid;
