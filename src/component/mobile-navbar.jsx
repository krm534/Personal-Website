import "../styles/MobileNavbar.css";
import { Link } from "react-scroll";
import { useRef } from "react";

const MobileNavbar = (props) => {
  const container = useRef(0);

  const exitMobileNavbar = () => {
    props.mobileOpen(false);
  };

  return (
    <div
      className="mobile-nav-container"
      ref={container}
      style={{ display: props.mobile ? "block" : "none" }}
    >
      <div className="exit-container" onClick={exitMobileNavbar}>
        <i class="fa fa-close"></i>
      </div>
      <ul>
        <Link
          className="link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
        >
          <li>Home</li>
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
        >
          <li>About</li>
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
        >
          <li>Projects</li>
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNavbar;
