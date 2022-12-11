import React from "react";
import Contactme from "../Contactme/Contactme";
import Technologies from "../Skills/Technologies";
import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <Technologies></Technologies>
      <Contactme></Contactme>
    </div>
  );
};

export default Home;
