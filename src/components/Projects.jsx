import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      projectImage: "/images/bike-project.png",
      projectName: "Bike?",
      projectDescription: "Sample Description",
      projectFinished: true,
    },
    {
      projectImage: "/images/library-project.jpg",
      projectName: "MSU Library Guides App",
      projectDescription: "Sample Description",
      projectFinished: true,
    },
    {
      projectImage: "/images/chatroom-project.jpg",
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
            <img src={project.projectImage} />
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
