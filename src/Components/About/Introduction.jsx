import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/myImage-for-portfolio.jpg";
import { FaUserCheck } from "react-icons/fa";



export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const date = new Date().getFullYear();
  const age = date - 2000;

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            <FaUserCheck /> About <span className="different"> ME  </span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Debajyoti Shit</span>, a {age} years old Web Developer from{" "}
                <span className="different">
                  {" "}
                  Jhargram, West Bengal (India)
                </span>
                . I have completed my graduation in BTech (Information Technology)
                from{" "}
                <span className="different">
                  Jalpaiguri Government Engineering College(WB).
                </span>

                Then  I began my career as a Software Engineer,
                excited to work alongside talented professionals and contribute to the company's success.

              </h4>
              <h4>Terms That can describe me :</h4>
              <h5 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Software Developer{" "}
              </h5>
              <h5 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Problem Solver {" "}
              </h5>
              <h5 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                God Believer{" "}
              </h5>
              <h5 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h5>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};
