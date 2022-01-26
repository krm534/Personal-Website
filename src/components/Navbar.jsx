import React, { useEffect, useRef, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-scroll";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const container = useRef(0);
  const hamburger = useRef(0);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isHamburgerShowing, setHamburgerShowing] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setHamburgerShowing(false);
    } else {
      if (!isHamburgerShowing) {
        setHamburgerShowing(true);
      }
    }
  }, [isHamburgerShowing]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;

    if (position >= innerHeight && innerWidth >= 600) {
      container.current.style.backgroundColor = "#303030";
    } else {
      container.current.style.backgroundColor = "transparent";
    }
  };

  const handleResize = () => {
    handleScroll();

    if (window.innerWidth > 600) {
      setHamburgerShowing(false);
      setMobileOpen(false);
    } else {
      if (isMobileOpen) {
        setHamburgerShowing(false);
      } else {
        setHamburgerShowing(true);
      }
    }
  };

  const setMobileOpenValue = (isOpen) => {
    if (isOpen) {
      setHamburgerShowing(false);
    } else {
      setHamburgerShowing(true);
    }

    setMobileOpen(isOpen);
  };

  return (
    <div className="nav-container" ref={container}>
      <MobileNavbar
        mobile={isMobileOpen}
        mobileOpen={setMobileOpenValue}
        style={{ display: isMobileOpen ? "block" : "none" }}
      />
      <ul className="nav-list">
        <Link className="navbar-link" to="home" spy={true} smooth={true}>
          <li>Home</li>
        </Link>
        <Link className="navbar-link" to="about" spy={true} smooth={true}>
          <li>About</li>
        </Link>
        <Link className="navbar-link" to="projects" spy={true} smooth={true}>
          <li>Projects</li>
        </Link>
        <Link className="navbar-link" to="contact" spy={true} smooth={true}>
          <li>Contact</li>
        </Link>
      </ul>
      <div
        className="navbar-mobile-container"
        onClick={() => setMobileOpenValue(true)}
        ref={hamburger}
        style={{ display: isHamburgerShowing ? "flex" : "none" }}
      >
        <i class="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
