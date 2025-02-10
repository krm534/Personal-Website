export const ABOUT_ME_PARAGRAPH = "Hello! My name is Kaleb Meeks, and I enjoy engineering tech products that facilitate people's lives. My interest in computer science ultimately started with website development, but I've come to enjoy and primarily work in application development using Java / Android / iOS systems. I'm an extremely motivated software developer with previous professional experience focused on developing high-quality and maintainable software within reasonable timeframes. I'm constantly honing my software development skills and keeping up with contemporary software development technologies. I look forward to applying my knowledge and experience in software development to solve challenging problems.";
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/kaleb-meeks-060082188/';
export const GITHUB_LINK = 'https://github.com/krm534';

export const projects = [
  {
    projectId: 0,
    projectImage: '/images/project-images/bike-project-background.jpg',
    projectImageAlt: 'Person biking in snowy environment',
    projectName: 'Bike?',
    projectDescription:
      'Android application that informs users whether it is a good or bad day to ride their bike based on their personalized weather specifications. Allows users to cycle through the upcoming 7 days to check if the weather for those days matches their preferred biking preferences.',
    projectTags: ['Android', 'Biking', 'Weather', 'Java', 'Gradle', 'API'],
    projectLink: 'https://github.com/krm534/Biking-Android-App',
  },
  {
    projectId: 1,
    projectImage: '/images/project-images/library-project-background.jpg',
    projectImageAlt: 'Books on shelves in a library environment',
    projectName: 'MSU Library Guides',
    projectDescription:
      'Web application for listing research guides published by Mississippi State University (MSU). This application displays information about these MSU guides effectively and aesthetically to the user.',
    projectTags: ['Website', 'Library', 'Guides', 'NodeJS', 'API'],
    projectLink: 'https://github.com/krm534/MSU-Library-Web-App',
  },
  {
    projectId: 2,
    projectImage: '/images/project-images/chatroom-project-background.jpg',
    projectImageAlt: 'Person using personal computer',
    projectName: 'Chatroom',
    projectDescription:
      'Chatroom server and client applications for creating a chatroom environment. The chatroom server application can be installed on a personal server or a remote server. The chatroom server application disseminates messages to all other clients connected to it. The chatroom client application is used to send messages or images to the central server. All messages between client and server are encrypted using an AES symmetric-key encryption sheme.',
    projectTags: ['Chatroom', 'Client', 'Server', 'Java', 'JavaFX', 'Gradle'],
    projectLink: 'https://github.com/krm534/Chatroom-Client',
  },
  {
    projectId: 3,
    projectImage: '/images/project-images/slackbot-project-background.jpg',
    projectImageAlt: 'Animated Slack bot graphic',
    projectName: 'Slack Change App Bot',
    projectDescription:
      'Slack ChatBot app for getting the fewest amount of change for a dollar input value. For example, entering 0.50 cents into the ChatBot would render 2 quarters since that is the fewest amount of change needed. This is currently a simple use for the SlackBot that could easily be updated for more practical uses.',
    projectTags: ['Slack', 'ChatBot', 'Javascript', 'Ngrok'],
    projectLink: 'https://github.com/krm534/Slack-Change-App-Bot',
  },
];

export const experiences = [
  {
    experienceId: 0,
    experienceName: 'Howard Industries',
    experienceStartDate: 'May 2018',
    experienceEndDate: 'August 2018',
    experienceRole: 'Computer Programmer Intern',
    experienceLogo: '/images/experience-images/howard-industries-logo.jpg',
    experienceLogoAlt: 'Howard Industries job logo',
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
    experienceLogo: '/images/experience-images/babel-street-logo.jpg',
    experienceLogoAlt: 'Babel Street job logo',
    experienceDescription: 'Wrote numerous unit tests to reinforce the fundamental components and helped contribute to making the data aggregation services as rugged as possible.',
    experienceCompanyLink: 'https://www.babelstreet.com/',
    experienceTags: ['C#', 'NUnit', 'Elasticsearch', 'Kibana', 'Jira', 'Bitbucket'],
  },
  {
    experienceId: 2,
    experienceName: 'Kopis Mobile',
    experienceStartDate: 'May 2020',
    experienceEndDate: 'January 2022',
    experienceRole: 'Software Engineer',
    experienceLogo: '/images/experience-images/kopis-mobile-logo.jpeg',
    experienceLogoAlt: 'Kopis Mobile job logo',
    experienceDescription: 'Designed, developed, tested, and maintained Android / Java applications for the defense sector. Built network-intense Android / Java applications that interfaced with external devices and adapters to eﬃciently transmit and receive data. Also, conﬁgured automated testing and deployment pipelines using Gitlab for a more autonomous development lifecycle. Participated in a fast-paced, agile development process where developers are expected to learn and adapt quickly.',
    experienceCompanyLink: 'https://www.kopismobile.com/',
    experienceTags: ['Java', 'Android', 'GitLab', 'ATAK', 'Docker', 'AWS'],
  },
  {
    experienceId: 3,
    experienceName: 'Raytheon Technologies',
    experienceStartDate: 'March 2022',
    experienceEndDate: 'Present',
    experienceRole: 'Software Engineer 2',
    experienceLogo: '/images/experience-images/rtx-logo.jpg',
    experienceLogoAlt: 'Raytheon Technologies job logo',
    experienceDescription: 'Design, develop, test, and maintain Java applications for Fortune 500 defense company. Helped to design and create more efficient testing processes using Jenkins pipelines. Have become somewhat of a DevOps lead for my current team leveraging modern Kubernetes tools and security practices to design and deploy microservices. Have improved into a full-stack engineer servicing all aspects of software development lifecycle from design to deployment.',
    experienceCompanyLink: 'https://www.rtx.com/',
    experienceTags: ['Java', 'Atlassian stack', 'Docker', 'Kubernetes', 'Jenkins'],
  },
];
