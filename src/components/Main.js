import React from "react";
import "./Main.css";
import "../index.css";
import IntroImage from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="bg-image">
      <div className="mask">
        <img className="intro-img" src={IntroImage} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A PROGRAMMER.</p>
        <h1>Software Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
