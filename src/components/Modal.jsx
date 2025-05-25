import React from 'react';
import { projects, experiences } from '../utils/Constants';
import '../styles/Modal.css';

function Modal(props) {
  const { setDialogShowing, currentId, isProject } = props;

  return (
    <div className="project-details-container">
      <div
        className="project-details-background"
        onClick={() => setDialogShowing(false)}
        onKeyDown={() => setDialogShowing(false)}
        role="button"
        aria-label="Dialog box's background can be used to close the modal"
        tabIndex={0}
      />
      <div className="current-project">
        <div className="exit-button-container">
          <i
            className="fa fa-close"
            onClick={() => setDialogShowing(false)}
            onKeyDown={() => setDialogShowing(false)}
            role="button"
            aria-label="Dialog box's exit button in the right corner can be used to close the modal"
            tabIndex={0}
          />
        </div>
        <img
          src={isProject
            ? projects[currentId].projectImage
            : experiences[currentId].experienceLogo}
          alt={isProject
            ? projects[currentId].projectImageAlt
            : experiences[currentId].experienceLogoAlt}
        />
        <h3>
          {isProject
            ? projects[currentId].projectName
            : experiences[currentId].experienceName}
        </h3>
        <p>
          {isProject
            ? projects[currentId].projectDescription
            : experiences[currentId].experienceDescription}
        </p>
        <div className="project-tags-container">
          {isProject
            ? projects[currentId].projectTags.map((tag) => {
              <span key={currentId}>{tag}</span>
            })
            : experiences[currentId].experienceTags.map((tag) => {
              <span key={currentId}>{tag}</span>
            })}
        </div>
        <div className="project-link-container">
          <a
            href={isProject
              ? projects[currentId].projectLink
              : experiences[currentId].experienceCompanyLink}
            target="_blank"
            rel="noreferrer"
          >
            {isProject
              ? 'Project '
              : `${experiences[currentId].experienceName} `}
            Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
