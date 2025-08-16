import React from 'react';
import './LandingScreen.css';
import AIDetectionProtocol from './AIDetectionProtocol';

const LandingScreen = ({ onEnterSite }) => {
  return (
    <div className="landing-screen">
      <div className="logo">
        <img src="/Logo.png" alt="Cogsec Logo" style={{ height: '80px', marginBottom: '1rem' }} />
      </div>
      <div className="tagline">SECURE YOUR MIND</div>
      
      <div className="analyzer">
        <AIDetectionProtocol onEnterSite={onEnterSite} />
      </div>
    </div>
  );
};

export default LandingScreen;