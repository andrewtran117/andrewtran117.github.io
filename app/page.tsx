// AboutMeGallery component removed
import ProfileGrid from "./components/GridSection";
import ResearchExperience from "./components/ResearchExp";
import WorkExperience from "./components/WorkExp";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#202020] text-[#f9f9f9] overflow-hidden">
      {/* Fixed Left Column - Profile Info */}
      <div className="w-1/4 min-w-[250px] h-screen pl-16 pr-8 pt-24 pb-6 fixed left-0 top-0 flex items-start">
        <div className="w-full">
          <ProfileGrid/>
        </div>
      </div>
      
      {/* Scrollable Right Column - Content */}
      <div className="w-[calc(75%-32px)] ml-[calc(25%+8px)] h-screen overflow-y-auto px-0 pt-24 pb-12">
        {/* Bio Section */}
        <div className="mb-12 pr-16 pl-0">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-base leading-relaxed">
            I am driven by the constant desire to learn, grow, and
            push the boundaries of what&apos;s possible.
            My work has improved customer experiences, enhanced urban safety, and made technology more accessible
            in communities, all while driving innovation in impactful ways.
            I attribute my success to the people around me, mentors, colleagues, and communities, who
            continuously inspire and empower me to elevate my work and make a lasting difference.
          </p>
        </div>
        
        {/* Experience Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pr-16 pl-0">
          <div>
            <WorkExperience />
          </div>
          <div>
            <ResearchExperience />
          </div>
        </div>
      </div>
    </main>
  );
}
