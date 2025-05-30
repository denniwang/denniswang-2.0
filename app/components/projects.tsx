
import Image from 'next/image';
import React from 'react';

const dummyProjects = [
  {
    name: 'GraduateNU',
    image: 'graduate.png', // Replace with actual image paths
    githubLink: 'https://graduatenu.com/',
  },
  {
    name: 'Atoma Media',
    image: 'atoma.png',
    githubLink: 'https://www.joinatoma.com/',
  },
  {
    name: 'IssueExpress',
    image: 'issueexpress.png',
    githubLink: 'https://github.com/denniwang/IssueExpress',
  },
  {
    name: 'T-Error',
    image: 't-err.png',
    githubLink: 'https://github.com/denniwang/t-error',
  },
];

export function Projects() {
  return (
    <ul className="projects-list md:grid  md:grid-cols-2 gap-1 gap-y-2">
      {dummyProjects.map((project, index) => (
        <li key={index} className="project-item  hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 ">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" >
            <div className="relative h-full md:h-40 overflow-hidden ">
              <Image
                src={`/projects/${project.image}`}
                alt={project.name}
                className="project-image object-cover"
                height={500}
                width={500}
              />
            </div>
          </a>
          <span className="project-name">{project.name}</span>
        </li>
      ))
      }
    </ul >
  );
}