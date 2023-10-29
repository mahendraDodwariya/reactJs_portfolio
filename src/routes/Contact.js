import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main2 from "../components/Main2";
import Form from "../components/Form";

function Contact() {
  return (
    <div>
      <Navbar />
      <Main2 heading="Contact" text="Let's connect with me" />
      <Form />
      <Footer />
    </div>
  );
}
export default Contact;
