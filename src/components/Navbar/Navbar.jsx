import React, { useState, useEffect } from 'react';
import '../../styles/DesktopNavbar.css';
import '../../styles/MobileNavbar.css';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className="navbar-container">
      {width <= 600 ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
}

export default Navbar;
