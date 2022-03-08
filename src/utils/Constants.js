export const ABOUT_ME_PARAGRAPH = "Hello! My name is Kaleb Meeks, and I enjoy engineering tech products that facilitate people's lives. My interest in computer science ultimately started with website development, but I've come to enjoy and primarily work in application development using Android / iOS systems. I'm an extremely motivated software developer with previous professional experience focused on developing high-quality and maintainable software within reasonable timeframes. I'm constantly honing my software development skills and keeping up with contemporary software development technologies. I look forward to applying my knowledge and experience in software development to solve challenging problems.";
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/kaleb-meeks-060082188/';
export const GITHUB_LINK = 'https://github.com/krm534';

export const projects = [
  {
    projectId: 0,
    projectImage: '/images/project-images/bike-project.jpg',
    projectImageAlt: 'Bike project Android app',
    projectName: 'Bike?',
    projectDescription:
      'Android application that informs users whether it is a good or bad day to ride their bike based on their personalized weather specifications. Allows users to cycle through the upcoming 7 days to check if the weather for those days matches their preferred biking preferences.',
    projectFinished: true,
    projectTags: ['Android', 'Biking', 'Weather', 'Java', 'Gradle', 'API'],
    projectLink: 'https://github.com/krm534/Biking-Android-App',
  },
  {
    projectId: 1,
    projectImage: '/images/project-images/library-project.jpg',
    projectImageAlt: 'Library background',
    projectName: 'MSU Library Guides',
    projectDescription:
      'Web application for listing research guides published by Mississippi State University. This application displays information about these MSU guides effectively and aesthetically to the user.',
    projectFinished: true,
    projectTags: ['Website', 'Library', 'Guides', 'NodeJS', 'API'],
    projectLink: 'https://github.com/krm534/MSU-Library-Web-App',
  },
  {
    projectId: 2,
    projectImage: '/images/project-images/chatroom-project.jpg',
    projectImageAlt: 'Person using personal computer',
    projectName: 'Chatroom',
    projectDescription:
      'Chatroom server and client applications for creating a chatroom environment. The chatroom server application can be installed on a personal server or a remote server. The chatroom server application disseminates messages to all other clients connected to it. The chatroom client application is used to send messages to the central server. ',
    projectFinished: false,
    projectTags: ['Chatroom', 'Client', 'Server', 'Java', 'Gradle'],
    projectLink: 'https://github.com/krm534/Chatroom-Client',
  },
];

export const experiences = [
  {
    experienceId: 0,
    experienceName: 'Howard Industries',
    experienceStartDate: 'May 2018',
    experienceEndDate: 'August 2018',
    experienceRole: 'Computer Programmer Intern',
    experienceLogo: '/images/experience-images/howard-industries-experience.jpg',
    experienceLogoAlt: 'Howard Industries job logo where I was a Computer Programmer Intern',
    experienceDescription: 'Documented all of the networking boxes from each plant location\'s plant floor. The networking box information was composed of box image snapshots and general information regarding the quality of the box. Organized all of the documented networking box information and built a web application to display the information efficiently. Also, designed and built another web application to track inventory for the IT department.',
    experienceCompanyLink: 'https://www.howardcomputers.com/index.cfm',
    experienceTags: ['ASP.NET', 'MVC', 'C#', 'MySQL'],
  },
  {
    experienceId: 1,
    experienceName: 'Babel Street',
    experienceStartDate: 'August 2019',
    experienceEndDate: 'December 2019',
    experienceRole: 'Software Developer Intern',
    experienceLogo: '/images/experience-images/babel-street-experience.jpg',
    experienceLogoAlt: 'Babel Street job logo where I was a Software Developer Intern',
    experienceDescription: 'Wrote numerous unit tests to reinforce the fundamental components and helped contribute to making the data aggregation services as rugged as possible.',
    experienceCompanyLink: 'https://www.babelstreet.com/',
    experienceTags: ['C#', 'NUnit', 'Elasticsearch', 'Kibana', 'Jira', 'Bitbucket'],
  },
  {
    experienceId: 2,
    experienceName: 'Kopis Mobile',
    experienceStartDate: 'May 2020',
    experienceEndDate: 'Present',
    experienceRole: 'Software Engineer',
    experienceLogo: '/images/experience-images/kopis-mobile-experience.jpeg',
    experienceLogoAlt: 'Kopis Mobile job logo where I am a Software Engineer',
    experienceDescription: 'Designed, developed, tested, and maintained Android / Java applications for the defense sector. Built network-intense Android / Java applications that interfaced with external devices and adapters to eﬃciently transmit and receive data. Also, conﬁgured automated testing and deployment pipelines using Gitlab for a more autonomous development lifecycle. Participated in a fast-paced, agile development process where developers are expected to learn and adapt quickly.',
    experienceCompanyLink: 'https://kopismobile.com/',
    experienceTags: ['Java', 'Android', 'GitLab', 'ATAK', 'Docker', 'AWS'],
  },
];
