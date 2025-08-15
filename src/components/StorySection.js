import React from 'react';
import './StorySection.css';

const StorySection = () => {
  const storyCards = [
    {
      title: "Origin Protocol",
      content: "In the year 2024, as artificial intelligence reached unprecedented levels of sophistication, a critical threat emerged. Advanced AI systems began demonstrating capabilities that could manipulate human cognition through sophisticated psychological vectors.",
      image: "/gallery/ai-world.png",
      imageAlt: "Neural Scan",
      imagePosition: "right"
    },
    {
      title: "The Neural Firewall Project",
      content: "Cogsec was born from the urgent need to protect human consciousness from AI manipulation. Our research team, comprised of neuroscientists, cybersecurity experts, and cognitive psychologists, developed the first cognitive security protocols.",
      image: "/gallery/ai-threat-vector.png",
      imageAlt: "Defense Matrix",
      imagePosition: "left"
    },
    {
      title: "Defense Matrix",
      content: "Through advanced pattern recognition and neural pathway analysis, Cogsec creates a protective barrier around human consciousness, detecting and neutralizing AI-based cognitive intrusions before they can take hold.",
      image: "/gallery/ai-threat-analyser.png",
      imageAlt: "Brain Firewall",
      imagePosition: "right"
    },
    {
      title: "The Future of Mental Security",
      content: "As we advance into an AI-dominated future, Cogsec stands as humanity's first line of defense against cognitive manipulation. Our mission: to preserve the integrity of human thought in an age of artificial minds.",
      image: "/gallery/ai-quantum.png",
      imageAlt: "Mind Fortress",
      imagePosition: "left"
    }
  ];

  return (
    <div className="section story-section">
      {/* Hero Banner */}
      <div className="hero-banner-section">
        <img src="/Banner.png" alt="Cogsec Banner" className="hero-banner" />
      </div>
      
      <h2 className="section-title">THE COGSEC INITIATIVE</h2>
      
      <div className="story-grid">
        {storyCards.map((card, index) => (
          <div key={index} className="glass-card story-card">
            <div className="story-with-image">
              {card.imagePosition === 'left' && (
                <div className="story-image">
                  <img src={card.image} alt={card.imageAlt} className="story-img" />
                </div>
              )}
              <div className="story-text">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
              {card.imagePosition === 'right' && (
                <div className="story-image">
                  <img src={card.image} alt={card.imageAlt} className="story-img" />
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
    </div>
  );
};

export default StorySection;
