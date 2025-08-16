import React, { useState, useEffect, useRef } from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, onSectionChange }) => {
  const [showKnowledgeDropdown, setShowKnowledgeDropdown] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowKnowledgeDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKnowledgeClick = () => {
    setShowKnowledgeDropdown(!showKnowledgeDropdown);
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
            ref={dropdownRef}
            className={`nav-item dropdown ${isKnowledgeSection ? 'active' : ''}`}
            onClick={handleKnowledgeClick}
          >
            <span className="dropdown-label">
              Knowledge
              <span className={`dropdown-arrow ${showKnowledgeDropdown ? 'open' : ''}`}>▼</span>
            </span>
            
            {showKnowledgeDropdown && (
              <ul className="dropdown-menu">
                {knowledgeItems.map(item => (
                  <li 
                    key={item.id}
                    className={`dropdown-item ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubMenuClick(item.id);
                    }}
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