import React, { useState } from 'react';
import './StoriesSection.css';

const StoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: "AI Voice Cloning Scam - $15,000 Lost",
      category: "Voice Manipulation",
      location: "Florida, USA",
      amount: "$15,000",
      date: "2024",
      summary: "Mother scammed by AI-cloned daughter's voice in fake emergency call",
      fullStory: "A Florida mother, Sharon Brightwell, was scammed out of $15,000 after receiving a phone call using an AI-cloned voice of her daughter. The caller claimed the daughter had been in a car accident and needed bail money. When pressed, another caller, impersonating a lawyer, demanded an additional $30,000. She only discovered the truth after speaking to her real daughter and grandson. She's now raising awareness about such scams.",
      tactics: [
        "AI voice cloning technology",
        "Emotional manipulation through fake emergency",
        "Multiple caller coordination",
        "Urgency and time pressure",
        "Authority figure impersonation"
      ],
      defenses: [
        "Verify identity through known contact methods",
        "Ask personal questions only the real person would know",
        "Never send money based on urgent phone calls",
        "Hang up and call the person directly",
        "Be aware of AI voice cloning capabilities"
      ],
      threatLevel: "HIGH",
      source: "https://people.com/woman-conned-out-of-usd15k-after-ai-cloned-daughters-voice-terrifying-scam-11775622"
    },
    {
      id: 2,
      title: "Google AI Recommends Scam Number - $768 Fraud",
      category: "AI Search Manipulation",
      location: "United States",
      amount: "$768+",
      date: "2025",
      summary: "AI-powered search results directed user to fraudulent customer service number",
      fullStory: "A real estate professional, Alex Rivlin, searched Google for the customer service number of Royal Caribbean. The AI-powered 'Overview' feature directed him to a fraudulent phone number. He called the fake line, handed over his card details, and was charged $768, plus additional unauthorized charges. Experts warn scammers pad the web with fake info that AI may propagate.",
      tactics: [
        "Search engine optimization manipulation",
        "AI-powered result amplification",
        "Fake customer service impersonation",
        "Credit card information harvesting",
        "Trusted platform exploitation"
      ],
      defenses: [
        "Always verify official contact numbers independently",
        "Use official company websites directly",
        "Be skeptical of AI-generated search results",
        "Never give card details over unsolicited calls",
        "Cross-reference contact information"
      ],
      threatLevel: "MEDIUM",
      source: "https://www.washingtonpost.com/technology/2025/08/15/google-ai-overviews-scam/"
    }
  ];

  const getThreatColor = (level) => {
    switch (level) {
      case 'CRITICAL': return '#ff4444';
      case 'HIGH': return '#ff8844';
      case 'MEDIUM': return '#ffaa44';
      default: return '#00ff00';
    }
  };

  const openStoryModal = (story) => {
    setSelectedStory(story);
  };

  const closeStoryModal = () => {
    setSelectedStory(null);
  };

  return (
    <div className="section stories-section">
      <div className="section-header">
        <h1 className="section-title">FIELD REPORTS</h1>
        <p className="section-subtitle">
          Documented AI manipulation incidents and security breaches
        </p>
      </div>

      <div className="stories-intro glass-card">
        <h2>Case Studies</h2>
        <p>
          Real-world examples of AI-powered attacks targeting individuals. 
          These cases demonstrate current threats and prevention strategies.
        </p>
        <div className="briefing-stats">
          <div className="stat-item">
            <span className="stat-number">{stories.length}</span>
            <span className="stat-label">Documented Cases</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$15K+</span>
            <span className="stat-label">Total Losses</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2024-25</span>
            <span className="stat-label">Time Period</span>
          </div>
        </div>
      </div>

      <div className="stories-grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card glass-card" onClick={() => openStoryModal(story)}>
            <div className="story-header">
              <div className="story-meta">
                <span className="story-category">{story.category}</span>
                <span 
                  className="threat-level"
                  style={{ color: getThreatColor(story.threatLevel) }}
                >
                  {story.threatLevel}
                </span>
              </div>
              <div className="story-amount">{story.amount}</div>
            </div>
            
            <h3 className="story-title">{story.title}</h3>
            <p className="story-summary">{story.summary}</p>
            
            <div className="story-footer">
              <div className="story-location">{story.location}</div>
              <div className="story-date">{story.date}</div>
            </div>
            
            <div className="read-more">
              <span>VIEW DETAILS</span>
            </div>
          </div>
        ))}
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div className="story-modal-overlay" onClick={closeStoryModal}>
          <div className="story-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-section">
                <h2>{selectedStory.title}</h2>
                <div className="modal-meta">
                  <span className="modal-category">{selectedStory.category}</span>
                  <span 
                    className="modal-threat"
                    style={{ color: getThreatColor(selectedStory.threatLevel) }}
                  >
                    {selectedStory.threatLevel} RISK
                  </span>
                </div>
              </div>
              <button className="modal-close" onClick={closeStoryModal}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="incident-details">
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{selectedStory.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Financial Loss:</span>
                    <span className="detail-value">{selectedStory.amount}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">{selectedStory.date}</span>
                  </div>
                </div>
              </div>

              <div className="incident-report">
                <h3>Case Details</h3>
                <p>{selectedStory.fullStory}</p>
              </div>

              <div className="analysis-section">
                <div className="tactics-section">
                  <h3>Attack Methods</h3>
                  <ul className="tactics-list">
                    {selectedStory.tactics.map((tactic, index) => (
                      <li key={index}>{tactic}</li>
                    ))}
                  </ul>
                </div>

                <div className="defenses-section">
                  <h3>Prevention Tips</h3>
                  <ul className="defenses-list">
                    {selectedStory.defenses.map((defense, index) => (
                      <li key={index}>{defense}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="source-section">
                <h3>Source</h3>
                <a 
                  href={selectedStory.source} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="source-link"
                >
                  Read Original Article
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoriesSection;