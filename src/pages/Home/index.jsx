import React from "react";
import Header from "components/Header";
import Cards from "components/Cards";
import Footer from "components/Footer";
import { Image } from "./style";
import Icon from "assets/images/Banner Celso.png";

const Home = () => {
  return (
    <>
      <Header />
      {/*  <Image>
        <img src={Icon} alt="Celso Dos Frangos" />
      </Image> */}
      {/* <Cards /> */}
      <Footer />
    </>
  );
};

export default Home;
