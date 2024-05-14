import React from "react";
import { Card } from "./style";

const Cards = () => {
  return (
    <>
      <Card>
        <section className="container">
          <div className="content">
            <span className="number">32</span>
            <h3 className="title">PROJETOS DE LEI</h3>
          </div>
          <div className="content">
            <span className="number">100</span>
            <h3 className="title">INDICAÇÕES LEGISLATIVAS</h3>
          </div>
          <div className="content">
            <span className="number">80</span>
            <h3 className="title">Moções</h3>
          </div>
          <div className="content">
            <span className="number">12</span>
            <h3 className="title">LEIS APROVADAS</h3>
          </div>
        </section>
      </Card>
    </>
  );
};

export default Cards;
