import React from 'react';
import './LandingScreen.css';

const LandingScreen = () => {
  return (
    <div className="landing-screen">
      <div className="logo">
        <img src="/Logo.png" alt="Cogsec Logo" style={{ height: '80px', marginBottom: '1rem' }} />
      </div>
      <div className="tagline">SECURE YOUR MIND</div>
      
      <div className="analyzer">
        <div className="analyzer-header">AI DETECTION PROTOCOL v2.7.1</div>
        <div className="scan-area">
          <div className="scan-line"></div>
          <div className="scan-text">SCANNING NEURAL PATTERNS...</div>
          <div className="scan-result">
            STATUS: HUMAN VERIFIED<br/>
            THREAT LEVEL: MINIMAL<br/>
            ACCESS GRANTED
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
