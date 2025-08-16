import React from 'react';
import './KnowledgeSection.css';

const KnowledgeSection = () => {
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

  const detectionTools = [
    {
      category: "Text & AI Detection Tools",
      tools: [
        {
          name: "Scribbr AI Detector",
          description: "Free tool that analyzes text—identifying AI-generated, AI-refined, and human-written segments. Multilingual support included."
        },
        {
          name: "QuillBot AI Detector",
          description: "Free checker for AI-generated text from ChatGPT, Gemini, or Claude. Provides detailed feedback on specific sentences."
        },
        {
          name: "GPTZero",
          description: "Offers an AI 'score' and sentence-level breakdown using perplexity and burstiness metrics."
        },
        {
          name: "Copyleaks",
          description: "Enterprise-grade AI text detector with high accuracy across 30 languages and minimal false positives."
        }
      ]
    },
    {
      category: "Image, Video & Deepfake Detection",
      tools: [
        {
          name: "Reality Defender",
          description: "Real-time deepfake detection API. Offers a starter tier with 50 free scans per month."
        },
        {
          name: "DeepFake-O-Meter v2.0",
          description: "Open-source platform supporting detection of deepfake images, video, and audio."
        },
        {
          name: "Deepware Scanner",
          description: "Upload videos for deepfake detection with enterprise options available."
        }
      ]
    },
    {
      category: "Investigation & Verification",
      tools: [
        {
          name: "Google Lens",
          description: "Reverse-image search to trace origins and detect manipulations."
        },
        {
          name: "Wayback Machine",
          description: "Compare archived web pages to verify changes or spot edits in content."
        },
        {
          name: "Perplexity AI & ChatGPT",
          description: "Useful for context-based fact-checking and debunking viral claims."
        }
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

  const renderDetectionTools = () => (
    <div className="detection-tools-section">
      <h2>Detection Tools & Resources</h2>
      <p className="tools-intro">
        Curated collection of tools and resources to help you identify AI-generated content, 
        verify information, and protect against digital manipulation.
      </p>
      
      {detectionTools.map((category, index) => (
        <div key={index} className="tools-category glass-card">
          <h3>{category.category}</h3>
          <div className="tools-grid">
            {category.tools.map((tool, toolIndex) => (
              <div key={toolIndex} className="tool-card">
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="section knowledge-section">
      <div className="section-header">
        <h1 className="section-title">KNOWLEDGE BASE</h1>
        <p className="section-subtitle">
          Essential cognitive security knowledge and defensive strategies
        </p>
      </div>

      {/* Core Defense Strategies */}
      <div className="defense-strategies">
        <h2>Core Defense Strategies</h2>
        <div className="strategies-grid">
          {[...cognitiveThreats, ...defensiveMindset, ...attentionSecurity, ...aiAwareness, ...cognitiveSelfTraining, ...redFlags].map(renderDefenseSection)}
        </div>
      </div>

      {/* Detection Tools Section */}
      {renderDetectionTools()}
    </div>
  );
};

export default KnowledgeSection;