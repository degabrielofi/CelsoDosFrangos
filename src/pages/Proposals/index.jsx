import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import { Container } from "./style";
import proposals from "data/proposals.json";

const Proposal = () => {
  return (
    <>
      <Header />
      <Container>
        {proposals.map((proposal) => {
          return (
            <a href={`/propostas/${proposal.id}`}>
              <section className="content">
                <img src={proposal.imgUrl} alt="" />
                <h4>{proposal.title}</h4>
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
