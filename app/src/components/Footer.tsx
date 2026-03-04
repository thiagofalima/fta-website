import styled from "styled-components";

const FooterWrapper = styled.footer`

    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 20px;
    left: 0;

    hr {
        width: 80%;
        border: 1px solid #344969;
    }
`

export const Footer = () => {
  return (
    <FooterWrapper>
        <hr />
        <p>&copy; RTA - Soluções</p>
    </FooterWrapper>
  );
};
