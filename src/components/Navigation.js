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

  const handleKnowledgeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('FORCING DROPDOWN TOGGLE:', !showKnowledgeDropdown);
    setShowKnowledgeDropdown(!showKnowledgeDropdown);
  };

  const handleSubMenuClick = (sectionId) => {
    console.log('Submenu clicked:', sectionId);
    onSectionChange(sectionId);
    setShowKnowledgeDropdown(false);
  };

  console.log('RENDER - showKnowledgeDropdown:', showKnowledgeDropdown);

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
          
          {/* FORCED Knowledge Dropdown Menu */}
          <li 
            ref={dropdownRef}
            className={`nav-item dropdown ${isKnowledgeSection ? 'active' : ''} ${showKnowledgeDropdown ? 'dropdown-open' : ''}`}
            onClick={handleKnowledgeClick}
            style={{ position: 'relative' }}
          >
            <span className="dropdown-label">
              Knowledge
              <span className={`dropdown-arrow ${showKnowledgeDropdown ? 'open' : ''}`}>▼</span>
            </span>
            
            {/* FORCE SHOW DROPDOWN ALWAYS WHEN STATE IS TRUE */}
            <ul 
              className="dropdown-menu"
              style={{
                display: showKnowledgeDropdown ? 'block' : 'none',
                position: 'absolute',
                top: '100%',
                left: '0',
                zIndex: '99999',
                background: 'rgba(0, 0, 0, 0.95)',
                border: '2px solid #00ff41',
                borderRadius: '8px',
                minWidth: '220px',
                padding: '8px 0',
                margin: '5px 0 0 0',
                listStyle: 'none',
                boxShadow: '0 8px 25px rgba(0, 255, 65, 0.4)'
              }}
            >
              {knowledgeItems.map(item => (
                <li 
                  key={item.id}
                  className={`dropdown-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSubMenuClick(item.id);
                  }}
                  style={{
                    padding: '12px 20px',
                    color: activeSection === item.id ? '#00ff41' : '#cccccc',
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(0, 255, 65, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;