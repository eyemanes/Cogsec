import React, { useState } from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    { id: 1, title: "Neural Scan 001", type: "scan", status: "classified", image: "/gallery/1.png" },
    { id: 2, title: "Defense Matrix", type: "system", status: "active", image: "/gallery/2.png" },
    { id: 3, title: "AI Threat Vector", type: "analysis", status: "warning", image: "/gallery/3.png" },
    { id: 4, title: "Cognitive Shield", type: "protection", status: "online", image: "/gallery/5.png" },
    { id: 5, title: "Brain Firewall", type: "security", status: "deployed", image: "/gallery/6.png" },
    { id: 6, title: "Memory Protection", type: "backup", status: "secure", image: "/gallery/8.png" },
    { id: 7, title: "Thought Encryption", type: "cipher", status: "encrypted", image: "/gallery/9.png" },
    { id: 8, title: "Neural Antibody", type: "defense", status: "active", image: "/gallery/10.png" },
    { id: 9, title: "Mind Fortress", type: "barrier", status: "fortified", image: "/gallery/11.png" },
    { id: 10, title: "Synaptic Guard", type: "monitor", status: "watching", image: "/gallery/12.png" },
    { id: 11, title: "Consciousness Lock", type: "security", status: "locked", image: "/gallery/13.png" },
    { id: 12, title: "Mental Quarantine", type: "isolation", status: "contained", image: "/gallery/14.png" }
  ];

  const getStatusColor = (status) => {
    const colors = {
      classified: '#00ff41',
      active: '#00ff41',
      warning: '#ffff00',
      online: '#00ff41',
      deployed: '#00ff41',
      secure: '#00ff41',
      encrypted: '#00ff41',
      fortified: '#00ff41',
      watching: '#ffff00',
      locked: '#00ff41',
      contained: '#00ff41'
    };
    return colors[status] || '#00ff41';
  };

  return (
    <div className="section gallery-section">
      <h2 className="section-title">VISUAL ARCHIVES</h2>
      
      <div className="gallery-controls">
        <div className="control-panel glass-card">
          <span>ARCHIVE STATUS: OPERATIONAL</span>
          <span>ITEMS: {galleryItems.length}</span>
          <span>CLASSIFICATION: TOP SECRET</span>
        </div>
      </div>
      
      <div className="gallery-grid">
      {galleryItems.map((item) => (
      <div 
      key={item.id} 
      className="gallery-item"
      onClick={() => setSelectedItem(item)}
      >
      <img src={item.image} alt={item.title} className="gallery-image" />
      <div className="item-overlay">
      <div className="item-title">{item.title}</div>
      <div className="item-type">{item.type.toUpperCase()}</div>
      <div 
      className="item-status"
        style={{ color: getStatusColor(item.status) }}
      >
        ● {item.status.toUpperCase()}
        </div>
      </div>
      <div className="item-grid-pattern"></div>
        <div className="item-scan-line"></div>
        </div>
        ))}
        </div>
      
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedItem.title}</h3>
              <button 
                className="modal-close"
                onClick={() => setSelectedItem(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain' }}
              />
              <div className="modal-info">
                <div>Type: <span style={{ color: getStatusColor(selectedItem.status) }}>{selectedItem.type}</span></div>
                <div>Status: <span style={{ color: getStatusColor(selectedItem.status) }}>{selectedItem.status}</span></div>
                <div>Classification: TOP SECRET</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
