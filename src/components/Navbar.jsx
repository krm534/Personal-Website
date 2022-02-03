import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <Link className="navbar-link" to="home" spy smooth>
          <li>Home</li>
        </Link>
        <Link className="navbar-link" to="about" spy smooth>
          <li>About</li>
        </Link>
        <Link className="navbar-link" to="projects" spy smooth>
          <li>Projects</li>
        </Link>
        <Link className="navbar-link" to="contact" spy smooth>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
