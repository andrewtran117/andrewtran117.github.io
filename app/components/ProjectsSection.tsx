type Project = {
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

const projects: Project[] = [
  {
    title: "eval-mini-harness",
    description:
      "mini, fast regression harness for local LLMs using Ollama",
    link: { label: "Project", href: "https://github.com/andrewtran117/eval-mini-harness" },
  },
  {
    title: "UnreliableNarrators",
    description:
      "characters who present a distorted view of reality, whether deliberately or subconsciously can help LLMs in faking alignment",
    link: { label: "Project", href: "https://github.com/andrewtran117/UnreliableNarrators" },
  },
];

const ProjectsSection = () => {
  return (
    <div className="pb-10">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-6 text-[#0f2a3d]">
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f2a3d] hover:text-[#1f639e]"
                  aria-label={`${project.title} link`}
                  title={project.link.label}
                >
                  <GithubIcon />
                </a>
              )}
            </div>
            <p className="mt-2 text-sm italic leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.476 2 2 6.486 2 12.021c0 4.428 2.865 8.186 6.839 9.51.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.344-3.369-1.344-.454-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.609.069-.609 1.003.071 1.531 1.031 1.531 1.031.892 1.532 2.341 1.09 2.91.833.091-.647.35-1.09.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.03-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 7.5a9.56 9.56 0 0 1 2.5.337c1.91-1.297 2.748-1.027 2.748-1.027.547 1.378.203 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.942.359.309.679.918.679 1.85 0 1.336-.012 2.414-.012 2.741 0 .267.18.577.688.48C19.138 20.203 22 16.446 22 12.02 22 6.486 17.522 2 12 2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ProjectsSection;
