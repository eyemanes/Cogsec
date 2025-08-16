import React, { useState, useEffect } from 'react';
import LandingScreen from './components/LandingScreen';
import Navigation from './components/Navigation';
import StorySection from './components/StorySection';
import ReportsSection from './components/ReportsSection';
import GallerySection from './components/GallerySection';
import ToolsResourcesSection from './components/ToolsResourcesSection';
import MindQuizSection from './components/MindQuizSection';
import LiveChatSection from './components/LiveChatSection';
import MatrixBackground from './components/MatrixBackground';
import './styles/App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeSection, setActiveSection] = useState('homepage');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleEnterSite = () => {
    setShowLanding(false);
  };

  return (
    <div className="App">
      <MatrixBackground />
      
      {showLanding ? (
        <LandingScreen onEnterSite={handleEnterSite} />
      ) : (
        <>
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange} 
          />
          
          <div className="content">
            {activeSection === 'homepage' && <StorySection />}
            {activeSection === 'reports' && <ReportsSection />}
            {activeSection === 'gallery' && <GallerySection />}
            {activeSection === 'tools-resources' && <ToolsResourcesSection />}
            {activeSection === 'mind-quiz' && <MindQuizSection onNavigate={handleSectionChange} />}
            {activeSection === 'live-chat' && <LiveChatSection />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;