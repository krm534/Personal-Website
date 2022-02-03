import React, { useState } from 'react';
import '../styles/Projects.css';
import { projects } from '../utils/Constants';
import ProjectsDetail from './ProjectsDetail';

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
          <h3>{project.projectName}</h3>
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
        <ProjectsDetail
          currentId={currentProjectId}
          setDialogShowing={setProjectDetailsModal}
        />
      )}
    </div>
  );
}

export default Projects;
