import React from "react";
import Carousel from "../src/components/Carousel/Main";
import Navbar from "../src/components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Carousel />
    </>
  );
};

export default Home;
