import Navbar from "./navbar";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <div className="background-wrapper">
        <div className="background-cover"></div>
        <div className="header-details">
          <h3>Kaleb Meeks</h3>
          <h6>Software Engineer</h6>
        </div>
        <div className="scroll-button-container">
          <i class="fa fa-angle-down"></i>
        </div>
        <img src="/images/background" />
      </div>
    </div>
  );
};

export default Header;
