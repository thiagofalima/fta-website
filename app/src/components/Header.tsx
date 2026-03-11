import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const HeaderWrapper = styled.header`
  width: 100vw;
  color: white;
  padding: 16px;
  background-color: #344969;
  border-bottom: 2px solid #ffffff;
  position: sticky;
  top: 0;

  h1 {
    font-family: Michroma, sans-serif;
    font-size: 1.25em;
    text-align: center;
    font-weight: 500;
    letter-spacing: 2px;
  }

  ul.nav__links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  li.link {
    letter-spacing: 2px;
    transition: opacity 0.5s, text-decoration 1s
  }

  li.link:hover {
    opacity: 0.6;
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="nav">
        <ul className="nav__links">
          <li className="link">
            <Link smooth to="#About">
              Sobre
            </Link>
          </li>
          <li className="link">
            <Link smooth to="#WhatWeDo">
              Soluções
            </Link>
          </li>
          <li className="link">
            <Link smooth to="#Contact">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
