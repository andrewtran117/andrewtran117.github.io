import ProfileGrid from "./components/GridSection";
import WorkExperience from "./components/WorkExp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#202020]">
      <div className="pt-[0.25in] sm:pl-[1in] sm:pr-[1in] md:pl-[1in] md:pr-[1in] lg:pl-[1in] lg:pr-[1in]">
        <ProfileGrid />
        <div className="pt-10">
          <WorkExperience />
        </div>
      </div>
    </main>
  );
}
