import React from "react";
import { useParams } from "react-router-dom";
import proposals from "data/proposalsDetails.json";
import { Container } from "./style";

const ProposalDetails = () => {
  const { id } = useParams();
  const { title, image, topics } =
    proposals.ProposalsIdentification[id].Proposals;

  return (
    <>
      <Container>{title}</Container>
    </>
  );
};

export default ProposalDetails;
