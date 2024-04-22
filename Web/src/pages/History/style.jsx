import styled from "styled-components";
import detailBlue from "assets/images/detailBlue.png";
import detailGeneral from "assets/images/detailGeneral.png";
import detailYellow from "assets/images/detailYellow.png";

export const Title = styled.div`
  .title_page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .title_page .Crato {
    width: 100%;
    height: 300px;
    background-size: contain;
    margin-top: -1%;
    filter: blur(5px);
    z-index: -10;
  }

  .title_page h1 {
    position: absolute;
    letter-spacing: 0.2rem;
    line-height: 1rem;
    font-size: 400%;
    color: #fff;
  }

  .title_page .detail {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .title_page .detail i {
    position: absolute;
    width: 120%;
    content: url(${detailGeneral});
    z-index: -1;
  }

  @media (max-width: 600px) {
    .title_page h1 {
      font-size: 200%;
    }

    .title_page .detail i {
      width: 150%;
    }
  }
`;

export const CelsoDosFrangos = styled.div`
  margin-top: 3rem;

  .title {
    width: 100%;
  }

  .title h1 {
    position: absolute;
    padding-left: 1rem;
    letter-spacing: 0.2rem;
    line-height: 1rem;
    font-size: 400%;
    color: #09447c;
  }

  .title i {
    margin-top: -1.5rem;
    z-index: -10;
    content: url(${detailYellow});
  }

  .text {
    display: flex;
    justify-content: content;
  }

  .text p {
    margin: 1rem;
    font-size: 100%;
    color: #fff;
  }

  .text img {
    width: 30%;
    margin-top: -5rem;
  }

  @media (max-width: 600px) {
    .title h1 {
      font-size: 250%;
    }

    .title i {
      width: 100%;
      height: 50px;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .text img {
      width: 100%;
      margin-top: -2rem;
    }
  }
`;

export const Vereador = styled.div`
  margin-top: 3rem;

  .title {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .title h1 {
    position: absolute;
    padding-left: 1rem;
    letter-spacing: 0.2rem;
    line-height: 1rem;
    font-size: 400%;
    color: #fff;
  }

  .title i {
    margin-top: -0.5rem;
    z-index: -10;
    content: url(${detailBlue});
  }

  .text {
    display: flex;
    justify-content: content;
  }

  .text p {
    margin: 1rem;
    font-size: 100%;
    color: #fff;
  }

  .text img {
    width: 30%;
    margin-top: -5rem;
  }

  @media (max-width: 600px) {
    .title h1 {
      font-size: 250%;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .text img {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
