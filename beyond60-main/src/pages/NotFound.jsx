import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="easyseller-404-container">
      <div className="easyseller-content">
        {/* Barcode 404 Display */}
        <div className="scannable-graphic">
          <div className="barcode-badge">404 // BARCODE</div>
          <div className="barcode-bars" aria-hidden="true">
            {Array.from({ length: 36 }).map((_, i) => (
              <span key={i} className={`bar bar-${(i % 5) + 1}`} />
            ))}
          </div>
          <h1 className="scannable-number">404</h1>
        </div>

        {/* Clean Typography */}
        <h2 className="easyseller-title">Page Not Found</h2>
        <p className="easyseller-subtitle">
          The requested page could not be located on the server.
        </p>

        {/* EasySeller Rounded Pill Button */}
        <Link to="/" className="easyseller-button">
          <span className="button-text">Back to Home</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
