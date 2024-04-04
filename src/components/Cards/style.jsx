import styled from "styled-components";

export const Card = styled.div`
  margin-top: 5%;
  width: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
  }

  .content {
    padding: 2.5rem;
    text-align: center;
    background: #001238;
    border-radius: 1rem;
  }

  span {
    font-weight: 700;
    color: #fff;
    font-size: 300%;
  }

  h3 {
    text-transform: uppercase;
    color: #fff;
    font-size: 100%;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
