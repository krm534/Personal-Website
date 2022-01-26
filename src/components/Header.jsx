import Navbar from "./Navbar";
import "../styles/Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-container">
      <Navbar />
      <div className="background-wrapper">
        <div className="background-cover"></div>
        <div className="header-details">
          <h3>Kaleb Meeks</h3>
          <h6>Software Engineer</h6>
        </div>
        <div className="scroll-button-container">
          <Link
            className="link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
          >
            <i class="fa fa-angle-down"></i>
          </Link>
        </div>
        <img src="/images/background.jpg" />
      </div>
    </div>
  );
};

export default Header;
