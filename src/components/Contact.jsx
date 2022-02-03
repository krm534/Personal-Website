import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h3>Contact</h3>
      <div className="contact-row-container">
        <div className="email-container">
          <i className="fa fa-envelope" aria-hidden="true" />
          <p>krmeeks15@gmail.com</p>
        </div>
        <div className="linkedin-container">
          <img
            src="/images/contact-images/linkedin-logo.png"
            alt="Linkedin company logo"
          />
          <a
            href="https://www.linkedin.com/in/kaleb-meeks-060082188/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
