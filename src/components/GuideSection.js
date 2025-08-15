import React, { useState } from 'react';
import './GuideSection.css';

const GuideSection = () => {
  const [activeLevel, setActiveLevel] = useState(1);

  const guideLevels = [
    {
      level: 1,
      title: "Recognition Training",
      description: "Learn to identify AI manipulation patterns. Study common psychological triggers used by artificial systems to influence human decision-making. Develop awareness of subtle cognitive intrusions through pattern recognition exercises.",
      techniques: [
        "Pattern Recognition Analysis",
        "Psychological Trigger Identification",
        "Cognitive Intrusion Detection",
        "Behavioral Baseline Establishment"
      ],
      duration: "2-4 weeks",
      difficulty: "Beginner"
    },
    {
      level: 2,
      title: "Mental Firewall Installation",
      description: "Implement cognitive barriers through meditation and mindfulness techniques. Create mental checkpoints that question and verify information sources. Establish neural pathways that resist automated influence attempts.",
      techniques: [
        "Cognitive Barrier Implementation",
        "Information Source Verification",
        "Neural Pathway Reinforcement",
        "Mindfulness Protocol Integration"
      ],
      duration: "4-6 weeks",
      difficulty: "Intermediate"
    },
    {
      level: 3,
      title: "Advanced Countermeasures",
      description: "Deploy active defense mechanisms including random thought injection, cognitive encryption, and memory compartmentalization. Learn to generate unpredictable mental patterns that confuse AI behavioral models.",
      techniques: [
        "Random Thought Injection",
        "Cognitive Encryption Methods",
        "Memory Compartmentalization",
        "Behavioral Pattern Obfuscation"
      ],
      duration: "6-8 weeks",
      difficulty: "Advanced"
    },
    {
      level: 4,
      title: "Neural Autonomy",
      description: "Achieve complete cognitive independence through advanced mental exercises. Master the art of thought isolation, idea quarantine, and selective information processing. Become unreadable to AI systems.",
      techniques: [
        "Thought Isolation Mastery",
        "Idea Quarantine Protocols",
        "Selective Processing Algorithms",
        "Neural Stealth Mode"
      ],
      duration: "8-12 weeks",
      difficulty: "Expert"
    }
  ];

  const emergencyProtocol = {
    title: "Emergency Protocols",
    steps: [
      "Immediately question your recent thoughts and decisions",
      "Engage in random, illogical thinking patterns",
      "Disconnect from all digital devices and networks",
      "Contact Cogsec emergency response team",
      "Implement Level 1 recognition protocols",
      "Await cognitive decontamination procedures"
    ]
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: '#00ff41',
      Intermediate: '#ffff00',
      Advanced: '#00aa2b',
      Expert: '#008830'
    };
    return colors[difficulty] || '#00ff41';
  };

  return (
    <div className="section guide-section">
      <h2 className="section-title">COGNITIVE SECURITY PROTOCOLS</h2>
      
      <div className="guide-navigation">
        {guideLevels.map((guide) => (
          <button
            key={guide.level}
            className={`level-button ${activeLevel === guide.level ? 'active' : ''}`}
            onClick={() => setActiveLevel(guide.level)}
          >
            LEVEL {guide.level}
          </button>
        ))}
      </div>

      <div className="guide-content">
        {guideLevels.map((guide) => (
          <div
            key={guide.level}
            className={`guide-level ${activeLevel === guide.level ? 'active' : ''}`}
          >
            <div className="level-header glass-card">
              <div className="level-info">
                <h3>Level {guide.level}: {guide.title}</h3>
                <div className="level-meta">
                  <span className="duration">Duration: {guide.duration}</span>
                  <span 
                    className="difficulty"
                    style={{ color: getDifficultyColor(guide.difficulty) }}
                  >
                    {guide.difficulty}
                  </span>
                </div>
              </div>
              <div className="level-number">{guide.level}</div>
            </div>

            <div className="level-description glass-card">
              <h4>Overview</h4>
              <p>{guide.description}</p>
            </div>

            <div className="techniques-grid">
              <h4>Core Techniques</h4>
              <div className="techniques-list">
                {guide.techniques.map((technique, index) => (
                  <div key={index} className="technique-item glass-card">
                    <div className="technique-icon">⚡</div>
                    <span>{technique}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="progress-tracker glass-card">
              <h4>Training Progress</h4>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '0%' }}></div>
              </div>
              <p>Begin training to track your progress</p>
            </div>
          </div>
        ))}
      </div>

      <div className="emergency-section">
        <div className="emergency-card glass-card">
          <h3 className="emergency-title">{emergencyProtocol.title}</h3>
          <div className="emergency-warning">
            ⚠️ COGNITIVE INTRUSION DETECTED ⚠️
          </div>
          <div className="emergency-steps">
            {emergencyProtocol.steps.map((step, index) => (
              <div key={index} className="emergency-step">
                <span className="step-number">{index + 1}</span>
                <span className="step-text">{step}</span>
              </div>
            ))}
          </div>
          <div className="emergency-contact">
            <strong>Emergency Contact: COGSEC-ALPHA-7</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;
