import React, { useState } from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    // {
    //   name: 'Instagram',
    //   url: 'https://instagram.com/phalke_prathamesh',
    //   icon: 'fab fa-instagram',
    //   handle: '@phalke_prathamesh'
    // },
    
    {
      name: 'Email',
      url: 'mailto:prathamesh19p@gmail.com',
      icon: 'fas fa-envelope',
      handle: 'mail:prathameshphalke'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/prathamesh19p',
      icon: 'fab fa-github',
      handle: 'GitHub/prathameshphalke'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/prathameshxp',
      icon: 'fab fa-twitter',
      handle: '@prathameshphalke'
    },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/prathamesh19p',
      icon: 'fab fa-code',
      handle: 'Leetcode/prathamesh19p'
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const handleClick = (e, url) => {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    e.currentTarget.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section id="contact" className="social-links">
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">Feel free to reach out through any of these channels.</p>
      <div className="social-grid">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            className={`social-link ${hoveredLink === index ? 'hovered' : ''}`}
            target={link.name === 'Email' ? '_self' : '_blank'}
            rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleClick(e, link.url)}
          >
            <i className={link.icon}></i>
            <span>{link.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
