import styled from "styled-components";

export const Card = styled.div`
  margin-top: 5%;
  width: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
  }

  .content {
    display: flex;
    padding: 2.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background: #001238;
    border-radius: 1rem;
  }

  span {
    font-weight: 700;
    color: #fff;
    font-size: 400%;
  }

  h3 {
    text-transform: uppercase;
    color: #fff;
    font-size: 120%;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 992px) {
    .container {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-gap: 30px;
    }
  }

  @media screen and (max-width: 442px) {
    .container {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: 1fr;
      grid-gap: 30px;
    }
  }
`;
