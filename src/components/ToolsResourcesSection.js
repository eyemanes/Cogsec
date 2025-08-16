import React from 'react';
import './ToolsResourcesSection.css';

const ToolsResourcesSection = () => {
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
          name: "Facticity.AI",
          url: "https://facticity.ai/",
          description: "Real-time fact-checker; 92% accuracy"
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
        }
      ]
    }
  ];

  const renderToolsAndResources = () => (
    <div className="tools-resources-main">
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
                <div className="tool-header">
                  <h4 className="tool-name">{tool.name}</h4>
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="visit-site-btn"
                  >
                    VISIT SITE
                  </a>
                </div>
                <p className="tool-description">{tool.description}</p>
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
          Professional tools for detecting AI manipulation and verifying content
        </p>
      </div>

      {/* Detection Tools Section */}
      {renderToolsAndResources()}
    </div>
  );
};

export default ToolsResourcesSection;