import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main2 from "../components/Main2";
import Work from "../components/Work";

function Project() {
  return (
    <div>
      <Navbar />
      <Main2 heading="WORK" text="Some of my most recent works" />
      <Work />
      <Footer />
    </div>
  );
}
export default Project;
