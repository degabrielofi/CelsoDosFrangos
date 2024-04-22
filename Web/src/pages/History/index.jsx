import React from "react";
import { Title, CelsoDosFrangos, Vereador } from "./style";
import Crato from "assets/images/Crato.jpg";
import Header from "components/Header";
import Footer from "components/Footer";
import Celso from "assets/images/Celso Dos Frangos (1).png";

const History = () => {
  return (
    <>
      <Header />
      <Title>
        <div className="title_page">
          <img className="Crato" src={Crato} alt="" />
          <h1>
            MINHA HISTÓRIA
            <div className="detail">
              <i />
            </div>
          </h1>
        </div>
      </Title>

      <CelsoDosFrangos>
        <div className="title">
          <h1>CELSO RODRIGUES</h1>
          <br />
          <i></i>
        </div>
        <div className="text">
          <p>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum." <br /> <br />
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          </p>
          <img src={Celso} alt="" />
        </div>
      </CelsoDosFrangos>

      <Vereador>
        <div className="title">
          <h1>COMO VEREADOR</h1>
          <br />
          <i></i>
        </div>
        <div className="text">
          <img src={Celso} alt="" />
          <p>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum." <br /> <br />
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          </p>
        </div>
      </Vereador>

      <Footer />
    </>
  );
};

export default History;
