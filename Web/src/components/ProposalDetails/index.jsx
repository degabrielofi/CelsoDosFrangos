import React from "react";
import { useParams } from "react-router-dom";
import proposals from "data/proposalsDetails.json";
import { Title, Container } from "./style";

const ProposalDetails = () => {
  const { id } = useParams();
  const { title, image, Topics } =
    proposals.ProposalsIdentification[id].Proposals;

  console.log(Topics);
  return (
    <>
      <Title>
        <div className="title_page">
          <img className="Imagem" src={image} alt={title} />
          <h1>
            {title}
            <div className="detail">
              <i />
            </div>
          </h1>
        </div>
      </Title>

      <Container>
        {Topics.map((proposal) => {
          return (
            <section className="topic">
              <ul>
                <li>
                  <p>{proposal.text}</p>
                </li>
              </ul>
            </section>
          );
        })}
      </Container>
    </>
  );
};

export default ProposalDetails;
