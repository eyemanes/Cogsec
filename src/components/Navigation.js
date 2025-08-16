import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, onSectionChange }) => {
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);

  const navItems = [
    { id: 'homepage', label: 'Homepage' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'live-chat', label: 'Live Chat' }
  ];

  const knowledgeItems = [
    { id: 'reports', label: 'Reports' },
    { id: 'tools-resources', label: 'Tools & Resources' },
    { id: 'secure-your-mind', label: 'Secure Your Mind' },
    { id: 'mind-quiz', label: 'Mind Quiz' }
  ];

  const isKnowledgeActive = knowledgeItems.some(item => item.id === activeSection);

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
          
          {/* Simple Knowledge Menu */}
          <li className={`nav-item knowledge-menu ${isKnowledgeActive ? 'active' : ''}`}>
            <div 
              className="knowledge-trigger"
              onClick={() => {
                console.log('Knowledge clicked, toggling from:', knowledgeOpen);
                setKnowledgeOpen(!knowledgeOpen);
              }}
            >
              Knowledge ▼
            </div>
            
            {knowledgeOpen && (
              <div className="knowledge-dropdown">
                {knowledgeItems.map(item => (
                  <div
                    key={item.id}
                    className={`knowledge-item ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => {
                      console.log('Knowledge item clicked:', item.id);
                      onSectionChange(item.id);
                      setKnowledgeOpen(false);
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;