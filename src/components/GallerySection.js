import React, { useState } from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    { id: 1, title: "AI World", type: "intelligence", status: "classified", image: "/gallery/ai-world.png" },
    { id: 2, title: "AI Threat Vector", type: "analysis", status: "warning", image: "/gallery/ai-threat-vector.png" },
    { id: 3, title: "Matrix Malware", type: "malware", status: "critical", image: "/gallery/matrix-malware.png" },
    { id: 4, title: "Cognitive Virus", type: "virus", status: "warning", image: "/gallery/cognitive-virus.png" },
    { id: 5, title: "Brain Structure", type: "anatomy", status: "secured", image: "/gallery/brain-structure.png" },
    { id: 6, title: "AI Threat Analyser", type: "scanner", status: "active", image: "/gallery/ai-threat-analyser.png" },
    { id: 7, title: "Brain Collector", type: "harvester", status: "collecting", image: "/gallery/brain-collector.png" },
    { id: 8, title: "AI Watchers", type: "surveillance", status: "monitoring", image: "/gallery/ai-watchers.png" },
    { id: 9, title: "Mind Workers", type: "processing", status: "operational", image: "/gallery/mind-workers.png" },
    { id: 10, title: "Robotic Manufacture", type: "production", status: "active", image: "/gallery/robotic-manufacture.png" },
    { id: 11, title: "AI Quantum", type: "quantum", status: "experimental", image: "/gallery/ai-quantum.png" },
    { id: 12, title: "The Invasion", type: "infiltration", status: "critical", image: "/gallery/the-invasion.png" },
    { id: 13, title: "Neural Defense", type: "protection", status: "fortified", image: "/gallery/neural-defense.png" }
  ];

  const getStatusColor = (status) => {
    const colors = {
      classified: '#00ff41',
      warning: '#ffff00',
      critical: '#ff0041',
      secured: '#00ff41',
      active: '#00ff41',
      monitoring: '#ffff00',
      collecting: '#ff9900',
      operational: '#00ff41',
      experimental: '#9900ff',
      fortified: '#00ff41'
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
