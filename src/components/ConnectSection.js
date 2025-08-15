import React, { useState, useEffect, useRef } from 'react';
import './ConnectSection.css';

const ConnectSection = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Agent_Zero",
      text: "New member orientation at 1400 hours. Bring your neural dampeners.",
      time: "14:32",
      type: "system"
    },
    {
      id: 2,
      user: "MindGuard",
      text: "Detected unusual AI activity in sector 7. All units maintain cognitive barriers.",
      time: "14:35",
      type: "warning"
    },
    {
      id: 3,
      user: "ThoughtShield",
      text: "Successfully repelled intrusion attempt. New defense patterns uploaded to mainframe.",
      time: "14:37",
      type: "success"
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [onlineUsers] = useState(42);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        id: messages.length + 1,
        user: "You",
        text: newMessage,
        time: getCurrentTime(),
        type: "user"
      };
      
      setMessages(prev => [...prev, message]);
      setNewMessage('');
      
      // Simulate typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        simulateResponse();
      }, 1000 + Math.random() * 2000);
    }
  };

  const simulateResponse = () => {
    const responses = [
      { user: "CogSec_AI", text: "Message received and encrypted. Awaiting neural confirmation.", type: "system" },
      { user: "Neural_Net", text: "Cognitive signature verified. Welcome to the resistance.", type: "success" },
      { user: "DefenseBot", text: "AI detection protocols active. Your thoughts are secure.", type: "info" },
      { user: "Firewall_7", text: "Neural firewall updated with your data patterns.", type: "system" },
      { user: "Guardian", text: "Transmission logged. Stay vigilant, agent.", type: "warning" },
      { user: "QuantumMind", text: "Threat level assessment complete. You're clear to proceed.", type: "success" },
      { user: "CipherCore", text: "Encrypting your neural pathways. Stand by...", type: "info" }
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const responseMessage = {
      id: messages.length + 2,
      user: randomResponse.user,
      text: randomResponse.text,
      time: getCurrentTime(),
      type: randomResponse.type
    };
    
    setMessages(prev => [...prev, responseMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const getMessageTypeColor = (type) => {
    const colors = {
      system: '#00ff41',
      warning: '#ffff00',
      success: '#00ff41',
      info: '#00aaff',
      user: '#ffffff',
      error: '#00ff41'
    };
    return colors[type] || '#00ff41';
  };

  return (
    <div className="section connect-section">
      <h2 className="section-title">SECURE COMMUNICATION CHANNEL</h2>
      
      <div className="chat-container">
        <div className="chat-header">
          <div className="header-info">
            <span className="channel-name">ENCRYPTED NEURAL NETWORK</span>
            <div className="status-indicators">
              <span className="online-count">ACTIVE USERS: {onlineUsers}</span>
              <span className="security-level">SECURITY: MAXIMUM</span>
              <span className="encryption-status">🔒 ENCRYPTED</span>
            </div>
          </div>
        </div>
        
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              <div className="message-header">
                <span 
                  className="message-user"
                  style={{ color: getMessageTypeColor(message.type) }}
                >
                  {message.user}
                </span>
                <span className="message-time">{message.time}</span>
              </div>
              <div className="message-text">{message.text}</div>
            </div>
          ))}
          
          {isTyping && (
            <div className="typing-indicator">
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>Agent is typing...</span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input-container">
          <div className="input-wrapper">
            <input
              type="text"
              className="chat-input"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter encrypted message..."
              maxLength={500}
            />
            <div className="input-encryption">🔐</div>
          </div>
          <button className="chat-send" onClick={sendMessage}>
            TRANSMIT
          </button>
        </div>
        
        <div className="chat-footer">
          <div className="connection-status">
            <span className="status-dot"></span>
            SECURE CONNECTION ESTABLISHED
          </div>
          <div className="protocol-info">
            Protocol: COGSEC-ALPHA | Encryption: AES-256-NEURAL
          </div>
        </div>
      </div>
      
      <div className="chat-info glass-card">
        <h3>Communication Guidelines</h3>
        <ul>
          <li>All messages are encrypted with neural-pattern algorithms</li>
          <li>Avoid discussing specific locations or personal identifiers</li>
          <li>Use code names and operational terminology only</li>
          <li>Report any suspicious activity to command immediately</li>
          <li>Message retention: 24 hours before auto-deletion</li>
        </ul>
      </div>
    </div>
  );
};

export default ConnectSection;
