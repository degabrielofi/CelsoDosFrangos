import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import { Title, Container } from "./style";
import proposals from "data/proposals.json";
import Crato from "assets/images/Crato_Praça.jpg";

const Proposal = () => {
  return (
    <>
      <Header />
      <Title>
        <div className="title_page">
          <img className="Crato" src={Crato} alt="" />
          <h1>
            PROPOSTAS
            <div className="detail">
              <i />
            </div>
          </h1>
        </div>
      </Title>
      <Container>
        {proposals.map((proposal) => {
          return (
            <a href={`/propostas/${proposal.id}`}>
              <section className="content">
                <img src={proposal.imgUrl} alt="" />
                <h1>{proposal.title}</h1>
              </section>
            </a>
          );
        })}
      </Container>
      <Footer />
    </>
  );
};

export default Proposal;
