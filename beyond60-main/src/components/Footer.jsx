import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isWedding = location.pathname === '/weddings';

  return (
    <footer className={`global-footer ${isWedding ? 'footer-light' : ''}`}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Location</h4>
          <a href="https://maps.app.goo.gl/xA26CbUpQtvGsb4x7" target="_blank" rel="noopener noreferrer" className="footer-link">
            BEYOND 60 ( Creative ads & Weddings ), Calicut road, Priyadarshini nagar, Perumpilavu, Kerala 680519
          </a>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/beyond60_/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.youtube.com/@Beyond60films" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon></svg>
            </a>
            <a href="https://wa.me/918590012470" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M17.5 14.5c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.5c.2.2 2.4 3.7 5.9 5.2 3.5 1.5 3.5 1 4.2.9.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z"></path></svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <a href="tel:+918590012470" className="footer-link">+91 8590012470</a>
          <br />
          <a href="mailto:beyond60films@gmail.com" className="footer-link">beyond60films@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Beyond60 Media. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
