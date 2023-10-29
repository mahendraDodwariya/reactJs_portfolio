import "./AboutContent.css";
import { Link } from "react-router-dom";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/project3.jpg";
export default function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          Im a passionate full-stack developer, I thrive on challenges and have
          a strong knack for problem-solving. With a creative mindset, I relish
          the opportunity to bring innovative ideas to life through code.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={about1} alt="true" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={about2} alt="true" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
