"use client";

// AboutMeGallery component removed
import { useState } from "react";
import ProfileGrid from "./components/GridSection";
import ResearchExperience from "./components/ResearchExp";
import ProjectsSection from "./components/ProjectsSection";

type TabKey = "about" | "publications" | "projects";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-[#f2f5fa] text-[#0f2a3d] md:overflow-hidden max-w-7xl mx-auto">
      {/* Profile Info Column - Non-scrollable */}
      <div className="w-full md:w-1/4 md:min-w-[300px] px-6 md:pl-16 md:pr-10 pt-12 md:pt-24 pb-6 bg-[#f2f5fa] md:sticky md:top-0 md:self-start">
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
                aria-current={activeTab === "publications" ? "page" : undefined}
                onClick={() => setActiveTab("publications")}
              >
                Publications
              </button>
              <button
                className="tab-link text-left"
                aria-current={activeTab === "projects" ? "page" : undefined}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Content Column - Scrollable */}
      <div className="w-full md:w-3/4 px-6 md:pl-12 md:pr-8 pt-8 md:pt-24 pb-12 md:overflow-y-auto md:max-h-screen">
        {activeTab === "about" && (
          <div className="mb-12 md:pr-16 md:pl-0">
            {/* <h1 className="text-2xl font-semibold mb-4">Hello!</h1> */}

            <p className="italic text-xs mb-6 text-right">trying out a winter palette, thoughts?</p>

            {/* Research Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Research</h2>
              <p className="text-base leading-relaxed mb-4">
                I'm working on AI Evaluations with the{' '}
                <a
                  href="https://evalevalai.com/"
                  className="text-[#2f7ac6] underline hover:text-[#1f639e]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Evaluating Evaluations (EvalEval) Coalition
                </a>
                . Also looking for more projects/collaborators! My interests include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li className="text-base leading-relaxed">AI Evaluations</li>
                <li className="text-base leading-relaxed">AI Control</li>
                <li className="text-base leading-relaxed">Mechanistic Interpretability</li>
                <li className="text-base leading-relaxed">Large Language Models in CS Education</li>
                <li className="text-base leading-relaxed">Educational Technology & Student Development</li>
              </ul>
            </div>

            {/* Software Engineering Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Software Engineering</h2>
              <p className="text-base leading-relaxed mb-4">
                I'm currently a Software Engineer at{' '}
                <a
                  href="https://aws.amazon.com/connect/agent-workspace/"
                  className="text-[#2f7ac6] underline hover:text-[#1f639e]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Connect
                </a>{' '}
                working on Agent Workspace.
              </p>
            </div>

            {/* Hobbies Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Hobbies</h2>
              <p className="text-base leading-relaxed mb-4">
                I love trying new food. I currently have 372 new Beli spots for 2025.
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

        {activeTab === "publications" && (
          <div className="md:pr-16 md:pl-0">
            <ResearchExperience />
          </div>
        )}

        {activeTab === "projects" && (
          <div className="md:pr-16 md:pl-0">
            <ProjectsSection />
          </div>
        )}
      </div>
    </main>
  );
}
