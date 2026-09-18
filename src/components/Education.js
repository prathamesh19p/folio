import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education &amp; Achievements</h2>

      <div className="education-block">
        <h3>Education</h3>
        <p className="edu-title">B.E. in Electronics and Telecommunication Engineering</p>
        <p className="edu-sub">Pimpri Chinchwad College of Engineering, Pune University · 2018 – 2022 · 9.4 CGPA</p>
      </div>

      <div className="education-block">
        <h3>Certifications</h3>
        <ul className="edu-list">
          <li>AWS Certified Cloud Practitioner</li>
        </ul>
      </div>

      <div className="education-block">
        <h3>Achievements</h3>
        <ul className="edu-list">
          <li>Granted Government of India Patent No. 529448 for a four-factor facial recognition solution for fraud detection and secure authentication.</li>
          <li>Received "Pat on the Back" recognition at UST for contributions beyond core responsibilities.</li>
          <li>Received UStar Recognition at UST for consistent delivery and productivity.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
