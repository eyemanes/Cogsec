import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase/config';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import './LiveChatSection.css';

const LiveChatSection = () => {
  const [username, setUsername] = useState('');
  const [hasJoined, setHasJoined] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Listen to messages from Firestore
  useEffect(() => {
    if (hasJoined) {
      const q = query(
        collection(db, 'messages'),
        orderBy('timestamp', 'desc'),
        limit(100)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messagesArray = [];
        querySnapshot.forEach((doc) => {
          messagesArray.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setMessages(messagesArray.reverse());
      });

      return () => unsubscribe();
    }
  }, [hasJoined]);

  const handleJoinChat = (e) => {
    e.preventDefault();
    if (username.trim().length >= 2) {
      setHasJoined(true);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      setIsLoading(true);
      try {
        await addDoc(collection(db, 'messages'), {
          text: message.trim(),
          username: username,
          timestamp: serverTimestamp(),
          createdAt: new Date().toISOString()
        });
        setMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!hasJoined) {
    return (
      <div className="section live-chat-section">
        <div className="section-header">
          <h1 className="section-title">SECURE COMMUNICATIONS</h1>
          <p className="section-subtitle">
            Join the encrypted neural network channel
          </p>
        </div>

        <div className="join-chat-container">
          <div className="join-chat-card glass-card">
            <h2>Access Terminal</h2>
            <p className="join-description">
              Enter your designation to access the secure communication channel. 
              All transmissions are monitored for AI infiltration attempts.
            </p>
            
            <form onSubmit={handleJoinChat} className="join-form">
              <div className="input-group">
                <label htmlFor="username">Agent Designation:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your codename..."
                  minLength="2"
                  maxLength="20"
                  required
                  className="username-input"
                />
              </div>
              
              <button 
                type="submit" 
                className="join-btn"
                disabled={username.trim().length < 2}
              >
                ESTABLISH CONNECTION
              </button>
            </form>
            
            <div className="security-notice">
              <h4>Security Protocol</h4>
              <ul>
                <li>No authentication required for secure access</li>
                <li>All messages are encrypted and monitored</li>
                <li>Maintain operational security at all times</li>
                <li>Report suspicious neural activity immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section live-chat-section">
      <div className="section-header">
        <h1 className="section-title">LIVE COMMUNICATIONS</h1>
        <p className="section-subtitle">
          Secure Channel - Agent: {username}
        </p>
      </div>

      <div className="chat-container">
        <div className="chat-wrapper glass-card">
          <div className="chat-header">
            <div className="chat-status">
              <span className="status-indicator online"></span>
              <span className="status-text">NEURAL NETWORK ACTIVE</span>
            </div>
            <div className="chat-info">
              <span className="agent-count">{messages.length > 0 ? 'Communications Active' : 'Awaiting Transmission'}</span>
            </div>
          </div>

          <div className="messages-container">
            <div className="messages-list">
              {messages.length === 0 ? (
                <div className="no-messages">
                  <p>Secure channel established. Begin transmission...</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`message ${msg.username === username ? 'own-message' : 'other-message'}`}
                  >
                    <div className="message-header">
                      <span className="message-username">{msg.username}</span>
                      <span className="message-time">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                    <div className="message-text">{msg.text}</div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="message-form">
            <div className="input-container">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Transmit secure message..."
                maxLength="500"
                disabled={isLoading}
                className="message-input"
              />
              <button 
                type="submit" 
                disabled={!message.trim() || isLoading}
                className="send-btn"
              >
                {isLoading ? 'SENDING...' : 'TRANSMIT'}
              </button>
            </div>
          </form>
        </div>

        <div className="chat-sidebar">
          <div className="connection-info glass-card">
            <h3>Connection Status</h3>
            <div className="connection-details">
              <div className="detail-item">
                <span className="detail-label">Agent:</span>
                <span className="detail-value">{username}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Encryption:</span>
                <span className="detail-value">AES-256</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Protocol:</span>
                <span className="detail-value">COGSEC-SECURE</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status:</span>
                <span className="detail-value status-active">ACTIVE</span>
              </div>
            </div>
          </div>

          <div className="security-alerts glass-card">
            <h3>Security Alerts</h3>
            <div className="alert-item">
              <span className="alert-time">Now</span>
              <span className="alert-text">Neural firewall active</span>
            </div>
            <div className="alert-item">
              <span className="alert-time">Now</span>
              <span className="alert-text">AI detection protocols online</span>
            </div>
            <div className="alert-item">
              <span className="alert-time">Now</span>
              <span className="alert-text">Secure channel established</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatSection;