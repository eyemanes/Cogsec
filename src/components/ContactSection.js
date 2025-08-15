import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [copyStatus, setCopyStatus] = useState('COPY');
  
  const copyAddress = async () => {
    const address = '8DiFCBvAkDW4UAyPZH6CX9tJSQ1L7EHFVU92w2gAobP4';
    
    try {
      await navigator.clipboard.writeText(address);
      setCopyStatus('COPIED!');
      
      setTimeout(() => {
        setCopyStatus('COPY');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy address: ', err);
      alert('Failed to copy address. Please copy manually.');
    }
  };

  return (
    <div className="section contact-section">
      <h2 className="section-title">SECURE COMMUNICATIONS</h2>
      
      <div className="contact-container">
        <div className="glass-card contact-card">
          <h3>[SECURE] Encrypted Wallet Address</h3>
          <div className="crypto-address">
            <span className="address-label">CA:</span>
            <div className="address-value">
              8DiFCBvAkDW4UAyPZH6CX9tJSQ1L7EHFVU92w2gAobP4
            </div>
            <button 
              className={`copy-btn ${copyStatus.includes('COPIED') ? 'copied' : ''}`}
              onClick={copyAddress}
            >
              {copyStatus}
            </button>
          </div>
        </div>
        
        <div className="glass-card contact-card">
          <h3>[NETWORK] Neural Network Feed</h3>
          <div className="social-link">
            <a 
              href="https://x.com/cogsecsol" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="twitter-link"
            >
              <span className="social-icon">[LINK]</span>
              <span className="social-text">@cogsecsol</span>
              <span className="social-platform">Twitter/X</span>
            </a>
          </div>
        </div>
        
        <div className="glass-card contact-card">
          <h3>[WARNING] Security Protocol</h3>
          <div className="security-warning">
            <p>All communications are monitored for AI intrusion attempts.</p>
            <p>Use encrypted channels only. Verify all contact authenticity.</p>
            <p>Report suspicious neural activity immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
