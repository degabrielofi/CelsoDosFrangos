import React from "react";
import { Title, CelsoDosFrangos, Vereador } from "./style";
import Crato from "assets/images/Crato.jpg";
import Header from "components/Header";
import Footer from "components/Footer";
import Celso from "assets/images/Celso.png";
import CelsoYellow from "assets/images/Celso Dos Frangos (Yellow).png";

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
            Nasci em 09 de maio de 1970, na acolhedora cidade de Assaré, no
            interior do Ceará. Desde cedo, aprendi os valores da dedicação e do
            trabalho árduo, traçando meu caminho na avicultura, uma paixão que
            se tornou minha profissão. <br /> <br />
            Ao longo dos anos, a avicultura não apenas sustentou minha família,
            mas também se tornou parte integrante de minha identidade. Foi nesse
            contexto que ganhei o apelido pelo qual sou conhecido até hoje:
            Celso dos Frangos. Uma alcunha que não apenas reflete minha
            atividade profissional, mas também a conexão profunda que tenho com
            minha comunidade.
          </p>
          <img src={CelsoYellow} alt="Celso2016" />
        </div>
      </CelsoDosFrangos>

      <Vereador>
        <div className="title">
          <h1>COMO VEREADOR</h1>
          <br />
          <i></i>
        </div>
        <div className="text">
          <img src={Celso} alt="Celso2012" />
          <p>
            Em 2012, dei um passo além em meu compromisso com minha comunidade,
            ingressando na vida política. Sob a bandeira do Partido Progressista
            (PP), fui eleito vereador na cidade do Crato, com uma votação
            expressiva de 520 votos. Durante esse mandato, busquei representar
            fielmente os anseios e necessidades dos cidadãos, lutando por
            políticas públicas que promovessem o desenvolvimento e o bem-estar
            de nossa cidade. <br /> <br /> Em 2016, concorri à reeleição como
            vereador na cidade do Crato, desta vez pelo Partido Republicano
            Trabalhista Brasileiro (PRTB). Recebi 527 votos, o que representou
            0,78% dos votos válidos. Embora não tenha sido eleito, fiquei em
            segundo lugar na classificação do partido, tornando-me suplente mais
            uma vez.
            <br />
            <br />
            Em 2020, mantive meu compromisso com o serviço público, concorrendo
            novamente às eleições municipais. Recebi 763 votos, o que
            representou 1,11% dos votos válidos, ficando como primeiro suplente
            do partido Movimento Democrático Brasileiro (MDB). Atualmente,
            continuo ativo na política local, como suplente a vereador no Crato.
            E já vislumbro novos desafios no horizonte: estou pré-candidato a
            vereador pelo Partido Progressista (PP) nas eleições de 2024,
            determinado a continuar lutando pelo bem-estar e progresso de nossa
            amada cidade.
          </p>
        </div>
      </Vereador>

      <Footer />
    </>
  );
};

export default History;
