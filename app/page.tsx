// AboutMeGallery component removed
import ProfileGrid from "./components/GridSection";
import ResearchExperience from "./components/ResearchExp";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#f5f5f5] text-[#333333] overflow-hidden">
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
            continuously inspire and empower me to elevate my work and make a lasting difference. I conducted research under the supervision of <a href="https://scholar.google.com/citations?user=leLEF3wAAAAJ&hl=en" className="text-[#d32f2f] underline hover:text-[#b71c1c]" target="_blank" rel="noopener noreferrer">Dr. Stephen MacNeil</a>.
          </p>
        </div>
        
        {/* Research Experience Section */}
        <div className="pr-16 pl-0">
          <ResearchExperience />
        </div>
      </div>
    </main>
  );
}
