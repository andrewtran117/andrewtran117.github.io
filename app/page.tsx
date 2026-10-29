"use client";

import { useState } from "react";
import ProfileGrid from "./components/GridSection";
import ResearchExperience from "./components/ResearchExp";

const sections = [
  { id: "about", label: "About Me" },
  // { id: "engineering", label: "Engineering" },
  { id: "research", label: "Publications" },
  { id: "community", label: "Community" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Page content */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 pt-10 pb-16">
        {/* Header: Photo + Name side by side, tabs below */}
        <header className="mb-10">
          <div className="flex flex-col items-center mb-4">
            <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden">
              <img
                src="/andrew.png"
                alt="Andrew Tran"
                className="w-full h-full rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="text-center mt-4">
              <div className="text-2xl font-bold">Andrew Tran</div>
              <div className="text-lg text-accent">New York, NY</div>
              <p className="text-sm">andrew dot tran 117 at outlook dot com</p>
            </div>
          </div>

          {/* Desktop tabs */}
          <nav className="hidden md:flex justify-center gap-6" aria-label="Section navigation">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="tab-link">
                {s.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
          {menuOpen && (
            <nav className="md:hidden flex flex-col gap-2 mt-2" aria-label="Mobile navigation">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="tab-link block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          )}
        </header>

        {/* About Me */}
        <section id="about" className="mb-10 scroll-mt-10">
          <h2 className="text-xl font-semibold mb-3">About Me</h2>
          <p className="text-base leading-relaxed">
            I'm a Software Engineer at{' '}
            <a href="https://aws.amazon.com/connect/" className="text-accent underline hover:text-accent-hover" target="_blank" rel="noopener noreferrer">AWS Connect</a>
            {' '}and AI researcher. I've worked across AI tools for education, AI evaluation infrastructure, customer service platforms, healthcare, and autonomous drones. I want to leverage technology towards making the world a more inclusive place and provide opportunity for underserved communities.
          </p>
          <p className="text-base leading-relaxed mt-4">
            I have ongoing research projects in{' '}
            AI Evals (<a href="https://evalevalai.com/projects/every-eval-ever/" className="text-accent underline hover:text-accent-hover" target="_blank" rel="noopener noreferrer">Evaluation Evaluations</a>), and Model Introspection (<a href="https://sparai.org/projects/sp26/?mentor=Lydia+Nottingham" className="text-accent underline hover:text-accent-hover" target="_blank" rel="noopener noreferrer">SPAR Spring 2026</a>).
            {' '}The research I work on today is grounded by 4 years of experience in AIxCS Education and other Human-AI Research at the Temple University Human-Computer Interaction Lab (2021-2025).
          </p>
          <p className="text-base leading-relaxed mt-4">
            Reach out at andrew dot tran 117 at outlook dot com
          </p>
        </section>

        {/* Engineering - commented out */}
        {/* <section id="engineering" className="mb-10 scroll-mt-10">
          <h2 className="text-xl font-semibold mb-3">Engineering</h2>
          <div className="mb-4 border-l-4 border-accent pl-4">
            <h3 className="text-lg font-medium">AWS Connect</h3>
            <p className="text-sm text-muted mb-1">Software Engineer · Current</p>
            <p className="text-base leading-relaxed">
              Building AI-powered customer service solutions at AWS Connect.
            </p>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-base font-medium text-accent hover:text-accent-hover">Past Roles</summary>
            <div className="mt-3">
              <div className="mb-4 pl-4">
                <h3 className="text-lg font-medium">Cigna</h3>
                <p className="text-sm text-muted mb-1">Software Engineer Intern · Summer 2023</p>
                <p className="text-base leading-relaxed">
                  Software Engineer Intern on myPassport, a pharmacy benefits management application. Built API endpoints with Kotlin and Spring Boot, utilized AWS Lambda with DynamoDB, and automated webpage testing with Selenium.
                </p>
              </div>
              <div className="mb-4 pl-4">
                <h3 className="text-lg font-medium">AeroPest</h3>
                <p className="text-sm text-muted mb-1">Software Engineer Intern · 2021 – 2023</p>
                <p className="text-base leading-relaxed">
                  Built a React Native mobile app for field inspection reports and AI vision for autonomous drones to detect pests during building inspections.
                </p>
              </div>
              <div className="mb-4 pl-4">
                <h3 className="text-lg font-medium">IBM</h3>
                <p className="text-sm text-muted mb-1">Good Tech Fellow · Summer 2022</p>
                <p className="text-base leading-relaxed">
                  Built HumanityWithUS, a web application for crafting data narratives about poverty in Philadelphia. Developed a spatial exploration interface in React.js and integrated IBM Watson's AI chatbot.
                </p>
              </div>
            </div>
          </details>
        </section> */}

        {/* AI Research */}
        <section id="research" className="mb-10 scroll-mt-10">
          <ResearchExperience />
        </section>

        {/* Community */}
        <section id="community" className="mb-10 scroll-mt-10">
          <h2 className="text-xl font-semibold mb-3">Community</h2>
          <p className="text-base leading-relaxed mb-4">
            The most rewarding experiences in my life have come from the communities I've helped build. Thank You everyone!
          </p>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">OwlHacks</h3>
            <p className="text-base leading-relaxed mb-3">
              I founded OwlHacks, Temple University's annual hackathon. Over 3 years as director, I secured $25,000+ in sponsorship value and brought together 500+ students from 15+ universities.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-3">
              <div className="flex flex-col items-center w-full md:w-1/2">
                <img src="/OwlHacks2024.PNG" alt="OwlHacks 2024" className="rounded-lg w-full object-cover" />
                <p className="italic text-sm mt-1">OwlHacks E-Board 2024</p>
              </div>
              <div className="flex flex-col items-center w-full md:w-1/2">
                <img src="/Nahum.jpeg" alt="Nahum" className="rounded-lg w-full object-cover" />
                <p className="italic text-sm mt-1">My roommate Nahum :)</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col items-center w-full md:w-1/2">
                <img src="/OpeningCeremony.JPG" alt="Opening Ceremony" className="rounded-lg w-full h-48 object-cover" />
                <p className="italic text-sm mt-1">Opening Ceremony</p>
              </div>
              <div className="flex flex-col items-center w-full md:w-1/2">
                <img src="/FirstOwlHacks.jpg" alt="The First OwlHacks" className="rounded-lg w-full h-48 object-cover" />
                <p className="italic text-sm mt-1">The First OwlHacks</p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">ACM at Temple University</h3>
            <p className="text-base leading-relaxed mb-3">
              I served as President of Temple University's ACM chapter, where I led initiatives to grow the CS community on campus and connect students with industry and research opportunities.
            </p>
            <div className="flex flex-col items-center">
              <img src="/ACM2024.JPG" alt="ACM 2024" className="rounded-lg w-3/5 object-cover" />
              <p className="italic text-sm mt-1">ACM Boba Social</p>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Temple HCI Lab</h3>
            <p className="text-base leading-relaxed mb-3">
              I joined the Temple HCI Lab as one of the first 3 researchers. By the time I graduated, there were over 50+ undergraduate researchers. Many of which I have had the opportunity to mentor.
            </p>
            <div className="flex gap-4 items-stretch">
              <div className="flex flex-col items-center w-full md:w-1/2">
                <img src="/MacNeil.JPG" alt="Macneil" className="rounded-lg w-full h-full object-cover object-center" />
                <p className="italic text-sm mt-1">Dr. Stephen MacNeil</p>
              </div>
              <div className="flex flex-col items-center w-full md:w-1/2">
                <img src="/Tapia.jpeg" alt="Tapia" className="rounded-lg w-full h-full object-cover object-center" />
                <p className="italic text-sm mt-1">Presentation at Tapia'24</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
