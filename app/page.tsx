// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection";

// export default function Home() {

//   return (
//     <main className="flex min-h-screen flex-col bg-[#f1ebe1]">
//       <Navbar />
//       <div className="container mt-8 mx-auto px-12 py-4">
//         <div id="hero">
//           <HeroSection/>
//         </div>
//         {/* <div id="about">
//           <AboutSection/>
//         </div> */}
//       </div>
//     </main>
//   );
// }


import ProfileGrid from "./components/GridSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f1ebe1]">
      <div className="pt-[0.25in] pl-[.5in] pr-[.5in]">
        <ProfileGrid />
      </div>
    </main>
  );
}

