import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Work from "../components/Work";
import TechSkills from "../components/TechSkills"

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Work />
      <TechSkills/>
      <Footer />
    </div>
  );
}

export default Home;
