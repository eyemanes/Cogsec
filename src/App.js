import React, { useState, useEffect } from 'react';
import LandingScreen from './components/LandingScreen';
import Navigation from './components/Navigation';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import SecureYourMindSection from './components/SecureYourMindSection';
import MatrixBackground from './components/MatrixBackground';
import './styles/App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeSection, setActiveSection] = useState('story');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <MatrixBackground />
      
      {showLanding ? (
        <LandingScreen />
      ) : (
        <>
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange} 
          />
          
          <div className="content">
            {activeSection === 'story' && <StorySection />}
            {activeSection === 'gallery' && <GallerySection />}
            {activeSection === 'secure-mind' && <SecureYourMindSection />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;