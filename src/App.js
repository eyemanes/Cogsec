import React, { useState, useEffect } from 'react';
import LandingScreen from './components/LandingScreen';
import Navigation from './components/Navigation';
import StorySection from './components/StorySection';
import StoriesSection from './components/StoriesSection';
import GallerySection from './components/GallerySection';
import KnowledgeSection from './components/KnowledgeSection';
import MindQuizSection from './components/MindQuizSection';
import LiveChatSection from './components/LiveChatSection';
import MatrixBackground from './components/MatrixBackground';
import './styles/App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeSection, setActiveSection] = useState('homepage');
  const [testCompleted, setTestCompleted] = useState(false);

  useEffect(() => {
    // Check if user has completed test or has cached results
    const hasCompletedTest = localStorage.getItem('cogsec_verification_result');
    if (hasCompletedTest) {
      setTestCompleted(true);
    }
  }, []);

  useEffect(() => {
    // Only auto-transition if test is completed
    if (testCompleted) {
      const timer = setTimeout(() => {
        setShowLanding(false);
      }, 3000); // Shorter time since test is done
      return () => clearTimeout(timer);
    }
  }, [testCompleted]);

  // Listen for test completion
  useEffect(() => {
    const handleTestComplete = () => {
      setTestCompleted(true);
    };

    window.addEventListener('cogsec-test-complete', handleTestComplete);
    return () => window.removeEventListener('cogsec-test-complete', handleTestComplete);
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
            {activeSection === 'homepage' && <StorySection />}
            {activeSection === 'stories' && <StoriesSection />}
            {activeSection === 'gallery' && <GallerySection />}
            {activeSection === 'knowledge' && <KnowledgeSection />}
            {activeSection === 'mind-quiz' && <MindQuizSection onNavigate={handleSectionChange} />}
            {activeSection === 'live-chat' && <LiveChatSection />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;