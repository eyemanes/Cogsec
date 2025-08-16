import React, { useState } from 'react';
import './BottomDock.css';

const BottomDock = ({ activeSection, onSectionChange }) => {
  const [showKnowledgeMenu, setShowKnowledgeMenu] = useState(false);

  const mainItems = [
    { 
      id: 'homepage', 
      label: 'Homepage',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="dock-icon">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      id: 'gallery', 
      label: 'Gallery',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="dock-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" 
                stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'live-chat', 
      label: 'Live Chat',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="dock-icon">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="1" fill="currentColor"/>
          <circle cx="8" cy="12" r="1" fill="currentColor"/>
          <circle cx="16" cy="12" r="1" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'knowledge', 
      label: 'Knowledge',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="dock-icon">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  const knowledgeItems = [
    { id: 'reports', label: 'Reports' },
    { id: 'tools-resources', label: 'Tools & Resources' },
    { id: 'secure-your-mind', label: 'Secure Your Mind' },
    { id: 'mind-quiz', label: 'Mind Quiz' }
  ];

  const handleKnowledgeClick = () => {
    setShowKnowledgeMenu(!showKnowledgeMenu);
  };

  const handleKnowledgeItemClick = (sectionId) => {
    onSectionChange(sectionId);
    setShowKnowledgeMenu(false);
  };

  return (
    <>
      {/* Knowledge Dropdown Menu */}
      {showKnowledgeMenu && (
        <div className="knowledge-popup">
          <div className="knowledge-popup-content">
            {knowledgeItems.map(item => (
              <div
                key={item.id}
                className={`knowledge-popup-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleKnowledgeItemClick(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Dock */}
      <div className="bottom-dock">
        <div className="dock-container">
          {mainItems.map(item => (
            <div
              key={item.id}
              className={`dock-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={item.id === 'knowledge' ? handleKnowledgeClick : () => onSectionChange(item.id)}
              onMouseEnter={item.id === 'knowledge' ? () => setShowKnowledgeMenu(true) : undefined}
            >
              <div className="dock-item-icon">
                {item.icon}
              </div>
              <span className="dock-item-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BottomDock;