import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "sup! I'm Prathamesh Phalke";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="hero">
      <h2 className="greeting">
        {displayText}
        <span className="cursor">|</span>
      </h2>
      <p className="role-tag">Senior Consultant, Software Engineering @ Thoughtworks</p>
      <p className="intro">
        A software engineer specializing in building scalable, high-performance applications. I design and develop robust microservices, optimize systems with smart caching and efficient databases, and write clean, maintainable code.
      </p>
      <p className="interests">
        Off the clock, I'm chasing F1 speed and vibing to my favorite tunes.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="hero-btn primary">View Work</a>
        <a href="#contact" className="hero-btn">Get In Touch</a>
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} className="hero-btn" download>
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
