import styled from "styled-components";
import detailBlue from "assets/images/detailBlue.png";
import detailGeneral from "assets/images/detailGeneral.png";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row;
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
  margin-top: 5%;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    overflow: hidden;
  }

  .content img {
    width: 80%;
    height: 250px;
    object-fit: cover;
    border-radius: 30px;
  }

  a {
    color: #1a7699;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);

    .content img {
      width: 100%;
    }

    .content {
      margin: 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);

    .content img {
      width: 100%;
    }

    .content {
      margin: 1.5rem;
    }
  }
`;

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
    width: 140%;
    content: url(${detailGeneral});
    z-index: -1;
  }

  @media (max-width: 600px) {
    .title_page h1 {
      font-size: 250%;
    }

    .title_page .detail i {
      width: 120%;
    }
  }
`;
