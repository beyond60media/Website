import React, { useRef, useEffect, useState } from 'react';
import './ServicesMarquee.css';

export const TypographicBlock = ({ serviceLines, scale = 1.0, heightClass = "typographic-block-height" }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const [sizes, setSizes] = useState({ fontSizes: [], width: 'auto' });

  useEffect(() => {
    const resizeText = () => {
      if (containerRef.current && lineRefs.current.every(ref => ref !== null)) {
        
        lineRefs.current.forEach(ref => {
          if (ref) ref.style.fontSize = '10px';
        });

        const H = containerRef.current.clientHeight;

        let sumRatio = 0;
        const measurements = lineRefs.current.map(ref => {
          const w = ref.scrollWidth;
          const h = ref.offsetHeight;
          if (w > 0) sumRatio += (h / w);
          return { w, h };
        });

        if (sumRatio > 0 && H > 0) {
          const W_final = H / sumRatio; 
          
          const newFontSizes = measurements.map((m, i) => {
            const Si = W_final / m.w; 
            const newSize = 10 * Si * scale; 
            
            if (lineRefs.current[i]) {
              lineRefs.current[i].style.fontSize = `${newSize}px`;
            }
            return newSize;
          });

          setSizes({ fontSizes: newFontSizes, width: W_final * scale });
        }
      }
    };

    resizeText();
    window.addEventListener('resize', resizeText);
    const timeout = setTimeout(resizeText, 300);
    
    return () => {
      window.removeEventListener('resize', resizeText);
      clearTimeout(timeout);
    };
  }, [serviceLines, scale]);

  return (
    <div 
      ref={containerRef} 
      className={`typographic-block ${heightClass}`}
      style={{ width: sizes.width !== 'auto' ? `${sizes.width}px` : 'auto' }}
    >
      {serviceLines.map((line, i) => {
        const regex = line.highlightWord ? new RegExp(`([/&]|${line.highlightWord})`) : /([/&])/;
        const parts = line.text.split(regex);
        return (
          <div key={i} className="auto-fit-container">
            <span 
              ref={el => lineRefs.current[i] = el}
              className="auto-fit-text"
              style={{ 
                fontFamily: line.fontFamily || 'inherit',
                fontWeight: line.fontWeight || 'bold'
              }}
            >
              {parts.map((part, index) => (
                (part === '/' || part === '&' || part === line.highlightWord)
                  ? <span key={index} style={{ color: line.highlightColor || '#ff2a2a' }}>{part}</span> 
                  : part
              ))}
            </span>
          </div>
        );
      })}
    </div>
  );
};
