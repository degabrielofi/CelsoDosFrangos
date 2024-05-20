import React from "react";
import Header from "components/Header";
import Cards from "components/Cards";
import Footer from "components/Footer";
import Biography from "components/Biography";
import { Image } from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <Cards />
      <Biography />
      <Footer />
    </>
  );
};

export default Home;
