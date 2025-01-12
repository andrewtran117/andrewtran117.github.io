import ProfileGrid from "./components/GridSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f1ebe1]">
      <div className="pt-[0.25in] sm:pl-[0.25in] sm:pr-[0.25in] md:pl-[.25in] md:pr-[.25in] lg:pl-[.25in] lg:pr-[.25in]">
        <ProfileGrid />
      </div>
    </main>
  );
}
