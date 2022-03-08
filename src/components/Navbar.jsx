import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';
import { GITHUB_LINK, LINKEDIN_LINK } from '../utils/Constants';

function Navbar() {
  const [dialogBoxShowing, setDialogBoxShowing] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-hamburger-button-container" style={{ display: dialogBoxShowing ? 'none' : 'block' }}>
        <i className="fa fa-bars" aria-hidden="true" onClick={() => setDialogBoxShowing(true)} role="button" />
      </div>
      <div className="navbar-content-container" style={{ display: dialogBoxShowing ? 'block' : 'none' }}>
        <div className="navbar-exit-button-container">
          <i className="fa fa-close" aria-hidden="true" onClick={() => setDialogBoxShowing(false)} />
        </div>
        <ul>
          <Link activeClass="active" className="navbar-link" to="home" spy smooth>
            <li>Home</li>
          </Link>
          <Link className="navbar-link" to="about" spy smooth>
            <li>About</li>
          </Link>
          <Link className="navbar-link" to="experience" spy smooth>
            <li>Experience</li>
          </Link>
          <Link className="navbar-link" to="projects" spy smooth>
            <li>Projects</li>
          </Link>
          <Link className="navbar-link" to="contact" spy smooth>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="navbar-contact-section">
          <hr />
          <div className="navbar-contact-image-container">
            <div>
              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/contact-images/linkedin-logo.png" alt="Linkedin company logo" />
              </a>
            </div>
            <div>
              <a
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/contact-images/github-logo.png" alt="Github company logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
