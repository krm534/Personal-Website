import React, { useState } from 'react';
import '../styles/Experience.css';
import { experiences } from '../utils/Constants';
import Modal from './Modal';

function Experience() {
  const [currentExperienceId, setCurrentExperienceId] = useState(0);
  const [modalShowing, setModalShowing] = useState(false);

  const handleButtonClick = (experienceId) => {
    document.body.style.overflowY = 'hidden';
    setCurrentExperienceId(experienceId);
    setModalShowing(true);
  };

  const setExperienceModalShowing = (state) => {
    if (!state) {
      document.body.style.overflowY = 'scroll';
    }
    setModalShowing(state);
  };

  return (
    <div id="experience" className="experience-container">
      <h3>Experience</h3>
      <div className="experience-content-container">
        <div className="vertical" />
        {
            experiences.map((experience) => (
              <div className="experience-box">
                <img src={experience.experienceLogo} alt={experience.experienceLogoAlt} />
                <h4>{experience.experienceName}</h4>
                <ul>
                  <li>
                    <i className="fa fa-caret-right" />
                    {experience.experienceRole}
                  </li>
                  <li>
                    <i className="fa fa-caret-right" />
                    {experience.experienceStartDate}
                    {' '}
                    -
                    {' '}
                    {experience.experienceEndDate}
                  </li>
                </ul>
                <button type="button" onClick={() => handleButtonClick(experience.experienceId)}>
                  READ MORE
                </button>
              </div>
            ))
        }
      </div>
      {modalShowing && (
        <Modal
          currentId={currentExperienceId}
          setDialogShowing={setExperienceModalShowing}
          isProject={false}
        />
      )}
    </div>
  );
}

export default Experience;
