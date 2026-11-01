import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:vansh.pipaliya.dev@gmail.com"
                data-cursor="disable"
              >
                vansh.pipaliya.dev@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/vansh-pipaliya-a6a5b1281"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — vansh-pipaliya
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech in Computer Science &amp; Engineering, Institute of Technology, Nirma University — 2023–2027
            </p>
          </div>
          <div className="contact-box contact-box-social">
            <h4>Social</h4>
            <a
              href="https://github.com/Vanshgh7"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-pipaliya-a6a5b1281"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/vanshl7c/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="mailto:vansh.pipaliya.dev@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vansh Pipaliya</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
