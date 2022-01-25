import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h3>Contact</h3>
      <ul>
        <li>
          <img src="/images/email-icon.png" />
          <a>krmeeks15@gmail.com</a>
        </li>
        <li>
          <img src="/images/linkedin-icon.png" />
          <a href="https://www.linkedin.com/in/kaleb-meeks-060082188/">
            LinkedIn Profile
          </a>
        </li>
        <li>
          <img src="/images/github-icon.png" />
          <a href="https://github.com/krm534">Gihub Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
