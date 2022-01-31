export const ABOUT_ME_PARAGRAPH =
  "Extremely motivated software developer with previous professional experience focused on developing high-quality and maintainable software within reasonable timeframes. Constantly honing software development skills and keeping up with contemporary software development technologies. Looking forward to applying my knowledge and experience in software development to solve challenging problems.";

export const projects = [
  {
    projectId: 0,
    projectImage: "/images/project-images/bike-project.jpg",
    projectImageAlt: "Bike project Android app",
    projectName: "Bike?",
    projectDescription:
      "Android application that informs users whether it is a good or bad day to ride their bike based on their personalized weather specifications. Allows users to cycle through the upcoming 7 days to check if the weather for those days matches their preferred biking preferences.",
    projectFinished: true,
    projectTags: ["Android", "Biking", "Weather", "Java", "Gradle", "API"],
  },
  {
    projectId: 1,
    projectImage: "/images/project-images/library-project.jpg",
    projectImageAlt: "Library background",
    projectName: "MSU Library Guides App",
    projectDescription:
      "Web application for listing research guides published by Mississippi State University. This application displays information about these MSU guides effectively and aesthetically to the user.",
    projectFinished: true,
    projectTags: ["Website", "Library", "Guides", "NodeJS", "API"],
  },
  {
    projectId: 2,
    projectImage: "/images/project-images/chatroom-project.jpg",
    projectImageAlt: "Person using personal computer",
    projectName: "Chatroom",
    projectDescription:
      "Chatroom server and client applications for creating a chatroom environment. The chatroom server application can be installed on a personal server or a remote server. The chatroom server application disseminates messages to all other clients connected to it. The chatroom client application is used to send messages to the central server. ",
    projectFinished: false,
    projectTags: ["Chatroom", "Client", "Server", "Java", "Gradle"],
  },
];
