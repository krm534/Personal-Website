import "../styles/About.css";
import { ABOUT_ME_PARAGRAPH } from "../utils/Constants";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h3>About</h3>
      <img src="/images/avatar.jpg" alt="Avatar logo" />
      <p>{ABOUT_ME_PARAGRAPH}</p>
      <div className="about-resume-container">
        <a href="/kaleb-resume.pdf" download>
          <p>Resume</p>
          <i className="fa fa-download"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
