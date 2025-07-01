import { projects, experiences } from '../utils/Constants';
import '../styles/Modal.css';
import { useLocation, useNavigate } from 'react-router-dom'

function Modal() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentId, isProject } = location.state;
  document.body.style.overflowY = 'hidden';

  const resetState = () => {
    document.body.style.overflowY = 'scroll';
    navigate(-1);
  };

  return (
    <div className="project-details-container">
      <div
        className="project-details-background"
        onClick={() => resetState()}
        onKeyDown={() => resetState()}
        role="button"
        aria-label="Dialog box's background can be used to close the modal"
        tabIndex={0}
      />
      <div className="current-project">
        <div className="exit-button-container">
          <i
            className="fa fa-close"
            onClick={() => resetState()}
            onKeyDown={() => resetState()}
            role="button"
            aria-label="Dialog box's exit button in the right corner can be used to close the modal"
            tabIndex={0}
          />
        </div>
        <div className="img-container">
          <img
            src={isProject
              ? projects[currentId].projectImage
              : experiences[currentId].experienceLogo}
            alt={isProject
              ? projects[currentId].projectImageAlt
              : experiences[currentId].experienceLogoAlt}
          />
        </div>
        <h2>
          {isProject
            ? projects[currentId].projectName
            : experiences[currentId].experienceName}
        </h2>
        <p className='centered-p-tag'>
          {isProject
            ? ""
            : experiences[currentId].experienceRole}
        </p>
        <p className='centered-p-tag'>
          {isProject
            ? ""
            : experiences[currentId].experienceStartDate + " - " + experiences[currentId].experienceEndDate}
        </p>
        <p>
          {isProject
            ? projects[currentId].projectDescription
            : experiences[currentId].experienceDescription}
        </p>
        <div className="project-tags-container">
          {isProject
            ? projects[currentId].projectTags.map((value, index) => <a key={index} href={value[1]} target="_blank" rel="noopener noreferrer">{value[0]}</a>)
            : experiences[currentId].experienceTags.map((value, index) => <a key={index} href={value[1]} target="_blank" rel="noopener noreferrer">{value[0]}</a>)}
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
              ? 'Project Repository'
              : `${experiences[currentId].experienceName} Website`}
          </a>
        </div>
      </div>
    </div >
  );
}

export default Modal;
