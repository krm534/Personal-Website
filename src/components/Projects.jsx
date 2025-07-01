import '../styles/Projects.css';
import { projects } from '../utils/Constants';
import { Link } from "react-router";

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h1>Projects</h1>
      {projects.map((project) => (
        <div className="project-box" key={project.projectId}>
          <img src={project.projectImage} alt={project.projectImageAlt} />
          <h2>{project.projectName}</h2>
          <Link to={`/project/${project.projectId}`} state={{ currentId: project.projectId, isProject: true }}>
            <button type="button" className="projectReadMoreButton">
              READ MORE
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Projects;
