import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import { SiLeetcode } from "react-icons/si";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Debajyoti Shit</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Debajyoti-Shit"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:debajyotishit1@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917585971852"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/debajyoti-shit/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://leetcode.com/Debajyoti-Shit/"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <h4>
              <SiLeetcode />
            </h4>
          </a>

          <a
            href="https://twitter.com/DebajyotiShit"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1mewbRkW8BxPmHiV7I86t3yO3bUewMekd/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>

      <Introduction />
      <Timeline />

      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
