import '../styles/Experience.css';
import { experiences } from '../utils/Constants';
import { Link } from "react-router";

function Experience() {
  return (
    <div id="experience" className="experience-container">
      <h1>Experience</h1>
      <div className="experience-content-container">
        <div className="vertical" />
        {
          experiences.map((experience) => (
            <div className="experience-box" key={experience.experienceId}>
              <img src={experience.experienceLogo} alt={experience.experienceLogoAlt} />
              <h2>{experience.experienceName}</h2>
              <ul>
                <li>
                  <i className="fa fa-caret-right" />
                  {experience.experienceRole}
                </li>
                <li>
                  <i className="fa fa-caret-right" />
                  {experience.experienceStartDate}
                  {' '}
                  -
                  {' '}
                  {experience.experienceEndDate}
                </li>
              </ul>
              <Link to={`/experience/${experience.experienceId}`} state={{ currentId: experience.experienceId, isProject: false }}>
                <button type="button" className="experienceReadMoreButton">
                  READ MORE
                </button>
              </Link>
            </div>
          ))
        }
      </div>
    </div >
  );
}

export default Experience;
