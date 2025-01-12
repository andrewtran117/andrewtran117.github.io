import ProfileGrid from "./components/GridSection";
import WorkExperience from "./components/WorkExp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#202020]">
      <div className="pt-[1in] sm:px-[1.5in] md:px-[1.5in] lg:px-[1.5in]">
        <ProfileGrid />
        <div className="pt-10">
          <WorkExperience />
        </div>
      </div>
    </main>
  );
}
