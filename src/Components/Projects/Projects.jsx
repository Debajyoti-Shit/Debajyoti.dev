import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiPostman,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiPassport
} from "react-icons/si";
import { DiCss3, DiJavascript } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { Icon } from '@iconify/react';
export const Projects = () => {
  return (
    <>
      <div className="section">

        <h2 className="section__title different">  <span> Projects </span>  </h2>
        <div className="allProjects">
          {/* 1st project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/QQcGMvd/ecom-ss.png"
                    alt="eCommerce app image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Ecommerce app</h2>
                <p>
                  A simple eCommerce app, where user can add products, updates the products, and Delete the product from product list
                  and add products to Cart. also see the product in details.
                  And also sort the product list according to the prices
                </p>
                <div>

                  <FaReact />
                  <SiReactrouter />
                  <SiRedux />
                  <DiCss3 />
                  <SiMaterialui />
                  <IoLogoJavascript />

                </div>
                <div>
                  <a
                    href="https://debajyoti-shit.github.io/React-eCommerce/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/Debajyoti-Shit/React-eCommerce/tree/master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/tM90Vyf/placement-ceell-ss.png"
                    alt="placement-cell-image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>
                  Placement-Cell
                </h2>
                <p>
                  This is a backend specific web application, where authorized user can keep track of
                  students placement status, and user can download students report in CSV file.
                  And get real time job updates.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <Icon icon="file-icons:ejs" />
                  <DiCss3 />

                  <IoLogoJavascript />
                  <SiPassport />

                </div>
                <div>
                  <a
                    href="https://placement-cell-n141.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Live Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/Debajyoti-Shit/Placement-Cell"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/WWz6nB9/note-keeper-ss.png" alt="note-keeper-image" />
                </div>
              </div>
              <div className="project_information">
                <h2>Notes Keeper</h2>
                <p>
                  Notes Keeper is notes taking app inspired by the Google Keep app.
                  Implemented functionalities like:- 1. Add Notes, 2. Delete Notes. And
                  Store the data using Local Storage, etc.
                </p>
                <div>
                  <FaReact />
                  <DiCss3 />
                  <SiMaterialui />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://debajyoti-shit.github.io/Notes-Keeper/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/Debajyoti-Shit/Notes-Keeper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 4th */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/z8rFq0G/polling-api-demo-ss.png"
                    alt="polling system-api-demo-image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Polling system API</h2>
                <p>
                  Backend API for polling questions and answers,
                  User can 1. Create question, 2. Add options to a question, 3. Add a vote to an option of question
                  4. Delete a question, 5. Delete an option, 5. View a question with it’s options.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiPostman />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/watch?v=Ir61CW2BXCU&t=73s&ab_channel=Debajyoti"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Demo Video
                    </span>
                  </a>
                  <a
                    href="https://github.com/Debajyoti-Shit/Polling-System-API"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 5th */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/CBjHYF9/csv-explorer-SS.png"
                    alt="csv-explorer-image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>CSV-Explorer</h2>
                <p>
                  Features:-
                  1. CSV to JSON conversion,
                  2. Showing JSON data in a tabular format,
                  3. Searching data,
                  4. Sorting data in ascending and descending order.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <Icon icon="file-icons:ejs" />

                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://csv-explorer-by-debajyotishit.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/Debajyoti-Shit/CSV-Explorer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 6th */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://gcdnb.pbrd.co/images/cmD0rbDxdpbO.png?o=1"
                    alt="Super-hero-hunter-image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Super Hero Hunter</h2>
                <p>
                  This a simple ftont-end web application.
                  Features:- 1. user can search for their Marvel super hero.
                  2. views the details of the hero
                  3. Mark the hero as favourite and unfavourite

                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://debajyoti-shit.github.io/Super-Hero-Hunter/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/Debajyoti-Shit/Super-Hero-Hunter/tree/master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
