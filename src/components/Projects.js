import React from 'react';
import './Projects.css';

// TODO: Replace with your real projects — title, description, tech stack, and links.
const PROJECTS = [
  {
    title: 'Project one',
    description: 'One or two sentences describing the problem this project solves and your role in building it.',
    tech: ['Java', 'Spring Boot'],
    github: 'https://github.com/prathamesh19p',
    live: null,
  },
  {
    title: 'Project two',
    description: 'One or two sentences describing the problem this project solves and your role in building it.',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/prathamesh19p',
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <p className="projects-intro">
        A few things I've built. More on{' '}
        <a href="https://github.com/prathamesh19p" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span className="tech-tag" key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Code &rarr;
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
