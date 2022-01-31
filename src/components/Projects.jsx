import { useState } from "react";
import "../styles/Projects.css";
import { projects } from "../utils/Constants";
import ProjectsDetail from "./ProjectsDetail";

const Projects = () => {
  const [projectDetail, setProjectDetail] = useState(0);
  const [projectDetailShowing, setProjectDetailShowing] = useState(false);

  const handleClick = (projectId) => {
    document.body.style.overflowY = "hidden";
    setProjectDetail(projectId);
    setProjectDetailShowing(true);
  };

  const setProjectDetailsShowing = (state) => {
    if (!state) {
      document.body.style.overflowY = "scroll";
    }
    setProjectDetailShowing(state);
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
