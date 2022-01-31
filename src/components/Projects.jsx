import { useState } from "react";
import "../styles/Projects.css";
import { projects } from "../utils/Constants";
import ProjectsDetail from "./ProjectsDetail";

const Projects = () => {
  const [projectDetail, setProjectDetail] = useState(0);
  const [projectDetailShowing, setProjecDetailShowing] = useState(false);

  const handleClick = (projectId) => {
    setProjectDetail(projectId);
    setProjecDetailShowing(true);
  };

  const setProjectDetailsShowing = (state) => {
    setProjecDetailShowing(state);
  };

  return (
    <div id="projects" className="projects-container">
      <h3>Projects</h3>
      {projects.map((project) => {
        return (
          <div className="project-box">
            <img src={project.projectImage} alt={project.projectImageAlt} />
            <h3>{project.projectName}</h3>
            {project.projectFinished ? (
              <span style={{ backgroundColor: "green" }}>Finished</span>
            ) : (
              <span style={{ backgroundColor: "red" }}>In Progress</span>
            )}
            <button onClick={() => handleClick(project.projectId)}>
              READ MORE
            </button>
          </div>
        );
      })}
      {projectDetailShowing && (
        <ProjectsDetail
          currentId={projectDetail}
          setShowing={setProjectDetailsShowing}
        />
      )}
    </div>
  );
};

export default Projects;
