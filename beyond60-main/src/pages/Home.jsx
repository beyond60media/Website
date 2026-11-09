import React from 'react';
import { Link } from 'react-router-dom';
import { Showcase } from '../components/Showcase';
import CountUp from '../components/CountUp';
import ServicesMarquee from '../components/ServicesMarquee';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* SECTION 1: HERO */}
      <section className="home-section hero-section">

        {/* Background Video 1 */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="https://res.cloudinary.com/rkuqh3mn/video/upload/f_auto,q_auto/v1792556408/Background1.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        {/* Main Content (Row 1) */}
        <main className="home-main">
          <div className="hero-text-container">
            <div className="hero-text-row top-row">
              <span className="word-where">WHERE</span>
              <span className="word-ideas">IDEAS</span>
            </div>

        <div className="red-pill-container">
          <Link to="/ads" className="pill-button">Ads</Link>
          <div className="pill-divider"></div>
          <Link to="/weddings" className="pill-button">Weddings</Link>
        </div>

            <div className="hero-text-row bottom-row">
              <span className="word-take">TAKE</span>
              <span className="word-flight">FLIGHT</span>
            </div>
          </div>
        </main>

        {/* Footer Moved to First Screen */}
        <footer className="home-footer absolute-footer">
          <div className="social-icons">
            <a href="https://www.instagram.com/beyond60_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/@Beyond60films" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
              </svg>
            </a>
          </div>
          <div className="social-handle">
            @beyond60media
          </div>
        </footer>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="home-section about-section">
        {/* Background Video 2 */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="https://res.cloudinary.com/rkuqh3mn/video/upload/f_auto,q_auto/v1792556405/Background2.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay dark-overlay"></div>

        <div className="about-content">
          <div className="about-title">
            <span className="crafting-text">Crafting moments at</span>
            <span className="beyond-text">Beyond60</span>
          </div>
          <div className="about-description">
            <p>At <strong>Beyond60</strong>, we go beyond capturing moments.we create experiences that last a lifetime. As a dynamic advertising and wedding company, we blend creativity with storytelling to transform your vision into something truly extraordinary. With an artist's eye and a storyteller's soul, we craft stunning visuals that capture every emotion from intimate glances to grand celebrations. Whether it's your wedding day or your brand story, we uncover the beauty in every detail and turn it into timeless memories.</p>
            <p className="bold-outro">At <strong>Beyond60</strong>, every frame is more than just an image, it's a story, a feeling, a memory that lives forever.</p>
          </div>
          
          <div className="about-logos">
             <img src="/secondary_logo.png" alt="Beyond60" className="about-logo secondary-logo" />
             <img src="/Logo%20LAND%20png%201.png" alt="Beyond60 Landscape" className="about-logo land-logo" />
          </div>
        </div>
      </section>

      {/* SECTION 3: STAGGERED SHOWCASE */}
      <Showcase />

      {/* SECTION 4: COUNTER & SERVICES */}
      <section className="home-section stats-services-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', padding: '40px 0' }}>
        
        <div className="stats-banner">
          <p className="stats-text">More than</p>
          <div className="stats-number">
             <CountUp value={45} duration={3} suffix="+" animationStyle="spring" />
          </div>
          <p className="stats-text">Clients</p>

          <div className="stats-divider"></div>

          <p className="stats-text">Project Delivered</p>
          <div className="stats-number">
            <CountUp value={120} duration={3} suffix="+" animationStyle="spring" />
          </div>
        </div>
        
        <ServicesMarquee />
      </section>

    </div>
  );
};

export default Home;
