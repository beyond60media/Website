import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypographicBlock } from './TypographicBlock';
import './ServicesMarquee.css';

const services = [
  { lines: [{ text: "WEDDING", fontFamily: '"Austerlane", "Playfair Display", serif', fontWeight: 'normal' }], scale: 1.5, link: '/services' },
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

// Duplicate the array to create a seamless looping effect
const displayServices = [...services, ...services];

const ServicesMarquee = () => {
  return (
    <div className="marquee-section">
      <h2 className="marquee-heading">Our Services</h2>
      <div className="marquee-container">
        <div className="marquee-track">
          {displayServices.map((service, index) => (
            <Link to={service.link} key={index} className="marquee-card typographic-card">
              <TypographicBlock serviceLines={service.lines} scale={service.scale} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMarquee;
