import React from "react";
import Header from "components/Header";
import Cards from "components/Cards";
import Footer from "components/Footer";
import { Image } from "./style";
import Icon from "assets/images/Banner Celso.png";
import Biography from "components/Biography";

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
