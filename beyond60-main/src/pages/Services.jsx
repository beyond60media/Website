import React from 'react';
import { Link } from 'react-router-dom';
import { TypographicBlock } from '../components/TypographicBlock';
import './Services.css';

// Using the exact services array to match the sketch
const servicesList = [
  { lines: [{ text: "WEDDINGS", fontFamily: '"Austerlane", "Playfair Display", serif', fontWeight: 'normal' }], scale: 1.5, link: '/services' },
  { lines: [{ text: "AUTOMOTIVE" }, { text: "SHOOTS" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "ARTIST" }, { text: "PORTRAITS" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "BACKSTAGE" }, { text: "COVERAGE" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "CAFES &" }, { text: "COFFEE SHOPS" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "CONCERT" }, { text: "PHOTOGRAPHY/VIDEOGRAPHY" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "HOTELS &" }, { text: "RESORTS" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "LIFESTYLE" }, { text: "SHOOTS" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "MODEL" }, { text: "PORTFOLIO SHOOTS" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "PERSONAL" }, { text: "BRANDING SHOOTS" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "PROMOTIONAL" }, { text: "CONTENT" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "PROMOTIONAL" }, { text: "REELS" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "RESTAURANTS &" }, { text: "BARS" }], scale: 1.0, link: '/services' },
  { lines: [{ text: "SOCIAL MEDIA" }, { text: "CONTENT SHOOTS" }], scale: 1.0, link: '/services' },
];

const Services = () => {
  return (
    <div className="services-page">
      
      <div className="masonry-services-container">
        {servicesList.map((service, index) => (
          <Link to={service.link} key={index} className="masonry-card">
            <TypographicBlock 
              serviceLines={service.lines} 
              scale={service.scale} 
              heightClass="masonry-block-height"
            />
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Services;
