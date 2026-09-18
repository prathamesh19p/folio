import React, { useState, useEffect } from 'react';
import './Hero.css';

const HERO_LINKS = [
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/prathamesh-phalke/' },
  { name: 'Github', url: 'https://github.com/prathamesh19p' },
  { name: 'Twitter', url: 'https://x.com/prathameshxp' }
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hey, I'm Prathamesh Phalke.";

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
      <h1 className="greeting">
        {displayText}
        <span className="cursor">|</span>
      </h1>
      <p className="role-tag">Senior Software Engineer @ Thoughtworks.</p>
      <p className="intro">
        A software engineer specializing in building scalable, high-performance applications. I design and develop robust microservices, optimize systems with smart caching and efficient databases, and write clean, maintainable code.
      </p>
      <p className="interests">
        Off the clock, I'm chasing F1 speed and vibing to my favorite tunes.
      </p>
      <div className="hero-links">
        {HERO_LINKS.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
