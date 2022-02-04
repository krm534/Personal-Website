import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

function Navbar() {
  const hamburgerContainer = useRef(0);
  const mobileNavbarContainer = useRef(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const expandMobileDialogBox = (expand) => {
    if (expand) {
      setIsDialogOpen(true);
    } else {
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-hamburger-button-container" ref={hamburgerContainer} style={{ display: isDialogOpen === true && width < 600 ? 'none' : 'block' }}>
        <i className="fa fa-bars" aria-hidden="true" onClick={() => expandMobileDialogBox(true)} />
      </div>
      <div className="navbar-content-container" ref={mobileNavbarContainer} style={{ display: isDialogOpen === true && width < 600 ? 'block' : 'none' }}>
        <div className="navbar-exit-button-container">
          <i className="fa fa-close" aria-hidden="true" onClick={() => expandMobileDialogBox(false)} />
        </div>
        <ul className="navbar-list">
          <Link activeClass="active" className="navbar-link" to="home" spy smooth>
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
    </div>
  );
}

export default Navbar;
