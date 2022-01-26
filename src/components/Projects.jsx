import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      projectImage: "/images/project-images/bike-project.png",
      projectImageAlt: "Bike project Android app",
      projectName: "Bike?",
      projectDescription: "Sample Description",
      projectFinished: true,
    },
    {
      projectImage: "/images/project-images/library-project.jpg",
      projectImageAlt: "Library background",
      projectName: "MSU Library Guides App",
      projectDescription: "Sample Description",
      projectFinished: true,
    },
    {
      projectImage: "/images/project-images/chatroom-project.jpg",
      projectImageAlt: "Person using personal computer",
      projectName: "Chatroom",
      projectDescription: "Sample Description",
      projectFinished: false,
    },
  ];

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
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
