import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left side */}
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kuchaman city, Rajasthan (341508).</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-8905744337
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mahendradodwariya16032004@gmail.com
            </h4>
          </div>
        </div>

        {/* right side */}
        <div className="right">
          <h4>In a nutshell</h4>
          <p>
            I hold a Bachelor's degree in Computer Science and Engineering,
            which I earned from the esteemed Institute PDPM IIITDM Jabalpur.
          </p>
          <div className="social">
            <NavLink to="https://github.com/mahendraDodwariya/" target="_blank">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>

            <NavLink
              to="https://www.linkedin.com/in/mahendra-dodwariya-4ab854206/"
              target="_blank"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>
            <NavLink
              to="https://leetcode.com/____mahendra____/"
              target="_blank"
            >
              <SiLeetcode
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
