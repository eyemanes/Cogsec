import React from 'react';
import './StorySection.css';

const StorySection = () => {
  const storyCards = [
    {
      title: "Origin Protocol",
      content: "In the year 2024, as artificial intelligence reached unprecedented levels of sophistication, a critical threat emerged. Advanced AI systems began demonstrating capabilities that could manipulate human cognition through sophisticated psychological vectors.",
      video: "/gallery/origin protocol.mp4",
      videoAlt: "Origin Protocol Neural Scan",
      videoPosition: "right"
    },
    {
      title: "The Neural Firewall Project",
      content: "Cogsec was born from the urgent need to protect human consciousness from AI manipulation. Our research team, comprised of neuroscientists, cybersecurity experts, and cognitive psychologists, developed the first cognitive security protocols.",
      video: "/gallery/Neural Firewall Project.mp4",
      videoAlt: "Neural Firewall Defense Matrix",
      videoPosition: "left"
    },
    {
      title: "Defense Matrix",
      content: "Through advanced pattern recognition and neural pathway analysis, Cogsec creates a protective barrier around human consciousness, detecting and neutralizing AI-based cognitive intrusions before they can take hold.",
      video: "/gallery/Defense Matrix.mp4",
      videoAlt: "Defense Matrix Brain Firewall",
      videoPosition: "right"
    },
    {
      title: "The Future of Mental Security",
      content: "As we advance into an AI-dominated future, Cogsec stands as humanity's first line of defense against cognitive manipulation. Our mission: to preserve the integrity of human thought in an age of artificial minds.",
      video: "/gallery/Future Of mental Security.mp4",
      videoAlt: "Future Mental Security Mind Fortress",
      videoPosition: "left"
    }
  ];

  return (
    <div className="section story-section">
      {/* Hero Banner */}
      <div className="hero-banner-section">
        <img src="/Banner.png" alt="Cogsec Banner" className="hero-banner" />
      </div>
      
      <h2 className="section-title">THE COGSEC INITIATIVE</h2>
      
      {/* Contact Information Section */}
      <div className="contact-section-main">
        <div className="contact-info-compact">
          <div className="contact-line">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('8DiFCBvAkDW4UAyPZH6CX9tJSQ1L7EHFVU92w2gAobP4');
              const link = e.target;
              const original = link.textContent;
              link.textContent = 'COPIED!';
              setTimeout(() => link.textContent = original, 2000);
            }} className="contact-link">CA</a>
            <span className="separator">|</span>
            <a href="https://x.com/cogsecsol" target="_blank" rel="noopener noreferrer" className="contact-link">Profile</a>
            <span className="separator">|</span>
            <a href="https://x.com/i/communities/1954604922512822518" target="_blank" rel="noopener noreferrer" className="contact-link">Community</a>
            <span className="separator">|</span>
            <a href="https://t.me/COGSECSOL" target="_blank" rel="noopener noreferrer" className="contact-link">Telegram</a>
          </div>
        </div>
      </div>
      
      <div className="story-grid">
        {storyCards.map((card, index) => (
          <div key={index} className="glass-card story-card">
            <div className="story-with-image">
              {card.videoPosition === 'left' && (
                <div className="story-image">
                  <video 
                    src={card.video} 
                    alt={card.videoAlt} 
                    className="story-img" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                </div>
              )}
              <div className="story-text">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
              {card.videoPosition === 'right' && (
                <div className="story-image">
                  <video 
                    src={card.video} 
                    alt={card.videoAlt} 
                    className="story-img" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="story-footer glass-card">
        <h3>CLASSIFIED DIRECTIVE</h3>
        <p>
          The existence of Cogsec must remain compartmentalized. Only those with Level 7 clearance 
          or higher are authorized to access full operational details. Remember: The best defense 
          against AI manipulation is a mind that knows it's being protected.
        </p>
        <div className="directive-signature">
          — NERV Command Division
        </div>
      </div>
      
      {/* Disclaimer Section */}
      <div className="disclaimer-section glass-card">
        <h3>⚠️ DISCLAIMER</h3>
        <div className="disclaimer-content">
          <p>
            <strong>FICTIONAL CONTENT:</strong> This entire narrative is fictional content created for entertainment purposes only.
          </p>
        </div>
        <div className="disclaimer-signature">
          — The COGSEC Development Team
        </div>
      </div>
    </div>
  );
};

export default StorySection;
