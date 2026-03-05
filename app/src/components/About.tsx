import { Center } from "@chakra-ui/react";
import styled from "styled-components";
import { CoFounders } from "./CoFounders";

const AboutWrapper = styled.section`
  width: 80%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  padding: 16px;

  h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin: 16px 0;
  }
`;

export const About = () => {
  return (
    <Center>
      <AboutWrapper>
        <h2>Quem somos?</h2>
        <p>
          A RTA Soluções é uma empresa especializada no desenvolvimento de
          softwares personalizados para empresas que desejam organizar
          processos, ganhar produtividade e tomar decisões com mais segurança.
        </p>
        <h2>Co-fundadores</h2>
        <CoFounders />
      </AboutWrapper>
    </Center>
  );
};
