import React from 'react';
import { projects } from '../utils/Constants';
import '../styles/ProjectsDetails.css';

function ProjectsDetail(props) {
  const { setDialogShowing, currentId } = props;

  return (
    <div className="project-details-container">
      <div
        className="project-details-background"
        onClick={() => setDialogShowing(false)}
        onKeyPress={() => setDialogShowing(false)}
        role="button"
        aria-label="Dialog box's background can be used to close the modal"
        tabIndex={0}
      />
      <div className="current-project">
        <div className="exit-button-container">
          <i
            className="fa fa-close"
            onClick={() => setDialogShowing(false)}
            onKeyPress={() => setDialogShowing(false)}
            role="button"
            aria-label="Dialog box's exit button in the right corner can be used to close the modal"
            tabIndex={0}
          />
        </div>
        <img
          src={projects[currentId].projectImage}
          alt={projects[currentId].projectImageAlt}
        />
        <h4>{projects[currentId].projectName}</h4>
        <p>{projects[currentId].projectDescription}</p>
        <div className="project-tags-container">
          {projects[currentId].projectTags.map((tag) => <span>{tag}</span>)}
        </div>
        <div className="project-link-container">
          <a
            href={projects[currentId].projectLink}
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetail;
