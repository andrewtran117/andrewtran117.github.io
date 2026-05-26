"use client";

// AboutMeGallery component removed
import { useState } from "react";
import ProfileGrid from "./components/GridSection";
import ResearchExperience from "./components/ResearchExp";
// import ProjectsSection from "./components/ProjectsSection";

type TabKey = "about" | "engineer" | "publications" | "community" | "hobbies" /* | "projects" */;

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-[#fdf8f5] text-[#3d3028] md:overflow-hidden max-w-7xl mx-auto">
      {/* Profile Info Column - Non-scrollable */}
      <div className="w-full md:w-1/4 md:min-w-[300px] px-6 md:pl-16 md:pr-10 pt-12 md:pt-24 pb-6 bg-[#fdf8f5] md:sticky md:top-0 md:self-start">
        <div className="w-full">
          <ProfileGrid />

          {/* Tabs */}
          <div className="mt-8">
            <nav className="flex md:flex-col gap-3" aria-label="Sidebar tabs">
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
              {/* <button
                className="tab-link text-left"
                aria-current={activeTab === "projects" ? "page" : undefined}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button> */}
            </nav>
          </div>
        </div>
      </div>

      {/* Content Column - Scrollable */}
      <div className="w-full md:w-3/4 px-6 md:pl-12 md:pr-8 pt-8 md:pt-24 pb-12 md:overflow-y-auto md:max-h-screen">
        {activeTab === "about" && (
          <div className="mb-12 md:pr-16 md:pl-0">
            {/* <h1 className="text-2xl font-semibold mb-4">Hello!</h1> */}

            <p className="italic text-xs mb-6 text-right">trying out a spring palette, thoughts?</p>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">About Me</h2>
              <p className="text-base leading-relaxed mb-4">
                I'm currently building AI powered customer service at{' '}
                <a href="https://aws.amazon.com/connect/" className="text-[#b8a0c4] underline hover:text-[#9a80aa]" target="_blank" rel="noopener noreferrer">AWS Connect</a>
                . Additionally, I have ongoing research projects in{' '}
                AI Evals (<a href="https://evalevalai.com/projects/every-eval-ever/" className="text-[#b8a0c4] underline hover:text-[#9a80aa]" target="_blank" rel="noopener noreferrer">Evaluation Evaluations</a>), and Model Introspection (<a href="https://sparai.org/projects/sp26/?mentor=Lydia+Nottingham" className="text-[#b8a0c4] underline hover:text-[#9a80aa]" target="_blank" rel="noopener noreferrer">SPAR Spring 2026</a>).
                <br></br>
                <br></br>
                The research I work on today is grounded by 4 years of experience in AIxCS Education and other Human-AI Research at the Temple University Human-Computer Interaction Lab (2021-2025).
              </p>
            </div>

            {/* Research Section
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Research</h2>
              <p className="text-base leading-relaxed mb-4">
                I'm working on AI Evaluations with the{' '}
                <a
                  href="https://evalevalai.com/"
                  className="text-[#b8a0c4] underline hover:text-[#9a80aa]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Evaluating Evaluations (EvalEval) Coalition
                </a>
                . Also looking for more projects/collaborators! My interests include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li className="text-base leading-relaxed">AI Evaluations</li>
                <li className="text-base leading-relaxed">Mechanistic Interpretability</li>
                <li className="text-base leading-relaxed">AI Control</li>
                <li className="text-base leading-relaxed">AI in Education</li>
              </ul>
            </div> */}

            {/* Software Engineering Section
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Software Engineering</h2>
              <p className="text-base leading-relaxed mb-4">
                I'm currently a Software Engineer at{' '}
                <a
                  href="https://aws.amazon.com/connect/agent-workspace/"
                  className="text-[#b8a0c4] underline hover:text-[#9a80aa]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Connect
                </a>{' '}
                working on Agent Workspace.
              </p>
            </div> */}

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Other Interesting Work</h2>
              <p className="text-base leading-relaxed mb-4">
                During my undergrad, I started OwlHacks (Temple University's annual hackathon). Over 3 years as director, I obtained $25,000+ in sponsorship value and brought in 500+ students from 15+ universities.
                <br></br>
                <br></br>
                I've also hosted presentations on my career journey and inspired students at Temple University, Drexel University, and the Community College of Philadelphia.
              </p>
            </div>

            {/* Hobbies Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Hobbies</h2>
              <p className="text-base leading-relaxed mb-4">
                I love trying new food. I have almost 600 resturants logged on Beli.
              </p>
            </div>

            {/* Commented out News Section
            <hr className="border-t border-[#dddddd]/70 my-8" />
            <h3 className="text-lg font-semibold mt-8">Upcoming News</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li className="text-[#666666]">Invited to speak at OwHacks 2025 on a panel.</li>
            </ul> */}
           


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
          </div>
        )}

        {activeTab === "publications" && (
          <div className="md:pr-16 md:pl-0">
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
              <div className="flex gap-4 mb-4">
                <div className="flex flex-col items-center w-1/2">
                  <img src="/OwlHacks2024.PNG" alt="OwlHacks 2024" className="rounded-lg w-full object-cover" />
                  <p className="italic text-sm mt-2">OwlHacks E-Board 2024</p>
                </div>
                <div className="flex flex-col items-center w-1/2">
                  <img src="/Nahum.jpeg" alt="Nahum" className="rounded-lg w-full object-cover" />
                  <p className="italic text-sm mt-2">My roommate Nahum :)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center w-1/2">
                  <img src="/OpeningCeremony.JPG" alt="Opening Ceremony" className="rounded-lg w-full h-48 object-cover" />
                  <p className="italic text-sm mt-2">Opening Ceremony</p>
                </div>
                <div className="flex flex-col items-center w-1/2">
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
                <div className="flex flex-col items-center w-1/2">
                  <img src="/Macneil.jpg" alt="Macneil" className="rounded-lg w-full h-full object-cover object-center" />
                  <p className="italic text-sm mt-2">Dr. Stephen MacNeil</p>
                </div>
                <div className="flex flex-col items-center w-1/2">
                  <img src="/tapia.jpeg" alt="Tapia" className="rounded-lg w-full h-full object-cover object-center" />
                  <p className="italic text-sm mt-2">Presentation at Tapia'24</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "hobbies" && (
          <div className="md:pr-16 md:pl-0">
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
