import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="nav-container">
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
    </div>
  );
};

export default Navbar;
