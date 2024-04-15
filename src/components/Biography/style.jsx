import styled from "styled-components";
import detailYellow from "assets/images/detailYellow.jpg";

export const Content = styled.div`
  margin-top: 10%;

  .title {
    width: 100%;
  }

  .title h1 {
    position: absolute;
    padding-left: 1rem;
    letter-spacing: 0.2rem;
    line-height: 1rem;
    font-size: 5rem;
    color: #001238;
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

  .biographyComplete {
    margin-top: -2rem;
    margin-left: 2rem;
  }

  .biographyComplete a {
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    background-color: #000e35;
    padding: 0.3em 1em !important;
  }

  @media (max-width: 600px) {
    .title h1 {
      font-size: 4rem;
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
