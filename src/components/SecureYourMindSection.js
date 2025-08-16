import React from 'react';
import './SecureYourMindSection.css';

const SecureYourMindSection = () => {
  const cognitiveThreats = [
    {
      title: "Recognize Cognitive Threats",
      items: [
        {
          name: "Information Overload",
          description: "Too much info makes you easier to manipulate. Curate sources, don't drown in them."
        },
        {
          name: "Echo Chambers",
          description: "Algorithms feed you what you already believe. Deliberately seek opposing viewpoints."
        },
        {
          name: "Emotional Manipulation",
          description: "Ads, propaganda, and clickbait hook you through anger, fear, or desire."
        },
        {
          name: "AI-Generated Misinformation",
          description: "Deepfakes, AI newsbots, and fake reviews blur truth from fiction."
        }
      ]
    }
  ];

  const defensiveMindset = [
    {
      title: "Defensive Mindset Habits",
      items: [
        {
          name: "Question the Source",
          description: "Who benefits from you believing this?"
        },
        {
          name: "Pause Before Sharing",
          description: "Misinformation spreads faster than facts."
        },
        {
          name: "Delay Reaction",
          description: "Emotional responses are easy manipulation points."
        },
        {
          name: "Check Multiple Sources",
          description: "Especially for shocking or sensational claims."
        }
      ]
    }
  ];

  const attentionSecurity = [
    {
      title: "Attention Security",
      items: [
        {
          name: "Control Your Inputs",
          description: "Limit push notifications, unfollow toxic feeds."
        },
        {
          name: "Use Time Blocks",
          description: "Schedule when to engage with content."
        },
        {
          name: "Mute Distractions",
          description: "Your attention is prime real estate; guard it like money."
        },
        {
          name: "Mindful Consumption",
          description: "Ask yourself: Why am I seeing this right now?"
        }
      ]
    }
  ];

  const aiAwareness = [
    {
      title: "AI & Data Awareness",
      items: [
        {
          name: "AI Can Profile You",
          description: "Every click, like, and pause feeds models predicting your behavior."
        },
        {
          name: "Personalized Manipulation",
          description: "Micro-targeted ads aren't random; they're built to bypass your defenses."
        },
        {
          name: "Deepfake Literacy",
          description: "Learn to spot synthetic voices, faces, and text patterns."
        }
      ]
    }
  ];

  const cognitiveSelfTraining = [
    {
      title: "Cognitive Self-Training",
      items: [
        {
          name: "Mental Firewalls",
          description: "Practice spotting logical fallacies and emotional bait."
        },
        {
          name: "Memory Hygiene",
          description: "Don't store everything; retain what's useful and verified."
        },
        {
          name: "Perspective Shifts",
          description: "Force yourself into 'devil's advocate' mode regularly."
        },
        {
          name: "Information Diets",
          description: "Fast from news or social media to reset your mental baseline."
        }
      ]
    }
  ];

  const redFlags = [
    {
      title: "Red Flags of Mind Infiltration",
      items: [
        "Sudden, unexplained shifts in your beliefs",
        "Compulsively checking a platform",
        "Feeling constant outrage without knowing why",
        "Adopting phrases or ideas you never questioned"
      ]
    }
  ];

  const renderDefenseSection = (section) => (
    <div key={section.title} className="defense-section glass-card">
      <h3>{section.title}</h3>
      <div className="defense-items">
        {section.items.map((item, index) => (
          <div key={index} className="defense-item">
            {typeof item === 'string' ? (
              <div className="simple-item">• {item}</div>
            ) : (
              <>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="section secure-your-mind-section">
      <div className="section-header">
        <h1 className="section-title">SECURE YOUR MIND</h1>
        <p className="section-subtitle">
          Essential cognitive security knowledge and defensive strategies
        </p>
      </div>

      <div className="mind-security-intro glass-card">
        <h2>Mental Defense Protocols</h2>
        <p>
          In an age of AI-powered manipulation, your mind is the final frontier. 
          These strategies help you build cognitive defenses against modern information warfare.
        </p>
      </div>

      {/* Core Defense Strategies */}
      <div className="defense-strategies">
        <h2>Core Defense Strategies</h2>
        <div className="strategies-grid">
          {[...cognitiveThreats, ...defensiveMindset, ...attentionSecurity, ...aiAwareness, ...cognitiveSelfTraining, ...redFlags].map(renderDefenseSection)}
        </div>
      </div>

      <div className="mind-security-footer glass-card">
        <h3>Remember</h3>
        <p>
          The strongest defense against AI manipulation is a mind that knows it's being protected. 
          Stay vigilant, question everything, and trust your human intuition.
        </p>
      </div>
    </div>
  );
};

export default SecureYourMindSection;