import React, { useRef, useState } from 'react';
import './Showcase.css';

const showcaseData = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792572474/nadikar.jpg',
    video: 'https://res.cloudinary.com/rkuqh3mn/video/upload/f_auto,q_auto/v1792128778/nadikar.mp4',
    tag: 'BRAND CAMPAIGN',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792572473/mdp_song.jpg',
    video: 'https://res.cloudinary.com/rkuqh3mn/video/upload/f_auto,q_auto/v1792128775/milliondollarpic_song.mp4',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792572473/HIVE.jpg',
    video: 'https://res.cloudinary.com/rkuqh3mn/video/upload/f_auto,q_auto/v1792129103/HIVE.mp4',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792572472/MB.jpg',
    video: 'https://res.cloudinary.com/rkuqh3mn/video/upload/f_auto,q_auto/v1792128778/mobile_gallery.mp4',
  }
];

const ShowcaseCard = ({ item, index }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log("Video play error:", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log("Video play error:", e));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div 
      className={`showcase-card ${index % 2 !== 0 ? 'staggered-down' : ''} ${isPlaying ? 'is-playing' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="showcase-media-wrapper">
        <img src={item.image} alt={item.title} className="showcase-media showcase-image" />
        {item.video && (
          <video 
            ref={videoRef}
            src={item.video} 
            loop 
            muted 
            playsInline 
            className="showcase-media showcase-video" 
          />
        )}
        <div className="showcase-overlay"></div>
      </div>

    </div>
  );
};

export const Showcase = () => {
  return (
    <section className="showcase-section">
      <div className="showcase-grid">
        {showcaseData.map((item, index) => (
          <ShowcaseCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};
