// AboutMeGallery component removed
import ProfileGrid from "./components/GridSection";
import ResearchExperience from "./components/ResearchExp";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] text-[#333333] md:overflow-hidden">
      {/* Profile Info Column - Non-scrollable */}
      <div className="w-full md:w-1/4 md:min-w-[300px] px-6 md:pl-16 md:pr-10 pt-12 md:pt-24 pb-6 flex items-center md:items-start bg-[#f5f5f5] md:sticky md:top-0 md:self-start">
        <div className="w-full">
          <ProfileGrid/>
        </div>
      </div>
      
      {/* Content Column - Scrollable */}
      <div className="w-full md:w-3/4 px-6 md:pl-12 md:pr-8 pt-8 md:pt-24 pb-12 md:overflow-y-auto md:max-h-screen">
        {/* Bio Section */}
        <div className="mb-12 md:pr-16 md:pl-0">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-base leading-relaxed">
              I&apos;m an engineer joining AWS this summer in New York, NY. I have previously held internships at AWS, the Cigna Group, IBM, and AeroPest (autonomous AI drone startup for pest control).
            </p>
            <p className="text-base leading-relaxed mt-6">
              Beyond engineering, I am interested in human-computer interaction and Generative AI safety, working to ensure that intelligent systems align with human needs and values. I have conducted this work during my undergraduate studies at Temple University under the supervision of&nbsp;
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
        <div className="md:pr-16 md:pl-0">
          <ResearchExperience />
        </div>
      </div>
    </main>
  );
}
