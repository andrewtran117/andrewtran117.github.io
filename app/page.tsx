import ProfileGrid from "./components/GridSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f1ebe1]">
      <div className="pt-[0.25in] sm:pl-[0.5in] sm:pr-[0.5in] md:pl-[1in] md:pr-[1in] lg:pl-[2in] lg:pr-[2in]">
        <ProfileGrid />
      </div>
    </main>
  );
}
