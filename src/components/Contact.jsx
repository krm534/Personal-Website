import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h3>Contact</h3>
      <div className="contact-row-container">
        <div className="email-container">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <p>krmeeks15@gmail.com</p>
        </div>
        <div className="linkedin-container">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
