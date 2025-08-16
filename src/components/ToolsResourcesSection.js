import React from 'react';
import './ToolsResourcesSection.css';

const ToolsResourcesSection = () => {
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
      category: "AI Text Detection",
      tools: [
        {
          name: "Scribbr AI Detector",
          url: "https://www.scribbr.com/ai-detector/",
          description: "AI vs. human text detection w/ feedback"
        },
        {
          name: "QuillBot AI Detector",
          url: "https://quillbot.com/ai-content-detector",
          description: "Detects several LLM outputs w/ detailed analysis"
        },
        {
          name: "GPTZero",
          url: "https://gptzero.me",
          description: "Uses perplexity metrics to detect AI text"
        },
        {
          name: "Copyleaks AI Detector",
          url: "https://copyleaks.com/ai-content-detector",
          description: "99%+ accuracy across many languages/models"
        }
      ]
    },
    {
      category: "Deepfake & Media Detection",
      tools: [
        {
          name: "Reality Defender (Deepfake API)",
          url: "https://www.realitydefender.com",
          description: "Detects deepfake media via API (free tier available)"
        },
        {
          name: "DeepFake-O-Meter v2.0",
          url: "https://buffalo.edu/ubmdfl/deep-o-meter",
          description: "Open-source deepfake detection platform"
        },
        {
          name: "Deepware Scanner",
          url: "https://scanner.deepware.ai",
          description: "Video-based deepfake detection via web/API/SDK"
        }
      ]
    },
    {
      category: "Verification & Investigation",
      tools: [
        {
          name: "Google Lens",
          url: "https://lens.google",
          description: "Reverse image search for verification tasks"
        },
        {
          name: "Wayback Machine",
          url: "https://archive.org/web/",
          description: "Access historical snapshots of web content"
        }
      ]
    },
    {
      category: "Fact-Checking & Verification",
      tools: [
        {
          name: "ClaimBuster, Full Fact",
          url: "https://informationethics.ca/.../502/487/791",
          description: "AI fact-checkers—100% accurate per study"
        },
        {
          name: "Facticity.AI",
          url: "https://facticity.ai/",
          description: "Real-time fact-checker; 92% accuracy"
        },
        {
          name: "ClaimHunter",
          url: "https://newtral.es/",
          description: "Flags political claims 70–80% faster"
        },
        {
          name: "Veracity",
          url: "https://arxiv.org/abs/2506.15794",
          description: "Open-source veracity scoring tool"
        },
        {
          name: "Logically",
          url: "https://logically.ai",
          description: "AI + humans detect disinfo narratives"
        }
      ]
    },
    {
      category: "Browser Extensions & Tools",
      tools: [
        {
          name: "Hoaxy",
          url: "https://arxiv.org/abs/1603.01511",
          description: "Visualizes misinformation spread"
        },
        {
          name: "Check-It",
          url: "https://arxiv.org/abs/1905.04260",
          description: "Browser plugin, >99% fake news accuracy"
        },
        {
          name: "BRENDA",
          url: "https://arxiv.org/abs/2005.13270",
          description: "Deep-learning browser extension for credibility"
        },
        {
          name: "SurfSafe",
          url: "https://www.getsurfsafe.com",
          description: "Extension flags altered images"
        }
      ]
    },
    {
      category: "Platform Monitoring & Defense",
      tools: [
        {
          name: "Cyabra",
          url: "https://en.wikipedia.org/wiki/Cyabra",
          description: "Platform detecting AI-generated narratives"
        },
        {
          name: "AdVerif.ai / Zefr AI",
          url: "https://adverifai.com",
          description: "Detects misinformation in ads"
        },
        {
          name: "ZeroFox",
          url: "https://zerofox.com",
          description: "Monitors digital platforms for disinfo threats"
        },
        {
          name: "WITNESS OSINT",
          url: "https://lab.witness.org/projects/osint-digital-forensics/",
          description: "Tracks media provenance across platforms"
        }
      ]
    },
    {
      category: "Educational & Framework Resources",
      tools: [
        {
          name: "News Literacy Project",
          url: "https://en.wikipedia.org/wiki/News_Literacy_Project",
          description: "Educational resources for media literacy"
        },
        {
          name: "AMITT Framework",
          url: "#",
          description: "Catalogs misinformation tactics for defense"
        },
        {
          name: "DISARM Framework",
          url: "https://boozallen.com/.../measurement-and-visualization-of-the-cognitive-domain.html",
          description: "Visual framework to map cognitive threats"
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

  const renderToolsAndResources = () => (
    <div className="tools-resources-section">
      <h2>Detection Tools & Resources</h2>
      <p className="tools-intro">
        Comprehensive collection of tools and resources to help you identify AI-generated content, 
        verify information, and protect against digital manipulation.
      </p>
      
      {detectionTools.map((category, index) => (
        <div key={index} className="tools-category glass-card">
          <h3>{category.category}</h3>
          <div className="tools-grid">
            {category.tools.map((tool, toolIndex) => (
              <div key={toolIndex} className="tool-card">
                <h4>
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="tool-link"
                  >
                    {tool.name}
                  </a>
                </h4>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="section tools-resources-section">
      <div className="section-header">
        <h1 className="section-title">TOOLS & RESOURCES</h1>
        <p className="section-subtitle">
          Essential cognitive security knowledge and defensive tools
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
      {renderToolsAndResources()}
    </div>
  );
};

export default ToolsResourcesSection;