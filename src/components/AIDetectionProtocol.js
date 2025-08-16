import React, { useState, useEffect, useRef } from 'react';
import './AIDetectionProtocol.css';

const AIDetectionProtocol = ({ onEnterSite }) => {
  const [currentPhase, setCurrentPhase] = useState('initialize');
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState({});
  const [finalScore, setFinalScore] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [mouseMovements, setMouseMovements] = useState([]);
  const [timerTest, setTimerTest] = useState({ counting: false, startTime: null });
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [cachedResult, setCachedResult] = useState(null);

  const phases = [
    'initialize',
    'visual-perception',
    'pattern-recognition', 
    'emotional-response',
    'creative-thinking',
    'temporal-reasoning',
    'analysis'
  ];

  // Check for cached results on component mount
  useEffect(() => {
    try {
      const cachedData = localStorage.getItem('cogsec_verification_result');
      const lastTestDate = localStorage.getItem('cogsec_last_test_date');
      
      if (cachedData && lastTestDate) {
        const daysSinceTest = (Date.now() - parseInt(lastTestDate)) / (1000 * 60 * 60 * 24);
        
        // Cache expires after 7 days for security
        if (daysSinceTest < 7) {
          const parsedResult = JSON.parse(cachedData);
          setIsReturningUser(true);
          setCachedResult(parsedResult);
          setCurrentPhase('cached-result');
          return;
        } else {
          // Clear expired cache
          localStorage.removeItem('cogsec_verification_result');
          localStorage.removeItem('cogsec_last_test_date');
        }
      }
    } catch (error) {
      console.warn('Error reading cache:', error);
      // Clear corrupted cache
      localStorage.removeItem('cogsec_verification_result');
      localStorage.removeItem('cogsec_last_test_date');
    }
  }, []);

  const testData = {
    'visual-perception': {
      title: "VISUAL PERCEPTION ANALYSIS",
      description: "Humans process visual information with inherent biases and perceptual shortcuts.",
      question: "Look at this classic optical illusion. What do you see first?",
      options: [
        "Two faces looking at each other",
        "A white vase or goblet", 
        "Abstract geometric shapes",
        "I see both images simultaneously"
      ],
      visualElement: "🏺👥" // Simple visual representation
    },
    'pattern-recognition': {
      title: "PATTERN RECOGNITION TEST",
      description: "AI excels at mathematical patterns but struggles with intuitive human pattern recognition.",
      question: "Complete this sequence: 🌙, ☀️, 🌙, ☀️, 🌙, ?",
      options: ["☀️", "🌙", "⭐", "🌍"],
      followUp: "This tests natural pattern completion vs. algorithmic thinking."
    },
    'emotional-response': {
      title: "EMOTIONAL CONTEXT PROCESSING",
      description: "Humans have natural emotional responses that AI finds difficult to simulate authentically.",
      question: "A child drops their ice cream on a hot summer day. Your immediate thought is:",
      options: [
        "Calculate the financial loss and replacement cost",
        "Feel sympathy for the child's disappointment", 
        "Consider the hygiene implications of dropped food",
        "Analyze the melting rate of ice cream at current temperature"
      ]
    },
    'creative-thinking': {
      title: "CREATIVE COGNITION ASSESSMENT", 
      description: "Human creativity involves spontaneous associations and non-linear thinking.",
      question: "If the color 'blue' were a person, what would their personality be like?",
      type: "text",
      placeholder: "Describe blue as if it were a person with feelings, habits, quirks, and a life story..."
    },
    'temporal-reasoning': {
      title: "TEMPORAL COGNITION ANALYSIS",
      description: "Humans experience time subjectively and make intuitive temporal judgments.",
      question: "Without using a timer, count to 10 seconds in your head, then click when you think 10 seconds have passed.",
      type: "timer"
    }
  };

  useEffect(() => {
    if (currentPhase === 'initialize') {
      const timer = setTimeout(() => {
        setCurrentPhase('visual-perception');
        setStartTime(Date.now());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPhase]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (currentPhase !== 'initialize' && currentPhase !== 'analysis') {
        setMouseMovements(prev => [...prev.slice(-100), { // Keep only last 100 movements
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
          phase: currentPhase
        }]);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [currentPhase]);

  const recordResponse = (answer, timeToRespond) => {
    setResponses(prev => ({
      ...prev,
      [currentPhase]: answer
    }));
    
    setTimeSpent(prev => ({
      ...prev,
      [currentPhase]: timeToRespond
    }));

    const nextPhaseIndex = phases.indexOf(currentPhase) + 1;
    if (nextPhaseIndex < phases.length - 1) {
      setCurrentPhase(phases[nextPhaseIndex]);
      setStartTime(Date.now());
    } else {
      analyzeResults();
    }
  };

  const analyzeResults = () => {
    setCurrentPhase('analysis');
    
    // Sophisticated analysis algorithm
    let humanityScore = 50; // Base score
    let indicators = [];

    // Visual perception analysis
    if (responses['visual-perception'] === "I see both images simultaneously") {
      humanityScore -= 25;
      indicators.push("Simultaneous perception reported");
    } else if (responses['visual-perception'] === "Two faces looking at each other" || 
               responses['visual-perception'] === "A white vase or goblet") {
      humanityScore += 20;
      indicators.push("Natural perceptual bias detected");
    }

    // Pattern recognition analysis
    if (responses['pattern-recognition'] === "☀️") {
      humanityScore += 15;
      indicators.push("Intuitive pattern completion");
    } else if (responses['pattern-recognition'] === "⭐" || responses['pattern-recognition'] === "🌍") {
      humanityScore -= 10;
      indicators.push("Unexpected pattern choice");
    }

    // Response time analysis
    Object.entries(timeSpent).forEach(([phase, time]) => {
      if (time < 1500) {
        humanityScore -= 15;
        indicators.push(`Fast response in ${phase} (${time}ms)`);
      } else if (time > 45000) {
        humanityScore -= 10;
        indicators.push(`Extended deliberation in ${phase}`);
      } else if (time > 3000 && time < 30000) {
        humanityScore += 8;
        indicators.push(`Natural response time in ${phase}`);
      }
    });

    // Emotional response analysis
    if (responses['emotional-response'] === "Feel sympathy for the child's disappointment") {
      humanityScore += 25;
      indicators.push("Empathetic response pattern");
    } else if (responses['emotional-response']?.includes("Calculate") || 
               responses['emotional-response']?.includes("Analyze")) {
      humanityScore -= 20;
      indicators.push("Analytical rather than emotional response");
    }

    // Creative response analysis
    const creativeResponse = responses['creative-thinking'];
    if (creativeResponse && creativeResponse.length > 30) {
      const hasMetaphors = /like|as if|reminds me|feels like|would be|seems like/i.test(creativeResponse);
      const hasEmotions = /calm|sad|peaceful|melancholy|serene|deep|quiet|gentle|wise|thoughtful/i.test(creativeResponse);
      const isDetailed = creativeResponse.split(' ').length > 15;
      
      if (hasMetaphors && hasEmotions && isDetailed) {
        humanityScore += 30;
        indicators.push("Rich metaphorical and emotional language");
      } else if (hasEmotions) {
        humanityScore += 15;
        indicators.push("Emotional language detected");
      } else if (creativeResponse.split(' ').length < 8) {
        humanityScore -= 15;
        indicators.push("Brief creative response");
      }
    } else if (creativeResponse && creativeResponse.length < 30) {
      humanityScore -= 10;
      indicators.push("Minimal creative elaboration");
    }

    // Temporal reasoning analysis
    const temporalResponse = responses['temporal-reasoning'];
    if (temporalResponse) {
      const timeMs = parseInt(temporalResponse.match(/(\d+)ms/)?.[1] || '0');
      const accuracy = Math.abs(timeMs - 10000);
      
      if (accuracy < 1000) {
        humanityScore -= 20;
        indicators.push("Highly accurate timing");
      } else if (accuracy > 1000 && accuracy < 3000) {
        humanityScore += 15;
        indicators.push("Natural timing variation");
      } else if (accuracy > 5000) {
        humanityScore += 5;
        indicators.push("Human-like timing imprecision");
      }
    }

    // Mouse movement analysis
    const movements = mouseMovements.length;
    if (movements < 20) {
      humanityScore -= 20;
      indicators.push("Minimal mouse movement detected");
    } else if (movements > 50) {
      humanityScore += 15;
      indicators.push("Natural interaction patterns");
    }

    // Calculate movement entropy (randomness)
    if (movements > 10) {
      const xVariance = mouseMovements.reduce((acc, m, i) => {
        if (i === 0) return 0;
        return acc + Math.abs(m.x - mouseMovements[i-1].x);
      }, 0) / movements;
      
      if (xVariance < 5) {
        humanityScore -= 15;
        indicators.push("Linear mouse movement");
      } else if (xVariance > 20) {
        humanityScore += 10;
        indicators.push("Natural mouse movement variation");
      }
    }

    // Final scoring with bounds
    humanityScore = Math.max(0, Math.min(100, humanityScore));
    
    let classification, threatLevel, accessStatus;
    
    if (humanityScore >= 80) {
      classification = "HUMAN VERIFIED";
      threatLevel = "MINIMAL";
      accessStatus = "GRANTED";
    } else if (humanityScore >= 60) {
      classification = "LIKELY HUMAN";
      threatLevel = "LOW";
      accessStatus = "GRANTED";
    } else if (humanityScore >= 40) {
      classification = "UNCERTAIN";
      threatLevel = "MODERATE";
      accessStatus = "CAUTION";
    } else if (humanityScore >= 20) {
      classification = "LIKELY AI";
      threatLevel = "HIGH";
      accessStatus = "RESTRICTED";
    } else {
      classification = "AI DETECTED";
      threatLevel = "CRITICAL";
      accessStatus = "DENIED";
    }
    
    const result = {
      score: humanityScore,
      classification,
      threatLevel,
      accessStatus,
      indicators,
      totalTests: Object.keys(responses).length,
      totalTime: Object.values(timeSpent).reduce((a, b) => a + b, 0),
      testDate: Date.now(),
      isFirstTime: true
    };
    
    // Save to cache
    try {
      localStorage.setItem('cogsec_verification_result', JSON.stringify(result));
      localStorage.setItem('cogsec_last_test_date', Date.now().toString());
    } catch (error) {
      console.warn('Could not save verification result to cache:', error);
    }
    
    setFinalScore(result);
  };

  const startTimer = () => {
    setTimerTest({ counting: true, startTime: Date.now() });
  };

  const stopTimer = () => {
    if (timerTest.startTime) {
      const elapsed = Date.now() - timerTest.startTime;
      const accuracy = Math.abs(elapsed - 10000);
      recordResponse(`${elapsed}ms (${accuracy}ms deviation)`, Date.now() - startTime);
      setTimerTest({ counting: false, startTime: null });
    }
  };

  const renderCachedResult = () => {
    if (!cachedResult) return null;

    const daysSinceTest = Math.floor((Date.now() - cachedResult.testDate) / (1000 * 60 * 60 * 24));
    const timeAgo = daysSinceTest === 0 ? 'today' : 
                   daysSinceTest === 1 ? '1 day ago' : 
                   `${daysSinceTest} days ago`;

    return (
      <div className="cached-results">
        <div className="returning-user-header">
          <h2>WELCOME BACK</h2>
          <div className="cache-info">
            <span className="last-test">Last verification: {timeAgo}</span>
            <span className="cache-expires">Cache expires in {7 - daysSinceTest} days</span>
          </div>
        </div>
        
        <div className="cached-score-display glass-card">
          <div className="verification-status">
            <div className="status-text">
              <div className={`classification class-${cachedResult.accessStatus.toLowerCase()}`}>
                {cachedResult.classification}
              </div>
              <div className="score-display">
                <span className={`score score-${cachedResult.accessStatus.toLowerCase()}`}>
                  {cachedResult.score}/100
                </span>
              </div>
            </div>
          </div>
          
          <div className="access-status-cached">
            {cachedResult.accessStatus === 'GRANTED' ? (
              <div className="access-granted">
                ACCESS GRANTED - Verification Complete
              </div>
            ) : cachedResult.accessStatus === 'CAUTION' ? (
              <div className="access-caution">
                PROCEED WITH CAUTION - Uncertain Verification
              </div>
            ) : cachedResult.accessStatus === 'RESTRICTED' ? (
              <div className="access-restricted">
                RESTRICTED ACCESS - Suspicious Patterns
              </div>
            ) : (
              <div className="access-denied">
                ACCESS DENIED - AI Detection
              </div>
            )}
          </div>
        </div>

        <div className="cache-actions">
          <button 
            className="continue-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentPhase('analysis');
            }}
          >
            VIEW DETAILS
          </button>
          
          <button 
            className="new-test-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Clear cache and restart test
              localStorage.removeItem('cogsec_verification_result');
              localStorage.removeItem('cogsec_last_test_date');
              setIsReturningUser(false);
              setCachedResult(null);
              setCurrentPhase('initialize');
              // Reset all state
              setResponses({});
              setTimeSpent({});
              setFinalScore(null);
              setMouseMovements([]);
            }}
          >
            NEW TEST
          </button>
          
          <button 
            className="go-to-website-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onEnterSite();
            }}
          >
            VIEW SITE
          </button>
        </div>
      </div>
    );
  };

  const renderTestPhase = () => {
    const test = testData[currentPhase];
    if (!test) return null;

    return (
      <div className="test-phase">
        <div className="test-header">
          <h3>{test.title}</h3>
          <p className="test-description">{test.description}</p>
          <div className="phase-indicator">
            Phase {phases.indexOf(currentPhase)} of {phases.length - 2}
          </div>
        </div>
        
        <div className="test-content">
          <div className="question">
            {test.question}
            {test.visualElement && (
              <div className="visual-element">{test.visualElement}</div>
            )}
          </div>
          
          {test.type === 'timer' ? (
            <div className="timer-test">
              <p className="timer-instructions">
                Click START, count to 10 seconds mentally, then click STOP
              </p>
              {!timerTest.counting ? (
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    startTimer();
                  }}
                  className="test-button start-button"
                >
                  START COUNTING
                </button>
              ) : (
                <div className="counting-phase">
                  <div className="counting-indicator">Counting...</div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      stopTimer();
                    }}
                    className="test-button stop-button"
                  >
                    STOP (10 seconds passed)
                  </button>
                </div>
              )}
            </div>
          ) : test.type === 'text' ? (
            <div className="text-input-test">
              <textarea
                placeholder={test.placeholder}
                className="creative-input"
                rows="5"
                id="creative-response"
              />
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const textarea = document.getElementById('creative-response');
                  if (textarea.value.trim()) {
                    recordResponse(textarea.value, Date.now() - startTime);
                  }
                }}
                className="submit-button"
              >
                SUBMIT RESPONSE
              </button>
            </div>
          ) : (
            <div className="options">
              {test.options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    recordResponse(option, Date.now() - startTime);
                  }}
                >
                  <span className="option-number">{String.fromCharCode(65 + index)}</span>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {test.followUp && (
          <div className="follow-up">
            <small>{test.followUp}</small>
          </div>
        )}
      </div>
    );
  };

  const renderResults = () => {
    // Use cached result if available and we're showing analysis
    const result = finalScore || cachedResult;
    if (!result) return null;

    return (
      <div className="results-display">
        <div className="scan-complete">
          <h2>ANALYSIS COMPLETE {isReturningUser ? '(CACHED)' : ''}</h2>
          
          <div className="score-display">
            <div className="humanity-score">
              <span className="label">SCORE:</span>
              <span className={`score score-${result.accessStatus.toLowerCase()}`}>
                {result.score}/100
              </span>
            </div>
            
            <div className="classification">
              <span className="label">STATUS:</span>
              <span className={`value class-${result.accessStatus.toLowerCase()}`}>
                {result.classification}
              </span>
            </div>
            
            <div className="threat-level">
              <span className="label">THREAT:</span>
              <span className={`value threat-${result.threatLevel.toLowerCase()}`}>
                {result.threatLevel}
              </span>
            </div>
          </div>

          {!isReturningUser && (
            <div className="test-stats">
              <div className="stat">
                <span>Tests:</span> {result.totalTests}
              </div>
              <div className="stat">
                <span>Time:</span> {(result.totalTime / 1000).toFixed(1)}s
              </div>
              <div className="stat">
                <span>Interactions:</span> {mouseMovements.length}
              </div>
            </div>
          )}
          
          <div className="analysis-details">
            <h4>ANALYSIS:</h4>
            <div className="indicators">
              {result.indicators.slice(0, 5).map((indicator, index) => (
                <div key={index} className="indicator">
                  {indicator}
                </div>
              ))}
            </div>
          </div>
          
          <div className="access-status">
            {result.accessStatus === 'GRANTED' ? (
              <div className="access-granted">
                ACCESS GRANTED
              </div>
            ) : result.accessStatus === 'CAUTION' ? (
              <div className="access-caution">
                PROCEED WITH CAUTION
              </div>
            ) : result.accessStatus === 'RESTRICTED' ? (
              <div className="access-restricted">
                ACCESS RESTRICTED
              </div>
            ) : (
              <div className="access-denied">
                ACCESS DENIED
              </div>
            )}
          </div>

          <div className="result-actions">
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Clear cache and restart test
                localStorage.removeItem('cogsec_verification_result');
                localStorage.removeItem('cogsec_last_test_date');
                setIsReturningUser(false);
                setCachedResult(null);
                setCurrentPhase('initialize');
                setResponses({});
                setTimeSpent({});
                setFinalScore(null);
                setMouseMovements([]);
              }}
              className="restart-button"
            >
              NEW TEST
            </button>

            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onEnterSite();
              }}
              className="enter-site-button"
            >
              VIEW SITE
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ai-detection-protocol">
      {currentPhase === 'initialize' ? (
        <div className="initializing">
          <div className="init-header">
            <h2>COGNITIVE SECURITY PROTOCOL</h2>
            <div className="version">v3.1.4 - Neural Pattern Analysis</div>
          </div>
          <div className="init-text">
            INITIALIZING VERIFICATION SEQUENCE...
          </div>
          <div className="sub-text">
            • Loading neural pattern analyzers...<br/>
            • Calibrating cognitive response systems...<br/>
            • Preparing behavioral assessment protocols...
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-text">Establishing connection...</div>
          </div>
        </div>
      ) : currentPhase === 'cached-result' ? (
        renderCachedResult()
      ) : currentPhase === 'analysis' ? (
        renderResults()
      ) : (
        renderTestPhase()
      )}
    </div>
  );
};

export default AIDetectionProtocol;