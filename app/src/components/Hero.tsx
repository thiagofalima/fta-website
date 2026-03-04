import styled from "styled-components";
import MyLogo from "../assets/rta_logo.jpeg";

const HeroWrapper = styled.div`
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 200px;
  }

  .heading {
    margin: 1em 0 auto;
    letter-spacing: 2px;
    font-size: 1.5em;
    font-family: "Michroma", sans-serif;
    font-weight: bold;
    font-style: normal;
  }
`;

export const Hero = () => {
  return (
    <HeroWrapper>
      <div className="container">
        <h1 className="heading">Bem-vindo(a)</h1>
        <img src={MyLogo} />
      </div>
    </HeroWrapper>
  );
};
