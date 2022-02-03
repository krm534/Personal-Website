import React from 'react';
import { Link } from 'react-scroll';
import Navbar from './Navbar';
import '../styles/Header.css';

function Header() {
  return (
    <div id="home" className="header-container">
      <Navbar />
      <div className="background-wrapper">
        <div className="background-cover" />
        <div className="header-details">
          <h3>Kaleb Meeks</h3>
          <h6>Software Engineer</h6>
        </div>
        <div className="scroll-button-container">
          <Link
            className="link"
            activeClass="active"
            to="about"
            spy
            smooth
          >
            <i className="fa fa-angle-down" />
          </Link>
        </div>
        <img src="/images/background.jpg" alt="Corporate office space" />
      </div>
    </div>
  );
}

export default Header;
