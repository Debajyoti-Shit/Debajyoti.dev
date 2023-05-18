import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  // const date = new Date().getFullYear();
  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">
              Made with{" "}
              <span style={{ color: `red`, background: `transparent` }}>❤</span>{" "}
              By Debajyoti @ 2023
            </h3>
            
          </div>
        </a>
      </div>
    </>
  );
};
