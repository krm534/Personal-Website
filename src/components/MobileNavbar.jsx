import React, { useState } from 'react';
import { Link } from 'react-scroll';

function MobileNavbar() {
  const [dialogBoxShowing, setDialogBoxShowing] = useState(false);

  return (
    <div className="mobile-navbar-container">
      <div className="navbar-hamburger-button-container" style={{ display: dialogBoxShowing ? 'none' : 'block' }}>
        <i className="fa fa-bars" aria-hidden="true" onClick={() => setDialogBoxShowing(true)} role="button" />
      </div>
      <div className="mobile-navbar-content-container" style={{ display: dialogBoxShowing ? 'block' : 'none' }}>
        <div className="navbar-exit-button-container">
          <i className="fa fa-close" aria-hidden="true" onClick={() => setDialogBoxShowing(false)} />
        </div>
        <ul className="mobile-navbar-list">
          <Link activeClass="active" className="mobile-navbar-link" to="home" spy smooth>
            <li>Home</li>
          </Link>
          <Link className="mobile-navbar-link" to="about" spy smooth>
            <li>About</li>
          </Link>
          <Link className="mobile-navbar-link" to="projects" spy smooth>
            <li>Projects</li>
          </Link>
          <Link className="mobile-navbar-link" to="contact" spy smooth>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavbar;
