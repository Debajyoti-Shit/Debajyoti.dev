import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";

import { ThemeContext } from "../../Context/theme";

import { FaLinkedin, FaHandshake, FaRegHandshake } from "react-icons/fa";
import { Instagram } from "@material-ui/icons";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in{" "}
          <span className="different">
            Touch{" "}
            <span>
              <FaHandshake />
            </span>{" "}
          </span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/debajyoti-shit/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/Debajyoti-Shit"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:debajyotishit1@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+917585971852" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>

            <a
              href="https://twitter.com/DebajyotiShit"
              target="_blank"
              rel="noreferrer"
            >
              <VscTwitter className="twitter" />
            </a>

            <a
              href="https://youtube.com/@debajyoti.dev_"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillYoutube className="youtube" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>debajyotishit1@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+91 7585971852</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
