import "../styles/About.css";
import { ABOUT_ME_PARAGRAPH } from "../utils/Constants";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h3>About</h3>
      <img src="/images/avatar.jpg" />
      <p>{ABOUT_ME_PARAGRAPH}</p>
    </div>
  );
};

export default About;
