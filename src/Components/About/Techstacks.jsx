import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaJava } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiTailwindcss,
  SiNetlify,
  SiCplusplus,
  SiMysql,
  SiVisualstudiocode,
  SiPostman,
  SiMongodb,
  SiBootstrap,
  SiPassport,
  SiReactrouter

} from "react-icons/si";
import { DiCss3, DiGit, DiSass } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";
import { Icon } from '@iconify/react';

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">   <GiSkills /> Skills</h2>
        <div className="techsection">

          <div>
            <Icon icon="teenyicons:c-solid" />
            <h5>C</h5>
          </div>
          <div>
            <SiCplusplus />
            <h5>C++</h5>
          </div>
          <div>
            <FaJava />
            <h5>Java</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiReactrouter />
            <h5>React-router</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Node.js</h5>
          </div>
          <div>
            <SiMongodb />
            <h5>MongoDB</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <SiPassport />
            <h5>Passport.js</h5>
          </div>
          <div>
            <SiBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>Material UI</h5>
          </div>
          <div>
            <Icon icon="file-icons:ejs" />
            <h5>EJS</h5>
          </div>
          <div>
            <DiSass />
            <h5>Sass</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>

          <div>
            <SiMysql />
            <h5>MySql</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>

          <div>
            <DiGit />
            <h5>Git</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiVisualstudiocode />
            <h5>VS Code</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
        </div>
      </div>
    </>
  );
};
