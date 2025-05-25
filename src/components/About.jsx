import React from 'react';
import '../styles/About.css';
import { ABOUT_ME_PARAGRAPH } from '../utils/Constants';

function About() {
  return (
    <div id="about" className="about-container">
      <h2>About</h2>
      <img src="/images/kaleb-meeks-portrait.JPG" alt="Kaleb Meeks's portrait" />
      <p>{ABOUT_ME_PARAGRAPH}</p>
      <div className="about-resume-container">
        <a href="/kaleb-meeks-resume.pdf" download>
          <p>Resume</p>
          <i className="fa fa-download" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default About;
