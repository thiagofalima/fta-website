import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100vw;
  color: white;
  padding: 16px;
  background-color: #354e72;

  h1 {
    font-family: Michroma, sans-serif;
    font-size: 1.25em;
    text-align: center;
    font-weight: 500;
    letter-spacing: 2px;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Bem-vindo(a)</h1>
    </HeaderWrapper>
  );
};
