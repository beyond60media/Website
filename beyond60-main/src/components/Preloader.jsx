import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ 
  videoSrc = 'https://res.cloudinary.com/rkuqh3mn/video/upload/f_auto,q_auto/v1792556408/Background1.mp4', 
  onComplete 
}) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Organic progress simulation: increments by a random jump every 150ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = Math.floor(Math.random() * 15) + 1;
        const next = prev + jump;
        return next >= 100 ? 100 : next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // 1. Hold for exactly 500ms so the viewer sees the completed "100%"
      const holdTimer = setTimeout(() => {
        setIsFading(true); // Triggers cinematic scale & opacity dissolution

        // 2. Wait 600ms for the dissolution animation to finish before DOM unmount
        const unmountTimer = setTimeout(() => {
          setIsMounted(false);
          if (onComplete) onComplete();
        }, 600);

        return () => clearTimeout(unmountTimer);
      }, 500);

      return () => clearTimeout(holdTimer);
    }
  }, [progress, onComplete]);

  if (!isMounted) return null;

  return (
    <div 
      className={`preloader-overlay ${isFading ? 'preloader-fade-out' : ''}`}
      aria-live="polite"
      aria-busy={progress < 100}
    >
      <div className="preloader-content">
        {/* Editorial Studio Brand Header */}
        <div className="preloader-brand">
          <span className="brand-dot" aria-hidden="true"></span>
          <span className="brand-text">BEYOND60 STUDIO</span>
        </div>

        {/* 16:9 Cinematic Video Window */}
        <div className="preloader-video-wrapper">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="preloader-video"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="preloader-video-overlay" aria-hidden="true" />
        </div>

        {/* Status Line with Formatted Counter */}
        <div className="preloader-status-row">
          <span className="preloader-status-label">LOADING EXPERIENCE</span>
          <span className="preloader-counter">
            {String(progress).padStart(3, '0')}%
          </span>
        </div>

        {/* 2px Hairline Progress Bar */}
        <div className="preloader-bar-track">
          <div 
            className="preloader-bar-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
