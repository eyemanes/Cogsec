import React from 'react';
import './ReportsSection.css';

const ReportsSection = () => {
  const reports = [
    // Original cases
    {
      id: 1,
      title: "AI Voice Cloning Scam - $15,000 Lost",
      category: "Voice Manipulation",
      location: "Florida, USA",
      amount: "$15,000",
      date: "2024",
      summary: "Florida mother scammed by AI-cloned daughter's voice in fake emergency call demanding bail money.",
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
      summary: "AI-powered search results directed user to fraudulent customer service number leading to credit card theft.",
      threatLevel: "MEDIUM",
      source: "https://www.washingtonpost.com/technology/2025/08/15/google-ai-overviews-scam/"
    },
    // New cases from the provided data
    {
      id: 3,
      title: "Deepfake Corporate Fraud - $25.6M Hong Kong Heist",
      category: "Deepfake Impersonation",
      location: "Hong Kong",
      amount: "$25.6M",
      date: "2025",
      summary: "Hong Kong company scammed for HK$200M via CFO impersonation using deepfake video calls.",
      threatLevel: "CRITICAL",
      source: "https://www.barrons.com/articles/swindlers-ai-724cda3c"
    },
    {
      id: 4,
      title: "Australia AI Fraud Wave - $94M Total Losses",
      category: "Multi-Vector AI Fraud",
      location: "Australia",
      amount: "$94M",
      date: "2025",
      summary: "Australia reports $53M consumer fraud and $41M corporate losses using AI-powered attack methods.",
      threatLevel: "CRITICAL",
      source: "https://www.adelaidenow.com.au/business/sa-business/the-new-hacking-nuclear-bomb-how-ai-is-stealing-your-money/news-story/5243862009412eac67a05742a04b8f39"
    },
    {
      id: 5,
      title: "Pig Butchering Crypto Scams - $4.1B in 2024",
      category: "AI-Enhanced Romance Fraud",
      location: "Global",
      amount: "$4.1B",
      date: "2024",
      summary: "AI-generated personas used in cryptocurrency investment scams, part of $12.4B total crypto fraud.",
      threatLevel: "CRITICAL",
      source: "https://en.wikipedia.org/wiki/Pig_butchering_scam"
    },
    {
      id: 6,
      title: "Corporate Deepfake Attacks - $450K Average Loss",
      category: "Business Email Compromise",
      location: "Global",
      amount: "$450K avg",
      date: "2025",
      summary: "Companies average $450K per deepfake attack, with fintech firms losing up to $630K per incident.",
      threatLevel: "HIGH",
      source: "https://www.cfo.com/news/most-companies-have-experienced-financial-loss-due-to-a-deepfake-regula-report/732094/"
    },
    {
      id: 7,
      title: "Romance Scams - $1.14B US Losses",
      category: "AI-Enhanced Romance Fraud",
      location: "United States",
      amount: "$1.14B",
      date: "2024",
      summary: "US consumers lost over $1 billion to AI-enhanced romance scams using deepfake profiles and voices.",
      threatLevel: "HIGH",
      source: "https://www.feedzai.com/blog/deepfake-fraud/"
    },
    {
      id: 8,
      title: "India Cyber Fraud Surge - $115M in 5 Months",
      category: "AI-Enabled Fraud",
      location: "India",
      amount: "$115M",
      date: "2025",
      summary: "₹938 crore lost from January to May 2025 to AI-enabled cybercriminals targeting individuals and businesses.",
      threatLevel: "HIGH",
      source: "https://timesofindia.indiatimes.com/city/bengaluru/rs-938-crore-lost-to-cybercrooks-since-jan/articleshow/122075324.cms"
    },
    {
      id: 9,
      title: "UK Fraud Epidemic - £1.1B Annual Losses",
      category: "AI-Boosted Fraud",
      location: "United Kingdom",
      amount: "£1.1B",
      date: "2024",
      summary: "UK reports £1.1 billion in fraud losses with AI significantly boosting scam sophistication and success rates.",
      threatLevel: "CRITICAL",
      source: "https://www.techradar.com/pro/smarter-than-the-scam-how-optimized-ai-is-reshaping-fraud-detection"
    },
    {
      id: 10,
      title: "Global Cyber Fraud - $16.6B Total",
      category: "Multi-Vector AI Fraud",
      location: "Global",
      amount: "$16.6B",
      date: "2024-2025",
      summary: "Global cyber fraud reaches $16.6B with deepfakes and AI impersonation identified as major growth drivers.",
      threatLevel: "CRITICAL",
      source: "https://www.jpmorgan.com/insights/fraud/fraud-protection/ai-scams-deep-fakes-impersonations-oh-my"
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

  const formatAmount = (amount) => {
    // Add some visual formatting to large amounts
    if (amount.includes('B')) {
      return amount.replace('B', ' BILLION');
    }
    if (amount.includes('M')) {
      return amount.replace('M', ' MILLION');
    }
    if (amount.includes('K')) {
      return amount.replace('K', ' THOUSAND');
    }
    return amount;
  };

  const getTotalStats = () => {
    const totalReports = reports.length;
    const criticalThreats = reports.filter(r => r.threatLevel === 'CRITICAL').length;
    const highThreats = reports.filter(r => r.threatLevel === 'HIGH').length;
    return { totalReports, criticalThreats, highThreats };
  };

  const stats = getTotalStats();

  return (
    <div className="section reports-section">
      <div className="section-header">
        <h1 className="section-title">THREAT REPORTS</h1>
        <p className="section-subtitle">
          Real-world AI manipulation cases and financial fraud incidents
        </p>
      </div>

      <div className="reports-intro glass-card">
        <h2>Global Threat Intelligence</h2>
        <p>
          Documented cases of AI-powered attacks causing significant financial losses worldwide. 
          These reports highlight current attack vectors and emerging threats in cognitive security.
        </p>
        <div className="briefing-stats">
          <div className="stat-item">
            <span className="stat-number">{stats.totalReports}</span>
            <span className="stat-label">Active Reports</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.criticalThreats}</span>
            <span className="stat-label">Critical Threats</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$20B+</span>
            <span className="stat-label">Documented Losses</span>
          </div>
        </div>
      </div>

      <div className="reports-grid">
        {reports.map((report) => (
          <div key={report.id} className="report-card glass-card">
            <div className="report-header">
              <div className="report-meta">
                <span className="report-category">{report.category}</span>
                <span 
                  className="threat-level"
                  style={{ color: getThreatColor(report.threatLevel) }}
                >
                  {report.threatLevel}
                </span>
              </div>
              <div className="report-amount">{formatAmount(report.amount)}</div>
            </div>
            
            <h3 className="report-title">{report.title}</h3>
            <p className="report-summary">{report.summary}</p>
            
            <div className="report-footer">
              <div className="report-location">{report.location}</div>
              <div className="report-date">{report.date}</div>
            </div>
            
            <div className="report-actions">
              <a 
                href={report.source} 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
                onClick={(e) => e.stopPropagation()}
              >
                READ FULL ARTICLE
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="reports-footer glass-card">
        <h3>Threat Level Classification</h3>
        <div className="threat-levels">
          <div className="threat-item">
            <span className="threat-indicator critical"></span>
            <div className="threat-info">
              <span className="threat-name">CRITICAL</span>
              <span className="threat-desc">Massive financial losses, sophisticated AI attacks</span>
            </div>
          </div>
          <div className="threat-item">
            <span className="threat-indicator high"></span>
            <div className="threat-info">
              <span className="threat-name">HIGH</span>
              <span className="threat-desc">Significant losses, advanced AI techniques</span>
            </div>
          </div>
          <div className="threat-item">
            <span className="threat-indicator medium"></span>
            <div className="threat-info">
              <span className="threat-name">MEDIUM</span>
              <span className="threat-desc">Moderate losses, emerging AI methods</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;