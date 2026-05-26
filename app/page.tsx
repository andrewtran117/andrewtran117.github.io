"use client";

// AboutMeGallery component removed
import { useState } from "react";
import ProfileGrid from "./components/GridSection";
import ResearchExperience from "./components/ResearchExp";
// import ProjectsSection from "./components/ProjectsSection";

type TabKey = "about" | "engineer" | "publications" | "community" | "hobbies" /* | "projects" */;

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (tab: TabKey) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-background text-foreground md:overflow-hidden max-w-7xl mx-auto overflow-x-hidden">
      {/* Mobile hamburger button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="space-y-1.5">
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile slide-out menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-background z-40 transform transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} p-8 pt-16`}>
        <nav className="flex flex-col gap-4" aria-label="Mobile tabs">
          <button className="tab-link text-left" aria-current={activeTab === "about" ? "page" : undefined} onClick={() => handleTabClick("about")}>About Me</button>
          <button className="tab-link text-left" aria-current={activeTab === "engineer" ? "page" : undefined} onClick={() => handleTabClick("engineer")}>Engineering</button>
          <button className="tab-link text-left" aria-current={activeTab === "publications" ? "page" : undefined} onClick={() => handleTabClick("publications")}>AI Research</button>
          <button className="tab-link text-left" aria-current={activeTab === "community" ? "page" : undefined} onClick={() => handleTabClick("community")}>Community</button>
          <button className="tab-link text-left" aria-current={activeTab === "hobbies" ? "page" : undefined} onClick={() => handleTabClick("hobbies")}>Hobbies</button>
        </nav>
      </div>

      {/* Profile Info Column - Non-scrollable */}
      <div className={`w-full md:w-1/4 md:min-w-[300px] px-6 md:pl-16 md:pr-10 pt-12 md:pt-24 pb-6 bg-background md:sticky md:top-0 md:self-start ${activeTab !== "about" ? "hidden md:block" : ""}`}>
        <div className="w-full">
          <ProfileGrid />

          {/* Desktop tabs */}
          <div className="mt-8 hidden md:block">
            <nav className="flex flex-col gap-3" aria-label="Sidebar tabs">
              <button
                className="tab-link text-left"
                aria-current={activeTab === "about" ? "page" : undefined}
                onClick={() => setActiveTab("about")}
              >
                About Me
              </button>
              <button
                className="tab-link text-left"
                aria-current={activeTab === "engineer" ? "page" : undefined}
                onClick={() => setActiveTab("engineer")}
              >
                Engineering
              </button>
              <button
                className="tab-link text-left"
                aria-current={activeTab === "publications" ? "page" : undefined}
                onClick={() => setActiveTab("publications")}
              >
                AI Research
              </button>
              <button
                className="tab-link text-left"
                aria-current={activeTab === "community" ? "page" : undefined}
                onClick={() => setActiveTab("community")}
              >
                Community
              </button>
              <button
                className="tab-link text-left"
                aria-current={activeTab === "hobbies" ? "page" : undefined}
                onClick={() => setActiveTab("hobbies")}
              >
                Hobbies
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Content Column - Scrollable */}
      <div className="w-full md:w-3/4 px-6 md:pl-12 md:pr-8 pt-20 md:pt-24 pb-12 md:overflow-y-auto md:max-h-screen">
        {activeTab === "about" && (
          <div className="mb-12 md:pr-16 md:pl-0">
            {/* <h1 className="text-2xl font-semibold mb-4">Hello!</h1> */}

            <p className="italic text-[10px] mb-6 text-right">thanks for stopping by!</p>
            <p className="text-base leading-relaxed mb-4 md:ml-12">
              Hi, my name is Andrew. I'm currently based in New York, NY.
              <br /><br />
              I'm a Software Engineer at{' '}
              <a href="https://aws.amazon.com/connect/" className="text-accent underline hover:text-accent-hover" target="_blank" rel="noopener noreferrer">AWS Connect</a>
              , AI researcher, community builder, food enthusiast (add me on Beli!), traveler (currently planning Italy), reader, and so much more.
              <br /><br />
              I've worked on many domains including AI tools for education, AI Evaluation Infrastructure, Customer Service Platforms, Healthcare Platforms, and AI x Autonomous Drones (scanning buildings for pests).
              <br /><br />
              I want to leverage technology towards making the world a more inclusive place and provide opportunity for underserved communities.
              <br /><br />
              Please reach out if you are interested in working together or want to chat about new ideas:{' '}
              <a href="mailto:andrew.tran117@outlook.com" className="text-accent underline hover:text-accent-hover">andrew.tran117@outlook.com</a>
            </p>
           


            {/* <p className="mt-6">
              See more on my {""}
              <a
                href="https://drive.google.com/file/d/1xBCICLQabAc0rc6W8qDyRcZ0eJo2ekN2/view?usp=sharing"
                className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
              .
            </p> */}
          </div>
        )}

        {activeTab === "engineer" && (
          <div className="md:pr-16 md:pl-0">
            <h2 className="text-xl font-semibold mb-6">Engineering</h2>
            <div className="mb-8 border-l-4 border-accent pl-4">
              <h3 className="text-lg font-medium">AWS Connect</h3>
              <p className="text-sm text-muted mb-3">Software Engineer · Current</p>
              <p className="text-base leading-relaxed mb-4">
                I'm currently a Software Engineer at{' '}
                <a
                  href="https://aws.amazon.com/connect/"
                  className="text-accent underline hover:text-accent-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Connect
                </a>
                , building AI-powered customer service solutions.
              </p>
            </div>
            <div className="mb-8 pl-4">
              <h3 className="text-lg font-medium">Cigna</h3>
              <p className="text-sm text-muted mb-3">Software Engineer Intern · Summer 2023</p>
              <p className="text-base leading-relaxed mb-4">
                Software Engineer Intern on myPassport, a pharmacy benefits management application. Built API endpoints with Kotlin and Spring Boot, utilized AWS Lambda with DynamoDB, and automated webpage testing with Selenium.
              </p>
            </div>
            <div className="mb-8 pl-4">
              <h3 className="text-lg font-medium">AeroPest</h3>
              <p className="text-sm text-muted mb-3">Software Engineer Intern · 2021 – 2023</p>
              <p className="text-base leading-relaxed mb-4">
                Software Engineer Intern building a React Native mobile app for field inspection reports and AI vision for autonomous drones to detect pests during building inspections.
              </p>
            </div>
            <div className="mb-8 pl-4">
              <h3 className="text-lg font-medium">IBM</h3>
              <p className="text-sm text-muted mb-3">Good Tech Fellow · Summer 2022</p>
              <p className="text-base leading-relaxed mb-4">
                Good Tech Fellow building HumanityWithUS, a web application for crafting data narratives about poverty in Philadelphia. Developed a spatial exploration interface in React.js and integrated IBM Watson's AI chatbot.
              </p>
            </div>
          </div>
        )}

        {activeTab === "publications" && (
          <div className="md:pr-16 md:pl-0">
            <div className="mb-8">
              <p className="text-base leading-relaxed mb-4">
                I have ongoing research projects in{' '}
                AI Evals (<a href="https://evalevalai.com/projects/every-eval-ever/" className="text-accent underline hover:text-accent-hover" target="_blank" rel="noopener noreferrer">Evaluation Evaluations</a>), and Model Introspection (<a href="https://sparai.org/projects/sp26/?mentor=Lydia+Nottingham" className="text-accent underline hover:text-accent-hover" target="_blank" rel="noopener noreferrer">SPAR Spring 2026</a>).
                <br></br>
                <br></br>
                The research I work on today is grounded by 4 years of experience in AIxCS Education and other Human-AI Research at the Temple University Human-Computer Interaction Lab (2021-2025).
              </p>
            </div>
            <ResearchExperience />
          </div>
        )}

        {activeTab === "community" && (
          <div className="md:pr-16 md:pl-0">
            <h2 className="text-xl font-semibold mb-6">Community</h2>
              <p className="text-base leading-relaxed mb-4">
                The most rewarding experiences in my life have come from the communities I've helped build. Thank You everyone!
              </p>
              <br></br>
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">OwlHacks</h3>
              <p className="text-base leading-relaxed mb-4">
                I founded OwlHacks, Temple University's annual hackathon. Over 3 years as director, I secured $25,000+ in sponsorship value and brought together 500+ students from 15+ universities.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex flex-col items-center w-full md:w-1/2">
                  <img src="/OwlHacks2024.PNG" alt="OwlHacks 2024" className="rounded-lg w-full object-cover" />
                  <p className="italic text-sm mt-2">OwlHacks E-Board 2024</p>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/2">
                  <img src="/Nahum.jpeg" alt="Nahum" className="rounded-lg w-full object-cover" />
                  <p className="italic text-sm mt-2">My roommate Nahum :)</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col items-center w-full md:w-1/2">
                  <img src="/OpeningCeremony.JPG" alt="Opening Ceremony" className="rounded-lg w-full h-48 object-cover" />
                  <p className="italic text-sm mt-2">Opening Ceremony</p>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/2">
                  <img src="/FirstOwlHacks.jpg" alt="The First OwlHacks" className="rounded-lg w-full h-48 object-cover" />
                  <p className="italic text-sm mt-2">The First OwlHacks</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">ACM at Temple University</h3>
              <p className="text-base leading-relaxed mb-4">
                I served as President of Temple University's ACM chapter, where I led initiatives to grow the CS community on campus and connect students with industry and research opportunities.
              </p>
              <div className="flex flex-col items-center">
                <img src="/ACM2024.JPG" alt="ACM 2024" className="rounded-lg w-3/5 object-cover" />
                <p className="italic text-sm mt-2">ACM Boba Social</p>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Temple HCI Lab</h3>
              <p className="text-base leading-relaxed mb-4">
                I joined the Temple HCI Lab as one of the first 3 researchers. By the time I graduated, there were over 50+ undergraduate researchers. Many of which I have had the opportunity to mentor.
              </p>
              <div className="flex gap-4 items-stretch">
                <div className="flex flex-col items-center w-full md:w-1/2">
                  <img src="/MacNeil.JPG" alt="Macneil" className="rounded-lg w-full h-full object-cover object-center" />
                  <p className="italic text-sm mt-2">Dr. Stephen MacNeil</p>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/2">
                  <img src="/Tapia.jpeg" alt="Tapia" className="rounded-lg w-full h-full object-cover object-center" />
                  <p className="italic text-sm mt-2">Presentation at Tapia'24</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "hobbies" && (
          <div className="md:pr-16 md:pl-0">
            <p className="text-base text-center mt-12">COMING SOON, taking my time with this section</p>
          </div>
        )}

        {/* {activeTab === "projects" && (
          <div className="md:pr-16 md:pl-0">
            <ProjectsSection />
          </div>
        )} */}
      </div>
    </main>
  );
}
