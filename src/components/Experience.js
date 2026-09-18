import React from 'react';
import './Experience.css';

const EXPERIENCES = [
  {
    company: 'Thoughtworks',
    role: 'Senior Consultant, Software Engineering',
    period: '2026 – Present',
    points: [
      'Joined as a Senior Consultant and currently available for client staffing.',
      'Bringing backend engineering experience across Java, Spring Boot, microservices, and cloud-based applications to upcoming engagements.',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
  },
  {
    company: 'UST',
    role: 'Software Engineer 2',
    period: 'Oct 2024 – 2026',
    points: [
      'Built backend services and third-party integrations for identity verification and financial workflows.',
      'Developed KYC integrations with external providers, including workflow management, callback handling, and asynchronous document processing.',
      'Implemented AWS SQS-based processing with retry and failure handling, improving service reliability.',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'AWS S3', 'AWS SQS', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    company: 'UST',
    role: 'Software Engineer 1',
    period: 'Jul 2022 – Oct 2024',
    points: [
      'Built an audit logging solution to capture and query high-volume application events.',
      'Improved backend API performance through query and service-level optimizations.',
      'Migrated a Python-based document processing service from AWS Lambda to a Dockerized ECS deployment.',
      'Contributed to React-based UI features for customer-facing applications.',
    ],
    tech: ['Java', 'Spring Boot', 'Python', 'AWS Lambda', 'ECS', 'Docker', 'React', 'MySQL', 'MongoDB'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {EXPERIENCES.map((exp) => (
          <div className="timeline-item" key={`${exp.company}-${exp.period}`}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="period">{exp.period}</span>
              <ul className="points">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tech-list">
                {exp.tech.map((tech) => (
                  <span className="tech-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
