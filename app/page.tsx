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
              I&apos;m an engineer joining AWS this summer in New York, NY. I have previously held internships at AWS, the Cigna Group, IBM, and AeroPest (autonomous AI drone startup for pest control).
            </p>
            <p className="text-base leading-relaxed mt-6">
              Beyond engineering, I&apos;m interested in human-computer interaction and Generative AI safety, working to ensure that intelligent systems align with human needs and values. I have conducted this work during my undergraduate studies at Temple University under the supervision of&nbsp;
              <a 
                href="https://scholar.google.com/citations?user=leLEF3wAAAAJ&hl=en" 
                className="text-[#d32f2f] underline hover:text-[#b71c1c]" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Dr. Stephen MacNeil
              </a>.
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
