import React, { useState } from 'react';
import './SecureYourMindSection.css';

const SecureYourMindSection = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);

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

  const quizQuestions = [
    {
      question: "How often do you fact-check information before sharing it online?",
      options: [
        "Always verify from multiple reliable sources",
        "Usually check at least one additional source", 
        "Sometimes verify if it seems suspicious",
        "Rarely check sources, trust the original poster"
      ],
      scores: [4, 3, 2, 1]
    },
    {
      question: "When you encounter emotionally charged content online, your first reaction is:",
      options: [
        "Take time to analyze why it triggered an emotional response",
        "Question the source and motivation behind the content",
        "Share it if it aligns with my beliefs",
        "React immediately based on my emotional response"
      ],
      scores: [4, 4, 2, 1]
    },
    {
      question: "How do you handle conflicting information about important topics?",
      options: [
        "Research multiple perspectives and evidence quality",
        "Stick with sources I trust and have used before",
        "Choose the information that feels most correct to me",
        "Go with the most popular or widely shared version"
      ],
      scores: [4, 2, 2, 1]
    },
    {
      question: "When making important decisions, you typically:",
      options: [
        "Sleep on it and revisit when emotions have settled",
        "Analyze pros/cons systematically before deciding",
        "Trust my gut feeling and act relatively quickly",
        "Make decisions based on immediate circumstances"
      ],
      scores: [4, 3, 2, 1]
    },
    {
      question: "How aware are you of your digital footprint and data collection?",
      options: [
        "Very aware - I actively manage privacy settings and data sharing",
        "Somewhat aware - I occasionally review and adjust settings",
        "Minimally aware - I know it exists but don't actively manage it",
        "Not aware - I don't think about digital privacy much"
      ],
      scores: [4, 3, 2, 1]
    },
    {
      question: "When encountering AI-generated content (chatbots, recommendations), you:",
      options: [
        "Always consider the AI's potential biases and limitations",
        "Use it as a starting point but verify important information",
        "Generally trust it unless something seems obviously wrong",
        "Accept it as accurate since it's from an advanced system"
      ],
      scores: [4, 3, 2, 1]
    },
    {
      question: "How do you respond to personalized ads and recommendations?",
      options: [
        "Recognize them as manipulation attempts and think critically",
        "Understand they're targeted but sometimes find them useful",
        "Occasionally wonder how they know so much about me",
        "Find them convenient and often follow their suggestions"
      ],
      scores: [4, 3, 2, 1]
    },
    {
      question: "When someone tries to urgently pressure you into a decision:",
      options: [
        "Automatically become more skeptical and slow down",
        "Ask for time to think and research the decision",
        "Feel stressed but try to make a good decision quickly",
        "Often go along to avoid conflict or missing out"
      ],
      scores: [4, 3, 2, 1]
    }
  ];

  const handleQuizAnswer = (answerIndex) => {
    const newAnswers = [...quizAnswers, {
      question: currentQuestion,
      answer: answerIndex,
      score: quizQuestions[currentQuestion].scores[answerIndex]
    }];
    
    setQuizAnswers(newAnswers);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateQuizResult(newAnswers);
    }
  };

  const calculateQuizResult = (answers) => {
    const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
    const maxScore = quizQuestions.length * 4;
    const percentage = (totalScore / maxScore) * 100;
    
    let level, description, recommendations;
    
    if (percentage >= 85) {
      level = "COGNITIVE FORTRESS";
      description = "Your mind is exceptionally well-protected against AI manipulation. You demonstrate strong critical thinking, emotional regulation, and digital awareness.";
      recommendations = [
        "Continue staying informed about emerging AI threats",
        "Share your knowledge to help others build mental defenses",
        "Consider participating in cognitive security research"
      ];
    } else if (percentage >= 70) {
      level = "SECURE MINDSET";
      description = "You have good mental defenses but there are areas for improvement. You're generally aware of manipulation tactics and think critically.";
      recommendations = [
        "Practice the 24-hour rule for important decisions",
        "Develop more rigorous fact-checking habits",
        "Learn about cognitive biases and how to counter them"
      ];
    } else if (percentage >= 55) {
      level = "VULNERABLE PATTERNS";
      description = "Your mind has some protective mechanisms but significant vulnerabilities exist. You may be susceptible to sophisticated AI manipulation.";
      recommendations = [
        "Start building daily critical thinking habits",
        "Learn to recognize emotional manipulation triggers",
        "Implement digital privacy and security measures",
        "Practice information verification techniques"
      ];
    } else {
      level = "HIGH RISK";
      description = "Your mental defenses need immediate strengthening. You may be highly susceptible to AI manipulation and social engineering attacks.";
      recommendations = [
        "Begin cognitive security training immediately",
        "Learn to pause before making decisions or sharing information",
        "Develop skepticism toward emotionally charged content",
        "Seek education on digital literacy and AI awareness"
      ];
    }
    
    setQuizResult({
      score: totalScore,
      maxScore,
      percentage: Math.round(percentage),
      level,
      description,
      recommendations
    });
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  const renderArticles = () => (
    <div className="articles-container">
      <div className="articles-header">
        <h2>🧠 COGNITIVE SECURITY KNOWLEDGE BASE</h2>
        <p>Essential reading for building mental defenses against AI manipulation</p>
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
  );

  const renderQuiz = () => {
    if (!quizStarted) {
      return (
        <div className="quiz-intro">
          <div className="quiz-header">
            <h2>🛡️ AI MIND SECURITY ASSESSMENT</h2>
            <p>Evaluate your mental defenses against AI manipulation and cognitive attacks</p>
          </div>
          
          <div className="quiz-description glass-card">
            <h3>What This Assessment Measures:</h3>
            <ul>
              <li>🔍 <strong>Critical Thinking Skills:</strong> Your ability to analyze information objectively</li>
              <li>🧠 <strong>Emotional Regulation:</strong> How well you control emotional responses to manipulative content</li>
              <li>🔐 <strong>Digital Awareness:</strong> Your understanding of AI systems and data collection</li>
              <li>⚡ <strong>Decision Making:</strong> Your resistance to pressure and hasty judgments</li>
              <li>🛡️ <strong>Information Verification:</strong> Your habits around fact-checking and source validation</li>
            </ul>
            
            <div className="quiz-warning">
              <strong>⚠️ Important:</strong> This assessment provides educational insights only. 
              Results should not be considered as medical or professional advice.
            </div>
            
            <button 
              className="start-quiz-btn"
              onClick={() => setQuizStarted(true)}
            >
              🚀 BEGIN ASSESSMENT
            </button>
          </div>
        </div>
      );
    }

    if (quizResult) {
      return (
        <div className="quiz-results">
          <div className="results-header">
            <h2>🎯 COGNITIVE SECURITY ANALYSIS</h2>
          </div>
          
          <div className="score-summary glass-card">
            <div className="score-display">
              <div className="score-number">{quizResult.score}/{quizResult.maxScore}</div>
              <div className="score-percentage">{quizResult.percentage}%</div>
            </div>
            
            <div className={`security-level level-${quizResult.level.toLowerCase().replace(/\s+/g, '-')}`}>
              {quizResult.level}
            </div>
            
            <div className="level-description">
              {quizResult.description}
            </div>
          </div>
          
          <div className="recommendations glass-card">
            <h3>🎯 RECOMMENDED ACTIONS:</h3>
            <ul>
              {quizResult.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
          
          <div className="quiz-actions">
            <button className="retake-btn" onClick={resetQuiz}>
              🔄 RETAKE ASSESSMENT
            </button>
            <button className="articles-btn" onClick={() => setActiveTab('articles')}>
              📚 READ SECURITY ARTICLES
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="quiz-active">
        <div className="quiz-progress">
          <div className="progress-info">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="question-card glass-card">
          <h3>{quizQuestions[currentQuestion].question}</h3>
          
          <div className="quiz-options">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="quiz-option"
                onClick={() => handleQuizAnswer(index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="section secure-mind-section">
      <div className="section-header">
        <h1 className="section-title">SECURE YOUR MIND</h1>
        <p className="section-subtitle">
          Advanced cognitive security training and assessment protocols
        </p>
      </div>
      
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'articles' ? 'active' : ''}`}
          onClick={() => setActiveTab('articles')}
        >
          📚 KNOWLEDGE BASE
        </button>
        <button 
          className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          🛡️ SECURITY ASSESSMENT
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'articles' ? renderArticles() : renderQuiz()}
      </div>
    </div>
  );
};

export default SecureYourMindSection;