import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/about.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common name = "Welcome to About Us Page" imgsrc={web} visit="/contact" btname= "Contact Now"  />
    </>
  );
};

export default About;
