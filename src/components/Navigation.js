import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, onSectionChange }) => {
  const [showKnowledgeDropdown, setShowKnowledgeDropdown] = useState(false);

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

  const isKnowledgeSection = knowledgeItems.some(item => item.id === activeSection);

  const handleKnowledgeMouseEnter = () => {
    setShowKnowledgeDropdown(true);
  };

  const handleKnowledgeMouseLeave = () => {
    setShowKnowledgeDropdown(false);
  };

  const handleSubMenuClick = (sectionId) => {
    onSectionChange(sectionId);
    setShowKnowledgeDropdown(false);
  };

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
          
          {/* Knowledge Dropdown Menu */}
          <li 
            className={`nav-item dropdown ${isKnowledgeSection ? 'active' : ''}`}
            onMouseEnter={handleKnowledgeMouseEnter}
            onMouseLeave={handleKnowledgeMouseLeave}
          >
            <span className="dropdown-label">
              Knowledge
              <span className="dropdown-arrow">▼</span>
            </span>
            
            {showKnowledgeDropdown && (
              <ul className="dropdown-menu">
                {knowledgeItems.map(item => (
                  <li 
                    key={item.id}
                    className={`dropdown-item ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleSubMenuClick(item.id)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;