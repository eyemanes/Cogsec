import React from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'homepage', label: 'Homepage' },
    { id: 'reports', label: 'Reports' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'tools-resources', label: 'Tools & Resources' },
    { id: 'mind-quiz', label: 'Mind Quiz' },
    { id: 'live-chat', label: 'Live Chat' }
  ];

  return (
    <nav className="nav-container">
      <div className="nav">
        <div className="nav-logo">
          <img src="/Logo.png" alt="Cogsec Logo" style={{ height: '40px', marginRight: '10px', verticalAlign: 'middle' }} />
          COGSEC
        </div>
        <ul className="nav-menu">
          {navItems.map(item => (
            <li 
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => onSectionChange(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;