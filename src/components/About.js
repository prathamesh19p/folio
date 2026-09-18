import React from 'react';
import './About.css';

const SKILLS = ['Java', 'Spring Boot', 'Microservices', 'AWS', 'React', 'SQL & NoSQL'];

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About</h2>
      <p className="about-text">
        I'm a backend-focused software engineer with around four years of experience designing
        microservices, third-party integrations, and workflow-driven systems — working across
        event-driven pipelines, SQL/NoSQL databases, and cloud deployments on AWS.
      </p>
      <p className="about-text">
        Currently a Senior Consultant at Thoughtworks, available for client staffing.
      </p>
      <div className="about-skills">
        {SKILLS.map((skill) => (
          <span className="skill-pill" key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default About;
