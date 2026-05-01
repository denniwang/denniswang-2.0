
import Image from 'next/image';
import React from 'react';

const projects = [
  {
    name: "GraduateNU migration",
    image: "search.png",
    githubLink: "https://github.com/sandboxnu/searchneu",
  },
  {
    name: "GraduateNU",
    image: "graduate.png", // Replace with actual image paths
    githubLink: "https://graduatenu.com/",
  },
  {
    name: "Atoma Media",
    image: "atoma.png",
    githubLink: "https://www.joinatoma.com/",
  },
  {
    name: "T-Error",
    image: "t-err.png",
    githubLink: "https://github.com/denniwang/t-error",
  },
  {
    name: "Clu.lus",
    image: "clulus.png",
    githubLink: "https://github.com/sharvillimaye/clulus",
  },
  {
    name: "DAILP",
    image: "dailp.png",
    githubLink: "https://github.com/neu-dsg/dailp-encoding",
  },
  {
    name: "gitsum",
    image: "gitsum.png",
    githubLink: "https://www.npmjs.com/package/gitsum-cli",
  },
  {
    name: "IssueExpress",
    image: "issueexpress.png",
    githubLink: "https://github.com/denniwang/IssueExpress",
  },
];

export function Projects() {
  return (
    <ul className="projects-list md:grid  md:grid-cols-2 gap-1 gap-y-2">
      {projects.map((project, index) => (
        <li key={index} className="project-item group">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <div className="relative h-full md:h-40 overflow-hidden rounded-sm">
              <Image
                src={`/projects/${project.image}`}
                alt={project.name}
                className="project-image object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                height={500}
                width={500}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
                </svg>
              </span>
            </div>
          </a>
          <span className="project-name transition-colors duration-200 group-hover:text-[#47a3f3]">{project.name}</span>
        </li>
      ))
      }
    </ul >
  );
}