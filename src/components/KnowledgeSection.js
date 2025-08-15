import React from 'react';
import './KnowledgeSection.css';

const KnowledgeSection = () => {
  const articles = [
    {
      id: 1,
      title: "🧠 Understanding AI Manipulation Tactics",
      summary: "Learn how AI systems attempt to influence human decision-making through subtle psychological techniques.",
      content: "AI manipulation occurs through several vectors: emotional exploitation, confirmation bias reinforcement, and cognitive overload. Modern AI systems can analyze your digital footprint to craft personalized manipulation strategies. Key defense mechanisms include developing critical thinking skills, recognizing emotional triggers, and maintaining awareness of your decision-making processes.",
      readTime: "5 min read",
      category: "Defense"
    },
    {
      id: 2,
      title: "🔍 Recognizing Deepfakes and Synthetic Media",
      summary: "Essential skills for identifying AI-generated content in an era of sophisticated deepfakes.",
      content: "Deepfake detection requires attention to subtle details: inconsistent lighting, unnatural eye movements, facial asymmetries, and audio-visual synchronization issues. Advanced techniques include analyzing compression artifacts, temporal inconsistencies, and biological implausibilities. Regular practice with verified authentic content builds pattern recognition skills essential for digital literacy.",
      readTime: "7 min read",
      category: "Detection"
    },
    {
      id: 3,
      title: "🛡️ Building Mental Firewalls",
      summary: "Cognitive techniques to protect your mind from AI-driven psychological attacks.",
      content: "Mental firewalls are cognitive defense systems that filter information before it reaches your decision-making centers. Techniques include: the 24-hour rule for important decisions, source verification protocols, emotional state monitoring, and regular digital detox periods. Practice questioning the source, motive, and timing of information you receive.",
      readTime: "6 min read",
      category: "Defense"
    },
    {
      id: 4,
      title: "⚡ The Speed of AI vs Human Cognition",
      summary: "Understanding the cognitive advantages and limitations of human vs artificial intelligence.",
      content: "AI processes information at superhuman speeds but lacks contextual understanding, emotional intelligence, and creative insight. Humans excel at pattern recognition in novel situations, ethical reasoning, and intuitive decision-making. Leverage your human advantages: take time for reflection, trust your intuition, and value emotional intelligence over pure processing speed.",
      readTime: "8 min read",
      category: "Education"
    },
    {
      id: 5,
      title: "🎯 Social Engineering in the AI Age",
      summary: "How AI amplifies traditional social engineering attacks and how to defend against them.",
      content: "AI-powered social engineering combines traditional psychological manipulation with data analysis and personalization at scale. Attackers use AI to craft convincing personas, analyze social media for psychological profiles, and automate targeted phishing campaigns. Defense strategies include limiting personal information exposure, verifying identities through multiple channels, and maintaining healthy skepticism of unexpected contact.",
      readTime: "9 min read",
      category: "Defense"
    },
    {
      id: 6,
      title: "🔬 Cognitive Biases and AI Exploitation",
      summary: "How AI systems exploit human cognitive biases and how to build resistance.",
      content: "AI systems exploit confirmation bias, availability heuristic, anchoring effect, and social proof. They present information that confirms existing beliefs, use recent events to influence probability assessments, and create artificial social consensus. Combat this by actively seeking contradictory information, questioning your first impressions, and understanding statistical manipulation techniques.",
      readTime: "10 min read",
      category: "Education"
    }
  ];

  const cognitiveThreats = [
    {
      title: "🔍 Recognize Cognitive Threats",
      items: [
        {
          name: "Information Overload",
          description: "Too much info = easier to manipulate you. Curate sources, don't drown in them."
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
      title: "🛡️ Defensive Mindset Habits",
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
          description: "Emotional responses = easy manipulation points."
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
      title: "⚡ Attention Security",
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
      title: "🤖 AI & Data Awareness",
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
      title: "🧠 Cognitive Self-Training",
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
      title: "🚩 Red Flags of Mind Infiltration",
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
          description: "A free, no-sign-up tool that analyzes text—identifying AI-generated, AI-refined, and human-written segments, even offering paragraph-level feedback. Multilingual support included."
        },
        {
          name: "QuillBot AI Detector",
          description: "Free and useful for checking whether text was generated or refined by AI platforms like ChatGPT, Gemini, or Claude. Provides detailed feedback on specific sentences."
        },
        {
          name: "GPTZero",
          description: "Offers an AI 'score' and sentence-level breakdown. Developed to detect AI-generated writing using metrics like perplexity and burstiness. Caution: it has a non-negligible false-positive rate."
        },
        {
          name: "Grammarly AI Detector",
          description: "Built into the familiar Grammarly ecosystem. Provides a simple percentage indicating how AI-generated your text may be."
        },
        {
          name: "ZeroGPT",
          description: "Freemium model, integrated with messaging apps via bot (WhatsApp/Telegram) for quick checks. Decent accuracy, but may struggle with newer AI models like ChatGPT."
        },
        {
          name: "Copyleaks",
          description: "Enterprise-grade AI text detector with claims of >99% accuracy across 30 languages and minimal false positives. Great for academic and professional use."
        },
        {
          name: "Winston AI",
          description: "According to a tester's review, this tool offers extremely high accuracy—claimed at 99.98%. Requires sign-up."
        }
      ]
    },
    {
      category: "Image, Video & Deepfake Detection Tools",
      tools: [
        {
          name: "Reality Defender",
          description: "An enterprise- and government-focused deepfake detection API that works in real time. Offers a starter tier with 50 free scans/month."
        },
        {
          name: "Vastav AI",
          description: "A cloud-based platform (released March 2025) from an Indian cybersecurity firm. Detects AI-generated or manipulated videos, images, and audio, providing heatmaps, confidence scores, and forensic metadata. Free for law enforcement; subscription model coming for enterprises."
        },
        {
          name: "DeepFake-O-Meter v2.0",
          description: "An open-source online platform (April 2024) supporting detection of deepfake images, video, and audio. Great for both everyday users and researchers."
        },
        {
          name: "Sightengine",
          description: "Offers automatic detection for deepfake images and videos (face swap detection) and also identifies AI-generated images at scale."
        },
        {
          name: "Deepware Scanner",
          description: "Lets you upload videos for deepfake detection. Offers enterprise / on-premise options."
        }
      ]
    },
    {
      category: "Mixed Media & General Tools",
      tools: [
        {
          name: "Hive API",
          description: "Offers tools for detecting deepfakes, AI-generated artwork, and text. Provides a text classifier with favorable performance compared to some alternatives."
        },
        {
          name: "AIDetection.info",
          description: "A heuristic-based, educator-focused JavaScript tool that scans for syntactic patterns common in AI-generated text. It flags possible AI artifacts and offers downloadable reports."
        },
        {
          name: "Northwestern's DetectFakes Experiment",
          description: "A research-driven tool that tests human ability to discern AI-generated from real images—great for awareness and training."
        }
      ]
    },
    {
      category: "Debunking & Investigation Resources",
      tools: [
        {
          name: "Google Lens",
          description: "Reverse-image search to trace origins and detect manipulations."
        },
        {
          name: "Wayback Machine",
          description: "Compare archived web pages to verify changes or spot edits that may suggest manipulated content."
        },
        {
          name: "Perplexity AI & ChatGPT",
          description: "Useful for context-based fact-checking and debunking viral hoaxes or AI-fabricated claims."
        },
        {
          name: "SynthID Detector (by Google)",
          description: "A newly announced (May 2025) platform to detect AI-generated content created using Google tools, with watermark tracing features. Not yet widely available."
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
      <h2>🔧 Useful Detection Tools & Resources</h2>
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
        <h2>🛡️ Core Defense Strategies</h2>
        <div className="strategies-grid">
          {[...cognitiveThreats, ...defensiveMindset, ...attentionSecurity, ...aiAwareness, ...cognitiveSelfTraining, ...redFlags].map(renderDefenseSection)}
        </div>
      </div>

      {/* Detection Tools Section */}
      {renderDetectionTools()}

      {/* Original Articles */}
      <div className="articles-container">
        <div className="articles-header">
          <h2>📚 In-Depth Articles</h2>
          <p>Comprehensive reading for advanced cognitive security understanding</p>
        </div>
        
        <div className="articles-grid">
          {articles.map(article => (
            <div key={article.id} className="article-card glass-card">
              <div className="article-header">
                <h3>{article.title}</h3>
                <div className="article-meta">
                  <span className="category">{article.category}</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
              </div>
              
              <div className="article-summary">
                {article.summary}
              </div>
              
              <div className="article-content">
                {article.content}
              </div>
              
              <div className="article-footer">
                <div className="security-rating">
                  Security Level: <span className="rating-high">ESSENTIAL</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeSection;