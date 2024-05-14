import React from "react";
import { Content } from "./style";
import Celso from "assets/images/Celso (Blue).png";

const Biography = () => {
  return (
    <>
      <Content>
        <div className="title">
          <h1>CELSO DOS FRANGOS</h1>
          <br />
          <i></i>
        </div>
        <div className="text">
          <p>
            Nasci em 09 de maio de 1970, na acolhedora cidade de Assaré, no
            interior do Ceará. Desde cedo, aprendi os valores da dedicação e do
            trabalho árduo, traçando meu caminho na avicultura, uma paixão que
            se tornou minha profissão.
            <br /> Ao longo dos anos, a avicultura não apenas sustentou minha
            família, mas também se tornou parte integrante de minha identidade.
            Foi nesse contexto que ganhei o apelido pelo qual sou conhecido até
            hoje: Celso dos Frangos. Uma alcunha que não apenas reflete minha
            atividade profissional, mas também a conexão profunda que tenho com
            minha comunidade. <br /> <br />
            Em 2012, dei um passo além em meu compromisso com minha comunidade,
            ingressando na vida política. Sob a bandeira do Partido Progressista
            (PP), fui eleito vereador na cidade do Crato, com uma votação
            expressiva de 520 votos.
          </p>

          <img src={Celso} alt="" />
        </div>
        <div className="biographyComplete">
          <a href="/historia">Biografia Completa</a>
        </div>
      </Content>
    </>
  );
};

export default Biography;
