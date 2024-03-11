import React from "react";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/harsh0853" target="_blank">
          <GitHub fontSize="small" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh-raj-63b438262/"
          target="_blank"
        >
          <LinkedIn fontSize="small" className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
