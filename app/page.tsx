"use client";

// AboutMeGallery component removed
import { useState } from "react";
import ProfileGrid from "./components/GridSection";
import ResearchExperience from "./components/ResearchExp";

type TabKey = "about" | "publications" | "projects";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] text-[#333333] md:overflow-hidden max-w-7xl mx-auto">
      {/* Profile Info Column - Non-scrollable */}
      <div className="w-full md:w-1/4 md:min-w-[300px] px-6 md:pl-16 md:pr-10 pt-12 md:pt-24 pb-6 bg-[#f5f5f5] md:sticky md:top-0 md:self-start">
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
            <p className="text-base leading-relaxed mt-6">
              Get in touch at&nbsp;
              <a
                href="mailto:andrew.tran117@outlook.com"
                className="text-[#d32f2f] underline hover:text-[#b71c1c]"
              >
                andrew.tran117@outlook.com
              </a>
              , and view my&nbsp;
              <a
                href="https://drive.google.com/file/d/1xBCICLQabAc0rc6W8qDyRcZ0eJo2ekN2/view?usp=sharing"
                className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
              .
            </p>

            {/* News Section */}
            <p className="text-base font-semibold mt-8">News:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <span className="font-bold">July 2025:</span> New blog on AI Evals — {""}
                <a
                  href="https://evalevalai.com/documentation/2025/08/09/blog-chart-crisis/"
                  className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chart Crisis — Evaluating LLMs on Chart Reasoning
                </a>
              </li>
              <li>
                <span className="font-bold">September 2025:</span> Speaking on a panel at OwlHacks 2025.
              </li>
              <li>
                <span className="font-bold">September 2025:</span>Attended GPU MODE hackathon hosted by Jane Street.
              </li>
              <li>
                <span className="font-bold">June 2025:</span> Backpacked through Vietnam and Thailand.
              </li>
              <li>
                <span className="font-bold">May 2025:</span> Graduated from Temple University with a B.S. in Computer Science.
              </li>
              <li>
                <span className="font-bold">July 2024:</span> Delivered a talk at the Raspberry Pi Research Seminar — {""}
                <a
                  href="https://www.raspberrypi.org/blog/empowering-undergraduate-computer-science-students-to-shape-generative-ai-research/"
                  className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Empowering Undergraduate CS Students to Shape Generative AI Research
                </a>
                .
              </li>
              <li>
                <span className="font-bold">April 2024:</span> Awarded the Barry Goldwater Scholarship.
              </li>
            </ul>
            <p className="mt-6">
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
            </p>
          </div>
        )}

        {activeTab === "publications" && (
          <div className="md:pr-16 md:pl-0">
            <ResearchExperience />
          </div>
        )}

        {activeTab === "projects" && (
          <div className="md:pr-16 md:pl-0">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <p className="text-base leading-relaxed">
              I&apos;ll be adding selected projects here soon. Check back for updates! For now, take a look at my CV for projects :)
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
