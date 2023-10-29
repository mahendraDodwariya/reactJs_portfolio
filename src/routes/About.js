import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main2 from "../components/Main2";
import AboutContent from "../components/AboutContent";

function About() {
  return (
    <div>
      <Navbar />
      <Main2 heading="About" text="Im a Full-stack Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
