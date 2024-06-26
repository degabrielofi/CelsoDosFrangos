import styled from "styled-components";
import detailYellow from "assets/images/detailYellow.png";

export const Title = styled.div`
  .title_page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .title_page .Image {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-top: -1%;
    filter: blur(5px);
    z-index: -10;
  }

  .title_page h1 {
    position: absolute;
    letter-spacing: 5px;
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
    width: 150%;
    content: url(${detailYellow});
    z-index: -1;
  }

  @media (max-width: 600px) {
    .title_page h1 {
      font-size: 300%;
    }

    .title_page .detail i {
      width: 120%;
    }
  }
`;

export const Container = styled.div`
  margin-top: 5%;

  .topic {
    display: flex;
    margin: 0 10%;
    color: #fff;
  }

  .topic li p {
    font-size: 120%;
    margin: 0.5rem;
  }
`;
