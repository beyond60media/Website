import { useEffect } from 'react';
import './Weddings.css';

const Weddings = () => {
  useEffect(() => {
    document.body.classList.add('wedding-theme-light');
    return () => {
      document.body.classList.remove('wedding-theme-light');
    };
  }, []);

  return (
    <div className="view-container">
      <section className="weddings-header">
        <h1>Eternal Moments</h1>
      </section>
      
      <section className="masonry-grid">
        <div className="wedding-card">
          <div className="wedding-photo-wrapper">
            <img src="/images/wedding_1.png" alt="San Francisco" className="wedding-photo" />
          </div>
          <div className="wedding-info">
            <span className="wedding-tag">WEDDING</span>
            <h3 className="wedding-caption">A Candid Love Story Across San Francisco | Ann & Sanjo</h3>
          </div>
        </div>

        <div className="wedding-card">
          <div className="wedding-photo-wrapper">
            <img src="/images/wedding_2.png" alt="Ragini and Abhinav" className="wedding-photo" />
          </div>
          <div className="wedding-info">
            <span className="wedding-tag">WEDDING</span>
            <h3 className="wedding-caption">A Decade, A Distance, A Destiny:<br/>The Story Of Ragini & Abhinav</h3>
          </div>
        </div>

        <div className="wedding-card">
          <div className="wedding-photo-wrapper">
            <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              [More Wedding Media]
            </div>
          </div>
          <div className="wedding-info">
            <span className="wedding-tag">WEDDING</span>
            <h3 className="wedding-caption">Under Jaipur's Arches, A Love Revealed | Dipika & Jay | Jaipur</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
