import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main2 from "../components/Main2";
import TechSkills from "../components/TechSkills";

function Project() {
  return (
    <div>
      <Navbar />
      <Main2 heading="Skills" text="technical expertise in" />
      <TechSkills />
      <Footer />
    </div>
  );
}
export default Project;
