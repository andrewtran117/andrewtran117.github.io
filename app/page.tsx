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
            <p className="text-base leading-relaxed">
              Hello! Welcome to my page :)
            </p>
            <p className="text-base leading-relaxed mt-4">
              Below, you'll find upcoming events in my life as well as a timeline of just some of my experiences in a career in technology.
              Yes, I know! It's a lot of text. If you don't want to read it all, I understand (p.s. the red is the cool part!)
            </p>
            <p className="text-base leading-relaxed mt-6">
              But... there are a couple types of people who I think would benefit from reading everything:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-3">
              <li className="text-base leading-relaxed">
                <span className="font-semibold">Engineers, Scientists, and Recruiters in AI</span>: if you are reading this, reach out, I'd love to work with you! I've been in AI research for 4 years and have seen firsthand how it impacts the people around me. I'd make a great addition to your team.
              </li>
              <li className="text-base leading-relaxed">
                <span className="font-semibold">Students</span>: whether you are a Temple Owl, or any other animal that's definitely not as cool as an Owl, maybe you'll learn about some of the opportunities available to you today. Hopefully I can inspire you to do something amazing!
              </li>
            </ul>

            
            <hr className="border-t border-[#dddddd]/70 my-8" />
            {/* News Section */}
            <h3 className="text-lg font-semibold mt-8">Upcoming News</h3>
            {/* Add general news bullets here just like the yearly lists */}
            <ul className="list-disc pl-6 mt-2 space-y-1">
            <li className="text-[#666666]">Invited to speak at OwHacks 2025 on a panel. </li>
            <li className="text-[#666666]">Invited to speak at {""}
              <a
                href="https://www.ted.com/tedx/events/64289"
                className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                target="_blank"
                rel="noopener noreferrer"
              >
                TedxTemple
              </a>
              . My topic will not be disclosed until later.
            </li>
            </ul>

            <div className="mt-3 space-y-6">
              {/* 2025 */}
              <div>
                <h3 className="text-lg font-semibold">2025</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                <li className="text-[#666666]">Moved to New York, NY to start my full-time Software Engineer role at AWS Connect working on Agent Workspace. I am working full-stack w/ backend leaning.</li>
                <li className="text-[#666666]">Joined EvalEval Coalition to improve the state of AI Evals! Wrote a blog titled "
                  <a
                    href="https://evalevalai.com/documentation/2025/08/09/blog-chart-crisis/"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The AI Evaluation Chart Crisis
                  </a>
                  " alongside collaborators.
                </li>
                <li className="text-[#666666]">Backpacked through {""}
                  <a
                    href="https://news.temple.edu/news/2025-05-06/world-travel-and-software-engineering-await-cst-grad"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vietnam and Thailand
                  </a>
                  &nbsp;with my Mom, Sister, and Girlfriend!.
                </li>
                <li className="text-[#666666]">Graduated from Temple University with Distinction in Major, yay!!!</li>
                <li className="text-[#666666]">During my undergraduate research career, I have received over {""}
                  <a
                    href="https://scholar.google.com/citations?user=t9TUznoAAAAJ&hl=en"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    1000+
                  </a>
                  {" "}citations for my work and achieved an h-index score of 9.
                </li>
                <li className="text-[#666666]">The Temple HCI Lab is now at 50+ undergraduate students, more than half of which have conference publications. Many of which I mentored in some way whether it was on research, leadership, or engineering skills.</li>
                <li className="text-[#666666]">Was the first student to present at the Temple University College of Science and Technology Dean and Board of Trustees meeting. I presented my work on Generative AI and how it will affect education. </li>
                <li className="text-[#666666]">Filmed my first ever podcast episode with {""}
                  <a
                    href="https://podcast.cis.temple.edu/tag/andrew-tran/"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OwlByte
                  </a>
                  {" "}on navigating an AI research career as an undergrad.
                </li>
                </ul>
              </div>

              {/* 2024 */}
              <div>
                <h3 className="text-lg font-semibold">2024</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                <li className="text-[#666666]">Closed out my 3rd and final OwlHacks. Since starting it a couple years ago, OwlHacks has grown to over 300+ participants from 10+ states! We've also raised over $25,000 in sponsorship.</li>
                <li className="text-[#666666]">Traveled to {""}
                  <a
                    href="https://tapiaconference.cmd-it.org/"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tapia 2024
                  </a>
                  {" "}in San Diego, CA, to present a workshop on building inclusive hackathons.
                </li>
                <li className="text-[#666666]">Invited to speak at the {""}
                  <a
                    href="https://www.raspberrypi.org/blog/empowering-undergraduate-computer-science-students-to-shape-generative-ai-research/"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Raspberry Pi Seminar Series
                  </a>
                  {" "}on Generative AI.
                </li>
                <li className="text-[#666666]">Moved to Seattle, WA, to start my internship as a Software Engineer on {""}
                  <a
                    href="https://aws.amazon.com/connect/"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AWS Connect
                  </a>
                  .
                </li>
                <li className="text-[#666666]">Awarded the {""}
                  <a
                    href="https://news.temple.edu/news/2024-04-25/meet-temple-s-newest-goldwater-scholar"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Barry Goldwater Scholarship
                  </a>
                  , the highest undergraduate research scholarship for students in the United States.
                </li>
                <li className="text-[#666666]">Studied abroad at {""}
                  <a
                    href="https://www.tuj.ac.jp/"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Temple University Japan Campus
                  </a>
                  . Had an amazing time exploring, eating, and drinking matcha!
                </li>
                </ul>
              </div>

              {/* 2023 */}
              <div>
                <h3 className="text-lg font-semibold">2023</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                <li className="text-[#666666]">Became Temple University ACM's President as a sophomore.</li>
                <li className="text-[#666666]">Wanting to strengthen the CS culture at Temple University, I brought back {""}
                  <a
                    href="https://www.owlhacks.com/"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OwlHacks
                  </a>
                  , Temple's Annual Hackathon, after many years of it sitting idle.
                </li>
                <li className="text-[#666666]">Published my first 1st author full paper to FIE 2023 in College Station, TX, "
                  <a
                    href="https://www.researchgate.net/profile/Stephen-Macneil/publication/373894953_Generating_Multiple_Choice_Questions_for_Computing_Courses_using_Large_Language_Models/links/6501cd048d6da36cc877c8ae/Generating-Multiple-Choice-Questions-for-Computing-Courses-Using-Large-Language-Models.pdf"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Generating Multiple Choice Questions for Computing Courses using Large Language Models
                  </a>
                  ".
                </li>
                <li className="text-[#666666]">Started my first corporate internship as a Software Engineer at Cigna Healthcare!</li>
                  <li className="text-[#666666]">Published 3 conference accepted works in GenAI x CS Education with collaborators from Temple University, Aalto University, and The University of Auckland. Traveled to {""}
                    <a
                      href="https://sigcse.org/"
                      className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SIGCSE 2023
                    </a>
                    {" "}in Toronto, Canada, to present. It was also my first time out of the country!
                  </li>
                </ul>
              </div>


              {/* 2022 */}
              <div>
                <h3 className="text-lg font-semibold">2022</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                <li className="text-[#666666]">Accepted into IBM Good Tech Scholars, a summer fellowship designed to teach Software Engineering skills. I was mentored by senior engineers and project managers.</li>
                <li className="text-[#666666]">Accepted into the {""}
                  <a
                    href="https://undergradstudies.temple.edu/fellowships-advising/find-fellowship/nsf-research-experience-undergraduates-reu"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Temple REU Program 
                  </a>
                  &nbsp;for the summer, funded by the National Science Foundation.
                </li>
                <li className="text-[#666666]">Published my first conference accepted work, "
                  <a
                    href="https://dl.acm.org/doi/abs/10.1145/3501709.3544280"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Generating Diverse Code Explanations using the GPT-3 Large Language Model
                  </a>
                  " at ACM ICER 2022.
                </li>
                <li className="text-[#666666]">Began working at AeroPest, a startup building AI vision for autonomous drones to detect and identify pests during building inspections.</li>
                <li className="text-[#666666]">
                  Joined the Temple University HCI Lab as the fourth researcher, studying under{" "}
                  <a
                    href="https://stevemacn.github.io/"
                    className="text-[#d32f2f] underline hover:text-[#b71c1c]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dr. Stephen MacNeil
                  </a>
                  .
                </li>
                </ul>
              </div>
                            {/* 2021 */}
              <div>
                <h3 className="text-lg font-semibold">2021 (End of High School and Freshman Year)</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li className="text-[#666666]">Attended my first hackathons: BorderHacks, MakeUC, StemWarriorHacks. Built frontend sites and Discord bots (with GPT-3 API!). </li>
                  <li className="text-[#666666]">Won top final project in Introduction to Programming in Python out of 200+ students, allowing me to skip the final on-paper exam.</li>
                  <li className="text-[#666666]">Graduated high school and committed to Temple University to study Computer Science.</li>
                  <li className="text-[#666666]">Took Introduction to HTML and AP CS A, my first programming courses, at Marple Newtown High School!</li>
                </ul>
              </div>
            </div>
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
