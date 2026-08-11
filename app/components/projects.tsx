
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
    <ul className="projects-list">
      {projects.map((project, index) => (
        <li key={index} className="project-item group">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <div className="relative h-full md:h-40 overflow-hidden rounded-[var(--radius)]">
              <Image
                src={`/projects/${project.image}`}
                alt={project.name}
                className="project-image object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                height={500}
                width={500}
              />
            </div>
          </a>
          <span
            className="project-name mt-1.5 block transition-colors duration-200"
            style={{ color: 'var(--fg)' }}
          >
            {project.name}
          </span>
        </li>
      ))
      }
    </ul>
  );
}