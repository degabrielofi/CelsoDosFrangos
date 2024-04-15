import styled from "styled-components";
import detailGeneral from "assets/images/detailYellow.jpg";

export const Container = styled.div`
  .title_page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .title_page .Crato {
    width: 100%;
    height: 100%;
    filter: blur(5px);
    z-index: -10;
  }

  .title_page h1 {
    position: absolute;
    letter-spacing: 0.2rem;
    line-height: 1rem;
    font-size: 5rem;
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
    width: 200%;
    content: url(${detailGeneral});
    z-index: -1;
  }

  @media (max-width: 600px) {
    .title_page h1 {
      font-size: 4rem;
    }

    .title_page .detail i {
      width: 150%;
    }
  }
`;
