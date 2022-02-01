import { projects } from "../utils/Constants";
import "../styles/ProjectsDetails.css";

const ProjectsDetail = (props) => {
  return (
    <div className="project-details-container">
      <div
        className="project-details-background"
        onClick={() => props.setShowing(false)}
      ></div>
      <div className="current-project">
        <div className="exit-button-container">
          <i class="fa fa-close" onClick={() => props.setShowing(false)}></i>
        </div>
        <img
          src={projects[props.currentId].projectImage}
          alt={projects[props.currentId].projectImageAlt}
        />
        <h4>{projects[props.currentId].projectName}</h4>
        <p>{projects[props.currentId].projectDescription}</p>
        <div className="project-tags-container">
          {projects[props.currentId].projectTags.map((tag) => {
            return <span>{tag}</span>;
          })}
        </div>
        <div className="project-link-container">
          <a
            href={projects[props.currentId].projectLink}
            target="_blank"
            rel="noreferrer"
          >
            Project Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
