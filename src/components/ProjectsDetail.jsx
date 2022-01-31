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
        <img src={projects[props.currentId].projectImage} />
        <h4>{projects[props.currentId].projectName}</h4>
        <p>{projects[props.currentId].projectDescription}</p>
        {projects[props.currentId].projectTags.map((tag) => {
          return <span>{tag}</span>;
        })}
      </div>
    </div>
  );
};

export default ProjectsDetail;
