import React from 'react';
import './Profiles.css';

const PROFILES = [
  { name: 'GitHub', url: 'https://github.com/prathamesh19p' },
  { name: 'LeetCode', url: 'https://leetcode.com/prathamesh19p' },
  { name: 'Twitter', url: 'https://x.com/prathameshxp' },
  { name: 'Email', url: 'mailto:prathamesh19p@gmail.com' },
];

const Profiles = () => {
  return (
    <section id="profiles" className="profiles">
      <h2 className="section-title">Profiles</h2>
      <div className="profile-links">
        {PROFILES.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target={profile.name === 'Email' ? '_self' : '_blank'}
            rel={profile.name === 'Email' ? undefined : 'noopener noreferrer'}
          >
            {profile.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profiles;
