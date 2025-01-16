import AboutMeGallery from "./components/AboutMeImage";
import ProfileGrid from "./components/GridSection";
import Quote from "./components/quote";
import ResearchExperience from "./components/ResearchExp";
import WorkExperience from "./components/WorkExp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#202020]">
      <div className="pt-[1in] sm:px-[1.5in] md:px-[1.5in] lg:px-[1.5in]">
        <ProfileGrid />
        <div className="pt-20 pb-10">
          {/* <Quote/> */}
          <AboutMeGallery/>
        </div>
        <div className="flex flex-row gap-4">
          {/* Each child will take up equal space or auto-adjust based on their content */}
          <div className="flex-1">
            <WorkExperience />
          </div>
          <div className="flex-1">
            <ResearchExperience />
          </div>
        </div>
      </div>
    </main>
  );
}
