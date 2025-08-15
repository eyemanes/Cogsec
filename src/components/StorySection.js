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
      
      {/* Disclaimer Section */}
      <div className="disclaimer-section glass-card">
        <h3>⚠️ IMPORTANT DISCLAIMER</h3>
        <div className="disclaimer-content">
          <p>
            <strong>FICTIONAL CONTENT:</strong> This entire narrative, including all references to "Cogsec," 
            "AI detection protocols," "cognitive security," and "neural firewalls" is completely fictional 
            and created for entertainment purposes only.
          </p>
          <p>
            <strong>MEME TOKEN:</strong> COGSEC is a meme cryptocurrency token created for fun and community 
            engagement. This token has <strong>no intrinsic value</strong>, provides <strong>no utility</strong>, 
            and should not be considered an investment opportunity.
          </p>
          <p>
            <strong>NOT FINANCIAL ADVICE:</strong> Nothing on this website constitutes financial, investment, 
            or economic advice. Cryptocurrency investments are highly speculative and risky. 
            <strong>You may lose all invested funds.</strong>
          </p>
          <p>
            <strong>FOR ENTERTAINMENT ONLY:</strong> This project is intended purely for entertainment, 
            artistic expression, and community building within the cryptocurrency space.
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
