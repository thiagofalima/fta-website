import styled from "styled-components";
import MyLogo from "../assets/rta_logo.jpeg";
import { Center } from "@chakra-ui/react";

const HeroWrapper = styled.div`
  img {
    width: 250px;
  }
`;

export const Hero = () => {
  return (
    <HeroWrapper>
      <Center>
        <img src={MyLogo} />
      </Center>
    </HeroWrapper>
  );
};
