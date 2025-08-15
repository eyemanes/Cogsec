import React, { useEffect } from 'react';
import './MatrixBackground.css';

const MatrixBackground = () => {
  useEffect(() => {
    const createMatrixEffect = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const matrixContainer = document.querySelector('.matrix-container');
      
      const createColumn = () => {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * window.innerWidth + 'px';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        // Create multiple characters for the column
        for (let i = 0; i < 20; i++) {
          const char = document.createElement('span');
          char.textContent = chars[Math.floor(Math.random() * chars.length)];
          char.style.opacity = Math.max(0.1, 1 - (i * 0.05));
          char.style.color = Math.random() > 0.3 ? '#00ff41' : '#00aa2b';
          column.appendChild(char);
        }
        
        matrixContainer.appendChild(column);
        
        // Remove column after animation
        setTimeout(() => {
          if (column.parentNode) {
            column.parentNode.removeChild(column);
          }
        }, 5000);
      };
      
      // Create new columns periodically
      const interval = setInterval(createColumn, 150);
      
      return () => clearInterval(interval);
    };

    const cleanup = createMatrixEffect();
    
    return cleanup;
  }, []);

  return (
    <div className="matrix-background">
      <div className="matrix-container"></div>
      <div className="matrix-overlay"></div>
    </div>
  );
};

export default MatrixBackground;
