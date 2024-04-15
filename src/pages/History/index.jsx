import React from "react";
import { Container } from "./style";
import Crato from "assets/images/Crato.jpg";
import Header from "components/Header";
import Footer from "components/Footer";

const History = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="title_page">
          <img className="Crato" src={Crato} alt="" />
          <h1>
            MINHA HISTÓRIA
            <div className="detail">
              <i />
            </div>
          </h1>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default History;
