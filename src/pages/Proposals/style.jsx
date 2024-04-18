import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row;
  grid-template-rows: 1fr;
  grid-column-gap: 25px;

  .content {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .content img {
    width: 80%;
  }
`;
