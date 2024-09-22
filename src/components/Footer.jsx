import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <h6>&copy; {new Date().getFullYear()} Kaleb Meeks</h6>
    </div>
  );
}

export default Footer;
