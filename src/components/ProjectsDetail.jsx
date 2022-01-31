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
        <i class="fa fa-close" onClick={() => props.setShowing(false)}></i>
        <img src={projects[props.currentId].projectImage} />
        <h4>{projects[props.currentId].projectName}</h4>
        <p>{projects[props.currentId].projectDescription}</p>
        {projects[props.currentId].projectFinished ? (
          <span style={{ backgroundColor: "green" }}>Finished</span>
        ) : (
          <span style={{ backgroundColor: "red" }}>In Progress</span>
        )}
      </div>
    </div>
  );
};

export default ProjectsDetail;
