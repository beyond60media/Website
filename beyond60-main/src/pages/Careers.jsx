import React from 'react';
import './Careers.css';
import joinTeamImg from '../assets/join-our-team.png';
import { TypographicBlock } from '../components/TypographicBlock';

const roles = [
  { icon: '🎬', title: 'Editors' },
  { icon: '📸', title: 'Photographers' },
  { icon: '🎥', title: 'Videographers' },
  { icon: '💡', title: 'Creative Minds' }
];

const Careers = () => {
  return (
    <div className="careers-page">
      
      <img 
        src={joinTeamImg} 
        alt="Join Our Team" 
        className="careers-hero-img" 
      />

      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6', width: '100%' }}>
        <p style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '1.5rem', letterSpacing: '0.1em' }}>We’re building something cool.</p>
        <p className="careers-headline-1">Wanna be part of it?</p>
        <p className="careers-headline-2">We’re not looking for people who just do the <span style={{ color: '#e31b23' }}>job.</span></p>
        <p className="careers-subtitle">We’re looking for people who create, experiment, obsess over details, and bring ideas to life.</p>
      </div>

      <div className="hollow-roles-container">
        {roles.map((role, index) => (
          <React.Fragment key={index}>
            <span className="hollow-role-item">{role.title}</span>
            {index < roles.length - 1 && <span className="hollow-role-slash">/</span>}
          </React.Fragment>
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '80px', textAlign: 'left' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <TypographicBlock 
            serviceLines={[
              { text: "NO BORING" },
              { text: "RÉSUMÉS.", highlightWord: 'RÉSUMÉS.', highlightColor: '#e31b23' }
            ]}
            scale={1.2}
            heightClass="masonry-block-height"
          />
        </div>
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <TypographicBlock 
            serviceLines={[
              { text: "SHOW US WHAT YOU CAN MAKE." }
            ]}
            scale={1.2}
            heightClass="show-us-block-height"
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '30px' }}>
          <span className="careers-portfolio-q1">Have a portfolio?</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
          <span className="careers-portfolio-q2">A showreel?</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
          <span className="careers-portfolio-q3">A bunch of work you’re proud of?</span>
        </div>
      </div>
      
      <div style={{ marginTop: '60px', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <p className="careers-footer-text">
          LET’S MAKE SOMETHING.
        </p>
        <a 
          href="mailto:beyond60films@gmail.com" 
          className="careers-footer-link"
        >
          JOIN BEYOND60 →
        </a>
      </div>
      
    </div>
  );
};

export default Careers;
