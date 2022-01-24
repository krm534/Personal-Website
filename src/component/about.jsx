import "../styles/About.css";
import { ABOUT_ME_PARAGRAPH } from "../utils/Constants";

const About = () => {
  return (
    <div className="about-container">
      <h3>About</h3>
      <img src="/images/avatar.jpeg" />
      <p>{ABOUT_ME_PARAGRAPH}</p>
    </div>
  );
};

export default About;
