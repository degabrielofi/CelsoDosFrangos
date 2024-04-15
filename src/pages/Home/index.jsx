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
      {/* <Image id="Home">
        <img src={Icon} alt="Celso Dos Frangos" />
      </Image> */}
      <Cards />
      <Biography />
      <Footer />
    </>
  );
};

export default Home;
