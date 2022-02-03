import React, { useState } from 'react';
import '../styles/Projects.css';
import { projects } from '../utils/Constants';
import ProjectDetails from './ProjectsDetail';

function Projects() {
  const [currentProjectId, setCurrentProjectId] = useState(0);
  const [projectDetailShowing, setProjectDetailShowing] = useState(false);

  const handleButtonClick = (projectId) => {
    document.body.style.overflowY = 'hidden';
    setCurrentProjectId(projectId);
    setProjectDetailShowing(true);
  };

  const setProjectDetailsModal = (state) => {
    if (!state) {
      document.body.style.overflowY = 'scroll';
    }
    setProjectDetailShowing(state);
  };

  return (
    <div id="projects" className="projects-container">
      <h3>Projects</h3>
      {projects.map((project) => (
        <div className="project-box">
          <img src={project.projectImage} alt={project.projectImageAlt} />
          <h4>{project.projectName}</h4>
          {project.projectFinished ? (
            <span style={{ backgroundColor: 'green' }}>Finished</span>
          ) : (
            <span style={{ backgroundColor: 'red' }}>In Progress</span>
          )}
          <button type="button" onClick={() => handleButtonClick(project.projectId)}>
            READ MORE
          </button>
        </div>
      ))}
      {projectDetailShowing && (
        <ProjectDetails
          currentId={currentProjectId}
          setDialogShowing={setProjectDetailsModal}
        />
      )}
    </div>
  );
}

export default Projects;
