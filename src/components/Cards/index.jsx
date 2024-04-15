import React from "react";
import { Card } from "./style";

const Cards = () => {
  return (
    <>
      <Card>
        <section className="container">
          <div className="content">
            <span className="number">849</span>
            <h3 className="title">PROJETOS DE LEI</h3>
          </div>
          <div className="content">
            <span className="number">151</span>
            <h3 className="title">INDICAÇÕES LEGISLATIVAS</h3>
          </div>
          <div className="content">
            <span className="number">995</span>
            <h3 className="title">Moções</h3>
          </div>
          <div className="content">
            <span className="number">465</span>
            <h3 className="title">LEIS APROVADAS</h3>
          </div>
        </section>
      </Card>
    </>
  );
};

export default Cards;
