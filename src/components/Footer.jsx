import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} Kaleb Meeks</p>
    </div>
  );
}

export default Footer;
