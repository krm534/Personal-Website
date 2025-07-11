import React from 'react';
import '../styles/About.css';
import { ABOUT_ME_PARAGRAPH, ABOUT_ME_RESUME_URL } from '../utils/Constants';

function About() {
  return (
    <div id="about" className="about-container">
      <h1>About</h1>
      <img src="/images/kaleb-meeks-portrait.JPG" alt="Kaleb Meeks's portrait" />
      <p>{ABOUT_ME_PARAGRAPH}</p>
      <div className="about-resume-container">
        <a href={ABOUT_ME_RESUME_URL} target="_blank" rel="noopener noreferrer">
          <p>Resume</p>
          <i className="fa fa-download" aria-hidden="true" />
        </a>
      </div>
    </div>

  );
}

export default About;
