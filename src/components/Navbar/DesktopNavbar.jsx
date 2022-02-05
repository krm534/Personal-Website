import React from 'react';
import { Link } from 'react-scroll';

function DesktopNavbar() {
  return (
    <div className="desktop-navbar-container">
      <ul className="desktop-navbar-list">
        <Link activeClass="active" className="desktop-navbar-link" to="home" spy smooth>
          <li>Home</li>
        </Link>
        <Link className="desktop-navbar-link" to="about" spy smooth>
          <li>About</li>
        </Link>
        <Link className="desktop-navbar-link" to="projects" spy smooth>
          <li>Projects</li>
        </Link>
        <Link className="desktop-navbar-link" to="contact" spy smooth>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default DesktopNavbar;
