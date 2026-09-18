import React from 'react';
import './Skills.css';

const SKILL_GROUPS = [
  { title: 'Languages', items: ['Java', 'Python', 'C++', 'SQL'] },
  { title: 'Backend', items: ['Spring Boot', 'REST APIs', 'Microservices', 'JPA', 'Hibernate', 'Kafka'] },
  { title: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Jenkins', 'CI/CD'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Oracle', 'Redis'] },
  {
    title: 'Tools & Practices',
    items: ['Git', 'Postman', 'Splunk', 'SonarQube', 'JUnit', 'Mockito', 'Design Patterns', 'TDD', 'Agile/Scrum'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="skill-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
