import React, { useState, useEffect, useCallback } from 'react';
import './Navigation.css';
import DarkModeToggle from './DarkModeToggle';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'profiles', label: 'Profiles' },
];

const Navigation = ({ isDarkMode, onToggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="nav-brand" onClick={handleLinkClick}>PP</a>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        {SECTIONS.map(({ id, label }) => (
          <li key={id} className="nav-item">
            <a
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
        <button
          className="nav-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
