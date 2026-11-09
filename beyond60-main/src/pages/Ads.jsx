import React, { useState, useEffect, useRef } from 'react';
import './Ads.css';

const adsData = [
  {
    id: 1,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792554532/Asian_mp4.mp4', 
    tag: 'SONG SHOOT',
    cta: 'Discover',
    link: 'https://www.instagram.com/reel/DdzGW8_tZVL/?stkn=OWtoNHFleWoxYXlx',
    description: 'From concept to final cut, Beyond60 brought the entire project to life—handling every stage of production from start to finish'
  }
  ,
  {
    id: 2,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792554536/Jonita.mp4',
    tag: 'SONG SHOOT',
    cta: 'Discover',
    link: 'https://www.instagram.com/reel/DU3Fsvjkv3N/?stkn=Nmt2bjJnZGZ1YzVk',
    description: 'Beyond60 handled the complete shooting and editing for this project.'
  }
  ,
  {
    id: 3,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792128771/anchikonjathedi.mp4',
    tag: 'TECH INNOVATION',
    cta: 'Discover',
    link: 'https://youtu.be/v3bCi3ph_6g?si=xZHG6zNfzvpKDIGq',
    description: 'Beyond60 handled the complete video production from concept to final delivery, managing every stage of the project from start to finish.'
  }
  ,
  {
    id: 4,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792128778/nadikar.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reel/C6yslwdhKRG/?stkn=YjNzMjlscmRhb2hr',
    description: 'From concept to final cut, Beyond60 brought the entire project to life—handling every stage of production from start to finish.'
  }
  ,
  {
    id: 5,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792128773/akame.mp4', 
    tag: 'SONG SHOOT',
    cta: 'Discover',
    link: 'https://youtu.be/d8U5AFuehsA?si=PgMmU-M4VTXGipnw',
    description: 'Beyond60 handled the complete editing for this project'
  }
  ,
  {
    id: 6,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792128771/big_dawgs.mp4',
    tag: 'SONG SHOOT',
    cta: 'Discover',
    link: 'https://www.instagram.com/reel/DABSEnxB_ax/?stkn=OWU5c2U1cXA3aHo4',
    description: 'Beyond60 handled the complete video production from concept to final delivery, managing every stage of the project from start to finish.'
  }
  ,
  {
    id: 7,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792128770/thl.mp4',
    tag: 'TECH INNOVATION',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/DaqPtNWo-6c/',
    description: 'From concept to final cut, Beyond60 brought the entire project to life handling every stage of production from start to finish.'
  }
  ,
  {
    id: 8,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792554525/Million_dollar_pic_teaser.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/C84pQS_S63p/',
    description: 'Beyond60 handled the teaser editing for this project.'
  }
  ,
  {
    id: 9,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792128775/milliondollarpic_song.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/DEC-ZfhyYLW/',
    description: 'Beyond60 handled the album editing for this project.'
  }
  ,
  {
    id: 10,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792128778/mobile_gallery.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/DY2nmcMhVPP/',
    description: 'Beyond60 handled the complete video production from concept to final delivery, managing every stage of the project from start to finish.'
  }
  ,
  {
    id: 11,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792554532/Mura.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/DO0vmI7kqns/',
    description: 'From concept to final cut, Beyond60 brought the entire project to life handling every stage of production from start to finish'
  }
  ,
  {
    id: 12,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792128779/royal_enfield.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reel/DZJ3UELx1Dn/?stkn=aGxiMmQ2ZWhvem43',
    description: 'Beyond60 handled the complete video production from concept to final delivery, managing every stage of the project from start to finish'
  }
  ,
  {
    id: 13,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792554548/Vego_1.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/DVYdmxXEzmR/',
    description: 'Beyond60 handled the complete editing for this project.'
  }
  ,
  {
    id: 14,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792554549/Vego_2.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/DVtFpwHE8L6/',
    description: 'Beyond60 handled the complete editing for this project.'
  }
  ,
  {
    id: 15,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792128783/malabar_gold.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/DXwQZNlyl70/',
    description: 'Beyond60 handled the complete shooting and editing for this project.'
  }
  ,
  {
    id: 16,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792554535/Holiday.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/DHqSqVbyT-L/',
    description: 'Beyond60 handled the complete shooting and editing for this project.'
  }
  ,
  {
    id: 17,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792129103/HIVE.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reel/DY2nmcMhVPP/?stkn=dzlic2g5NHNucWg3',
    description: 'From concept to final cut, Beyond60 brought the entire project to life handling every stage of production from start to finish.'
  }
  ,
  {
    id: 18,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792554550/Fruitbae.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/DVYglGECHje/',
    description: 'Beyond60 handled the complete editing for this project.'
  }
  ,
  {
    id: 19,
    type: 'video',
    src: 'https://res.cloudinary.com/rkuqh3mn/video/upload/w_720,f_auto,q_auto/v1792554530/ocha.mp4',
    tag: 'LIFESTYLE',
    cta: 'Discover',
    link: 'https://www.instagram.com/reels/C7WfHOkhGUt/',
    description: 'Beyond60 handled the complete shooting & editing.'
  }

];

const Ads = () => {
  const [activeAdId, setActiveAdId] = useState(null);
  
  // NEW: State to track how many ads are currently visible. 
  // It starts at 4, so 4 ads show on the initial load.
  const [visibleCount, setVisibleCount] = useState(4); 

  useEffect(() => {
    const handleOutsideClick = () => {
      setActiveAdId(null);
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleAd = (id, e) => {
    e.stopPropagation();
    setActiveAdId(activeAdId === id ? null : id);
  };

  const closeAd = (e) => {
    e.stopPropagation();
    setActiveAdId(null);
  };

  // NEW: Function to reveal more ads when the button is clicked
  const handleLoadMore = () => {
    // This adds 4 more ads to the grid every time they click. 
    // You can change the '4' to whatever number you prefer.
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section className="ads-showcase">
      <div className="ads-grid">
        {/* NEW: .slice(0, visibleCount) ensures we only map over the ads that should be visible */}
        {adsData.slice(0, visibleCount).map((ad) => {
          const isActive = activeAdId === ad.id;

          return (
            <div 
              key={ad.id} 
              className={`ad-card ${isActive ? 'is-active' : ''}`}
              onClick={isActive ? closeAd : undefined}
            >
              <div className="ad-media-wrapper">
                {ad.type === 'video' ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="metadata"
                    poster={ad.src.replace(/\.[^.]+$/, '.jpg')}
                    className="ad-media"
                  >
                    <source src={ad.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={ad.src} alt={ad.title} className="ad-media" />
                )}
                <div className="ad-overlay"></div>
              </div>


              <div className="ad-content-reveal">
                 <h2>{ad.title}</h2>
                 <p>{ad.description}</p>
              </div>

              {isActive ? (
                 <a 
                   href={ad.link} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="ad-cta-button pill is-active"
                   onClick={(e) => e.stopPropagation()} 
                 >
                   <span>Click here</span>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                   </svg>
                 </a>
              ) : (
                 <button 
                   className="ad-cta-button circle" 
                   onClick={(e) => toggleAd(ad.id, e)}
                 >
                   <span className="cta-text">{ad.cta}</span>
                 </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < adsData.length && (
        <div className="load-more-wrapper">
          <button 
            onClick={handleLoadMore} 
            className="load-more-btn"
            aria-label="Load more projects"
          >
            <span className="load-more-text">Explore More Work</span>
            <span className="load-more-counter">{visibleCount} / {adsData.length}</span>
            <span className="load-more-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Ads;