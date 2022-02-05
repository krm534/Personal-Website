import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Banner.css';

function Banner() {
  return (
    <div id="home" className="banner-container">
      <div className="background-wrapper">
        <div className="background-cover" />
        <div className="banner-details">
          <h1>Kaleb Meeks</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="scroll-button-container">
          <Link
            className="link"
            activeClass="active"
            to="about"
            spy
            smooth
          >
            <i className="fa fa-angle-down" aria-hidden="true" />
          </Link>
        </div>
        <img src="/images/background.jpg" alt="Corporate office space" />
      </div>
    </div>
  );
}

export default Banner;
