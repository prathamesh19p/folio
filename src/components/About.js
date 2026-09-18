import React from 'react';
import './About.css';

const FACTS = [
  { label: 'Role', value: 'Senior Consultant, Software Engineering @ Thoughtworks' },
  { label: 'Experience', value: '~4 years in backend engineering' },
  { label: 'Focus', value: 'Java, Spring Boot, microservices, AWS' },
  { label: 'Education', value: 'B.E. Electronics & Telecommunication, PCCOE (2018–2022)' },
];

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About</h2>
      <p className="about-text">
        I'm a backend-focused software engineer with around four years of experience building
        services in Java and Spring Boot. Most of that time has gone into designing microservices,
        third-party integrations, and asynchronous, workflow-driven systems — working with
        event-driven pipelines, both SQL and NoSQL databases, and cloud deployments on AWS. I've
        also picked up React along the way for the occasional front-end feature.
      </p>
      <p className="about-text">
        I recently joined Thoughtworks as a Senior Consultant and am currently available for
        client staffing, bringing that backend experience to new engagements.
      </p>
      <div className="facts-grid">
        {FACTS.map((fact) => (
          <div className="fact-card" key={fact.label}>
            <span className="fact-label">{fact.label}</span>
            <span className="fact-value">{fact.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
