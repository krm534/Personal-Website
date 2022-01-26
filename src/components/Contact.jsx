import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h3>Contact</h3>
      <ul>
        <li>
          <img
            src="/images/contact-images/linkedin-logo.png"
            alt="Linkedin company logo"
          />
          <a
            href="https://www.linkedin.com/in/kaleb-meeks-060082188/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          <img
            src="/images/contact-images/github-logo.png"
            alt="Github company logo"
          />
          <a
            href="https://github.com/krm534"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
