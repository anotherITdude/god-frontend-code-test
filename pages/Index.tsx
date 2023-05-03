import React from "react";
import { NextPage } from "next";
import Carousel from "../src/components/Carousel/Main";
import Navbar from '../src/components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar/>
      <Carousel />
    </>
  );
};

export default Home;
