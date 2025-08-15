import React, { useState } from 'react';
import './MindQuizSection.css';

const MindQuizSection = ({ onNavigate }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);

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
    },
    {
      question: "How do you verify the authenticity of images or videos you see online?",
      options: [
        "Use reverse image search and check multiple sources",
        "Look for obvious signs of manipulation or editing",
        "Consider the source and context before believing",
        "Generally assume they're authentic unless proven otherwise"
      ],
      scores: [4, 3, 2, 1]
    },
    {
      question: "When consuming news or information online, you:",
      options: [
        "Actively seek diverse perspectives and primary sources",
        "Read from a few trusted sources I've carefully chosen",
        "Scan headlines and read articles that interest me",
        "Get most information from social media feeds"
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
    
    let level, description, recommendations, mindStrength;
    
    if (percentage >= 85) {
      level = "COGNITIVE FORTRESS";
      mindStrength = "IMPENETRABLE";
      description = "Your mind is exceptionally well-protected against AI manipulation. You demonstrate strong critical thinking, emotional regulation, and digital awareness. You're a natural guardian against cognitive attacks.";
      recommendations = [
        "Continue staying informed about emerging AI threats",
        "Share your knowledge to help others build mental defenses",
        "Consider participating in cognitive security research",
        "Mentor others in developing critical thinking skills"
      ];
    } else if (percentage >= 70) {
      level = "SECURE MINDSET";
      mindStrength = "WELL-DEFENDED";
      description = "You have good mental defenses but there are areas for improvement. You're generally aware of manipulation tactics and think critically about information you consume.";
      recommendations = [
        "Practice the 24-hour rule for important decisions",
        "Develop more rigorous fact-checking habits",
        "Learn about cognitive biases and how to counter them",
        "Strengthen your digital privacy practices"
      ];
    } else if (percentage >= 55) {
      level = "VULNERABLE PATTERNS";
      mindStrength = "PARTIALLY PROTECTED";
      description = "Your mind has some protective mechanisms but significant vulnerabilities exist. You may be susceptible to sophisticated AI manipulation techniques and targeted attacks.";
      recommendations = [
        "Start building daily critical thinking habits",
        "Learn to recognize emotional manipulation triggers",
        "Implement digital privacy and security measures",
        "Practice information verification techniques",
        "Develop awareness of your cognitive biases"
      ];
    } else {
      level = "HIGH RISK";
      mindStrength = "EXPOSED";
      description = "Your mental defenses need immediate strengthening. You may be highly susceptible to AI manipulation, social engineering attacks, and cognitive exploitation. Immediate action is recommended.";
      recommendations = [
        "Begin cognitive security training immediately",
        "Learn to pause before making decisions or sharing information",
        "Develop skepticism toward emotionally charged content",
        "Seek education on digital literacy and AI awareness",
        "Practice mindful information consumption",
        "Consider working with a digital literacy mentor"
      ];
    }
    
    setQuizResult({
      score: totalScore,
      maxScore,
      percentage: Math.round(percentage),
      level,
      mindStrength,
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

  if (!quizStarted) {
    return (
      <div className="section mind-quiz-section">
        <div className="section-header">
          <h1 className="section-title">MIND QUIZ</h1>
          <p className="section-subtitle">
            Cognitive Security Assessment & Mental Defense Evaluation
          </p>
        </div>

        <div className="quiz-intro">
          <div className="quiz-description glass-card">
            <h2>🧠 Evaluate Your Mental Defenses</h2>
            <p className="intro-text">
              In an age where AI systems can analyze your behavior patterns and exploit cognitive biases, 
              understanding your mental vulnerabilities is crucial for digital survival.
            </p>
            
            <div className="assessment-details">
              <h3>🎯 This Assessment Analyzes:</h3>
              <div className="assessment-grid">
                <div className="assessment-item">
                  <span className="icon">🔍</span>
                  <div>
                    <h4>Critical Thinking Skills</h4>
                    <p>Your ability to analyze information objectively and resist manipulation</p>
                  </div>
                </div>
                <div className="assessment-item">
                  <span className="icon">🧠</span>
                  <div>
                    <h4>Emotional Regulation</h4>
                    <p>How well you control emotional responses to manipulative content</p>
                  </div>
                </div>
                <div className="assessment-item">
                  <span className="icon">🔐</span>
                  <div>
                    <h4>Digital Awareness</h4>
                    <p>Your understanding of AI systems, data collection, and privacy</p>
                  </div>
                </div>
                <div className="assessment-item">
                  <span className="icon">⚡</span>
                  <div>
                    <h4>Decision Making</h4>
                    <p>Your resistance to pressure tactics and hasty judgments</p>
                  </div>
                </div>
                <div className="assessment-item">
                  <span className="icon">🛡️</span>
                  <div>
                    <h4>Information Verification</h4>
                    <p>Your habits around fact-checking and source validation</p>
                  </div>
                </div>
                <div className="assessment-item">
                  <span className="icon">🎭</span>
                  <div>
                    <h4>Media Literacy</h4>
                    <p>Your ability to identify deepfakes and synthetic content</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="quiz-warning">
              <h4>⚠️ Important Disclaimer</h4>
              <p>
                This assessment provides educational insights only and should not be considered 
                as medical, psychological, or professional security advice. Results are based on 
                self-reported responses and general cognitive security principles.
              </p>
            </div>
            
            <div className="quiz-stats">
              <div className="stat">
                <span className="stat-number">{quizQuestions.length}</span>
                <span className="stat-label">Questions</span>
              </div>
              <div className="stat">
                <span className="stat-number">5-7</span>
                <span className="stat-label">Minutes</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Defense Levels</span>
              </div>
            </div>
            
            <button 
              className="start-quiz-btn"
              onClick={() => setQuizStarted(true)}
            >
              🚀 BEGIN MIND ASSESSMENT
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizResult) {
    return (
      <div className="section mind-quiz-section">
        <div className="section-header">
          <h1 className="section-title">ASSESSMENT RESULTS</h1>
          <p className="section-subtitle">
            Your cognitive security profile and recommended actions
          </p>
        </div>

        <div className="quiz-results">
          <div className="score-summary glass-card">
            <div className="score-display">
              <div className="score-circle">
                <div className="score-number">{quizResult.percentage}%</div>
                <div className="score-fraction">{quizResult.score}/{quizResult.maxScore}</div>
              </div>
              
              <div className="result-info">
                <div className={`security-level level-${quizResult.level.toLowerCase().replace(/\s+/g, '-')}`}>
                  {quizResult.level}
                </div>
                
                <div className={`mind-strength strength-${quizResult.mindStrength.toLowerCase().replace(/\s+/g, '-')}`}>
                  Mind Status: {quizResult.mindStrength}
                </div>
              </div>
            </div>
            
            <div className="level-description">
              {quizResult.description}
            </div>
          </div>
          
          <div className="recommendations glass-card">
            <h3>🎯 Recommended Action Plan</h3>
            <div className="recommendations-list">
              {quizResult.recommendations.map((rec, index) => (
                <div key={index} className="recommendation-item">
                  <span className="rec-number">{index + 1}</span>
                  <span className="rec-text">{rec}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="quiz-actions">
            <button className="retake-btn" onClick={resetQuiz}>
              🔄 RETAKE ASSESSMENT
            </button>
            <button className="knowledge-btn" onClick={() => onNavigate && onNavigate('knowledge')}>
              📚 STUDY KNOWLEDGE BASE
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section mind-quiz-section">
      <div className="section-header">
        <h1 className="section-title">MIND QUIZ</h1>
        <p className="section-subtitle">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </p>
      </div>

      <div className="quiz-active">
        <div className="quiz-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete
          </div>
        </div>
        
        <div className="question-card glass-card">
          <h3 className="question-text">{quizQuestions[currentQuestion].question}</h3>
          
          <div className="quiz-options">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="quiz-option"
                onClick={() => handleQuizAnswer(index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindQuizSection;